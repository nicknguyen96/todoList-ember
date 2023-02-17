import RESTSerializer from '@ember-data/serializer/rest';

export default class TodoSerializer extends RESTSerializer {
  primaryKey = '_id';

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      todos: payload.data,
    };
    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType
    );
  }
}
