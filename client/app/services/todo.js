import Service from '@ember/service';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

const BACKEND_URL = 'http://localhost:3000/';

export default class TodoService extends Service {
  @service store;
  @service todo;
  @service loading;
  @service router;

  @action
  async updateRecord(data, newItem) {
    try {
      const { title, status, description } = newItem;
      if (!(title && status && description)) {
        alert('All input fields are required!');
        return;
      }
      this.loading.turnLoadingOn();
      let res = await fetch(`${BACKEND_URL}todos/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });

      let resJson = await res.json();

      if (resJson.status == 200) {
        data.title = title;
        data.status = status;
        data.description = description;
        data.updatedAt = resJson.data.updatedAt;
        this.router.transitionTo('todo');
      } else {
        throw new Error('something wrong in the backend');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        this.loading.turnLoadingOff();
        console.log(this.loading.isLoading);
      }, 1000);
    }
  }

  @action
  async deleteRecord(todo_id) {
    try {
      if (!todo_id) return;
      this.loading.turnLoadingOn();
      let res = await fetch(`${BACKEND_URL}todos/${todo_id}`, {
        method: 'DELETE',
      });
      let resJson = await res.json();
      console.log(resJson);
      if (resJson.status == 200) {
        let record = this.store.peekRecord('todo', todo_id);
        record.destroyRecord();
      } else {
        throw new Error('something wrong here');
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setTimeout(() => {
        this.loading.turnLoadingOff();
      },1000);
    }
  }

  @action
  async createRecord(data) {
    try {
      // this will store to ember store
      const { title, status, description } = data;
      console.log(data);
      if (!(title && status && description)) {
        alert('All input fields are required!');
        return;
      }
      this.loading.turnLoadingOn();
      let res = await fetch(`${BACKEND_URL}todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      let resJson = await res.json();
      if (resJson.status == 201) {
        data = {
          ...resJson.data,
          id: resJson.data._id,
        };
        delete data._id;
        // do this way to repend the new record instead of prepend it
        this.store.createRecord('todo', data);
        this.router.transitionTo('todo');
      } else {
        throw new Error('Something wrong');
      }
      
      // this will actually call the the server
      // await todoItem.save();
    } catch (error) {
      console.log(error);
    } finally{
      setTimeout(() => {
        this.loading.turnLoadingOff()
      }, 1000);
    }
  }
}
