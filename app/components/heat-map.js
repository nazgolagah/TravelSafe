import Ember from 'ember';

let { Component, inject } = Ember;
let arr = [];

export default Component.extend({
  fetchCsv: inject.service(),
  initializeMap(heatmapData) {
    console.log('heatmapData', heatmapData);
    for(var i=1; i<2; i++){
      var loc = heatmapData["data"][i];
      var locx = Number(loc[9]);
      var locy = Number(loc[10]);
      arr.push(new google.maps.LatLng(locx, locy));
   }
    var fakeHeatMapData = arr;

    let myMapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(37.775, -122.419),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    let map = new google.maps.Map(document.getElementById('map'), myMapOptions);

    console.log('fakeHeatMapData', fakeHeatMapData);
    let heatmap = new google.maps.visualization.HeatmapLayer({
      data: fakeHeatMapData
    });

    heatmap.setMap(map);

  },
  didInsertElement(){
    this.get('fetchCsv').getCrimeFile().then(
      (response)=> {
        this.initializeMap(response);
      });
  }
});
