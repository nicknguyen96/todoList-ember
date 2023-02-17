import { module, test } from 'qunit';
import { setupTest } from 'client/tests/helpers';

module('Unit | Route | todo-create', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:todo-create');
    assert.ok(route);
  });
});
