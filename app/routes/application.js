import Ember from 'ember';

export default Ember.Route.extend({
  file: Ember.inject.service('fetch-csv'),
  model() {
    this.get('file').getCrimeFile();
  }
});
