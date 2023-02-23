import { module, test } from 'qunit';
import { setupTest } from 'client/tests/helpers';

module('Unit | Route | algorithm/closest-three-sum', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:algorithm/closest-three-sum');
    assert.ok(route);
  });
});
