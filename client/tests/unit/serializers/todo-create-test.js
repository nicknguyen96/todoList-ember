import { module, test } from 'qunit';

import { setupTest } from 'client/tests/helpers';

module('Unit | Serializer | todo create', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('todo-create');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('todo-create', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
