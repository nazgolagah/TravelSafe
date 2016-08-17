import Ember from 'ember';

export default Ember.Service.extend({
  getCrimeFile() {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Papa.parse('/crime.csv', {
        download: true,
        complete: resolve,
        error: reject
      });
    });
  }
});
