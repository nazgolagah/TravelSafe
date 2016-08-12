import Ember from 'ember';

export default Ember.Component.extend({
  initializeMap() {

    // var heatmapData = [
    //   new google.maps.LatLng(37.782, -122.447),
    //   new google.maps.LatLng(36.778261, -119.417932),
    //   new google.maps.LatLng(40.714353, -74.005973),
    //   new google.maps.LatLng(40.728157, -74.077642),
    //   new google.maps.LatLng(40.789142, -73.13496),
    //   new google.maps.LatLng(26.705621, -80.03643),
    //   new google.maps.LatLng(38.80261, -116.419389),
    //   new google.maps.LatLng(48.856614, 2.352222),
    //   new google.maps.LatLng(35.874379, 14.393865),
    //   new google.maps.LatLng(42.650665, 18.094423),
    //   new google.maps.LatLng(37.785, -122.441),
    //   new google.maps.LatLng(40.728157, -74.077642),
    //   new google.maps.LatLng(37.785, -122.437),
    //   new google.maps.LatLng(40.714353, -74.005973),
    //   new google.maps.LatLng(51.511214, -0.119824),
    //   new google.maps.LatLng(52.130661, -3.783712),
    //   new google.maps.LatLng(30.375321, 69.345116),
    //   new google.maps.LatLng(-37.814107, 144.96328),
    //   new google.maps.LatLng(33.867487, 151.20699),
    //   { location: new google.maps.LatLng(40.416775, -3.70379), weight: 6 },
    //   { location: new google.maps.LatLng(41.385064, 2.173403), weight: 2 },
    //   { location: new google.maps.LatLng(52.130661, -3.783712), weight: 2 },
    //   { location: new google.maps.LatLng(55.378051, -3.435973), weight: 8 },
    //   { location: new google.maps.LatLng(-40.900557, 174.885971), weight: 6 },
    //   { location: new google.maps.LatLng(40.714353, -74.005973), weight: 6 }
    // ];

    let myMapOptions = {
      zoom: 4,
      center: new google.maps.LatLng(40.785611, -25.94700),
      mapTypeId: google.maps.MapTypeId.TERRAIN //Map Type (TERRAIN, ROADMAP, SATELLITE, HYBRID)
    };

    console.log("document.getElementById('map')", document.getElementById('map'));
    console.log("Ember.$('#map')", Ember.$('#map'));

    let map = new google.maps.Map(document.getElementById('map'), myMapOptions);

    // let heatmap = new google.maps.visualization.HeatmapLayer({
    //   data: heatmapData,
    //   dissipating: false,
    //   map: map
    // });
  },
  didInsertElement(){
    this.initializeMap();
  }
});
