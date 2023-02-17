import RESTAdapter from '@ember-data/adapter/rest';

export default class TodoAdapter extends RESTAdapter {
  host = 'http://localhost:3000';
}
