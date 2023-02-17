import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { fetch } from 'fetch';

export default class TodoCreateController extends Controller {
  @service store;
  @service todo;

  @tracked title = '';
  @tracked status = 'inprocess';
  @tracked description = '';

  @action
  async addItem() {
    try {
      const data = {
        title: this.title,
        status: this.status,
        description: this.description,
      };
      this.todo.createRecord(data);
      this.reset();
    } catch (error) {
      console.log(error);
    }
  }

  reset() {
    this.title = '';
    this.description = '';
    this.status = 'incomplete';
  }

  @action
  onChange($event) {
    this.status = $event.target.value;
  }
}
