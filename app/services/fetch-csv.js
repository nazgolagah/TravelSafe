import Ember from 'ember';

export default Ember.Service.extend({

  getCrimeFile() {
    let url = '/crime.csv';
    Papa.parse(url, {
	     download: true,
	     complete: function(results) {
		       console.log(results);
	     }
     });
  }
});
