import EmberRouter from '@ember/routing/router';
import config from 'client/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('todo', { path: 'todo-list' });
  this.route('item', { path: 'todo-list/:todo_id' });
  this.route('todo-create', { path: 'todo-list/create-item' });
  this.route('algorithm', function () {
    this.route('zig-zag-conversion');
    this.route('bst');
    this.route('closest-three-sum');
  });

  this.route('not-found', { path: '**' });
});
