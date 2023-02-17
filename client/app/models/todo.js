import Model, { attr } from '@ember-data/model';

export default class TodoModel extends Model {
  @attr title;
  @attr description;
  @attr status;
  @attr createdAt;
  @attr updatedAt;
}
