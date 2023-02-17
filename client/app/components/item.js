import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ItemComponent extends Component {
  @service todo;

  item = this.args.item;

  options = {
    incomplete: 'In Complete',
    inprocess: 'In Process',
    completed: 'Completed',
  };

  title = this.item.title;
  status = this.item.status;
  description = this.item.description;

  @action
  onChange($event) {
    this.status = $event.target.value;
  }

  @action
  updateItem() {
    console.log(this.title, this.status, this.description);
    let newItem = {
      title: this.title,
      status: this.status,
      description: this.description,
    };
    this.todo.updateRecord(this.item, newItem);
  }
}
