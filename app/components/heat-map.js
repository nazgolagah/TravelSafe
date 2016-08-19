import Ember from 'ember';

let { Component, inject } = Ember;
let arr = [];
var x,y;

export default Component.extend({
  fetchCsv: inject.service(),
  initializeMap(heatmapData) {
    console.log('heatmapData', heatmapData);
    for(var i=1; i<heatmapData["data"].length-1; i++){
      var loc = heatmapData["data"][i];
      var locy = Number(loc[9]);
      var locx = Number(loc[10]);
      arr.push(new google.maps.LatLng(locx, locy));
   }
    var fakeHeatMapData = arr;

    let myMapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(37.775, -122.419),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    let map = new google.maps.Map(document.getElementById('map'), myMapOptions);
    let PlacesService = new google.maps.places.PlacesService(map);

    console.log('PlacesService', PlacesService);
    google.maps.event.addListener(map, 'dragend', ()=> {
      var coordinates = map.getCenter();
      var request = {
        location: coordinates,
        radius: '1000',
        query: 'hotel'
      };
      PlacesService.textSearch(request, callback);
    } );


    function callback(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          // createMarker(results[i]);
        }
        console.log("hellooo", results);
        for(var j=0; j<results.length; j++){
          var hotel = results[j];
          var hotelLoc = hotel.geometry.location;
          var marker = new google.maps.Marker({
            position: hotelLoc,
            map: map,
            title: 'Hello World!'
          });
        }
      }
    }


    console.log('fakeHeatMapData', fakeHeatMapData);

    let heatmap = new google.maps.visualization.HeatmapLayer({
      data: fakeHeatMapData,
      map: map
    });

  },
  didInsertElement(){
    this.get('fetchCsv').getCrimeFile().then(
      (response)=> {
        this.initializeMap(response);
      });
  }
});
