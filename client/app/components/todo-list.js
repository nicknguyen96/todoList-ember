import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class TodoListComponent extends Component {
  @service todo;

  options = {
    incomplete: 'In Complete',
    inprocess: 'In Process',
    completed: 'Completed',
  };

  @action
  async deleteItem(todo_id) {
    let isDelete = confirm('Are you sure you want to delete this?');
    if (!isDelete) return;
    this.todo.deleteRecord(todo_id);
  }
}
