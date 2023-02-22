import { module, test } from 'qunit';
import { setupTest } from 'client/tests/helpers';

module('Unit | Route | algorithm/zig-zag-conversion', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:algorithm/zig-zag-conversion');
    assert.ok(route);
  });
});
