import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TodoItemRoute extends Route {
  @service store;
  @service router;

  async model(params) {
    try {
      console.log(params);
      const todoList = await this.store.findAll('todo');
      const item = todoList.find((i) => i.id == params.todo_id);
      if (item) {
        return item;
      } else {
        console.log('redirect to home');
        this.router.transitionTo('not-found');
        return null;
      }
    } catch (error) {}
  }
}
