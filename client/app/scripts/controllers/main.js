'use strict';

angular.module('clientApp').controller('MainCtrl', function ($scope, $http) {

  angular.extend($scope, {
    defaults: {
      tileLayer: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
      maxZoom: 20,
      path: {
        weight: 10,
        color: '#800000',
        opacity: 1
      }
    },
    // 53° 33' 0" N / 10° 0' 0" E
    center: {
      lat: 53.6,
      lng: 10.0,
      zoom: 11
    },
    events: {
      map: {
        enable: ['click'],
        logic: 'emit'
      }
    }
  });
  
  function generateTemplate(kita){
    var tmpl = '<div>';
    
    if (kita.website !== undefined){
      tmpl += '<a href="' + kita.website + '" target="blank">' + kita.name + '</a></br>';
    } else{
      tmpl +=  '<b>' + kita.name + '</b></br>';
    }
    
    tmpl += '<u>Träger</u>: ' + kita.operator + '</br>';
    
    if (kita.email !== undefined && kita.contact !== undefined){
      tmpl += '<u>Ansprechpartner</u>: <a href="mailto:' + kita.email + '">' + kita.contact + '</a>';
    }
    if (kita.phone !== undefined) {
      tmpl += ' (' + kita.phone + ')';
    }
    
    tmpl += '</div>';
    return tmpl;
  }


  // Get the countries geojson data from a JSON
  $http.get('kindergarten_hamburg.geojson').success(function(data) {
    angular.extend($scope, {
      geojson: {
        data: data,
        style: {
          fillColor: 'black',
          weight: 1,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7
        },
        onEachFeature: function (feature, layer) {
          layer.bindPopup(generateTemplate(feature.properties));
        }
      }
    });
  });

  // gets blocked by onEachFeature binding popupshow to onclick
  $scope.$on('leafletDirectiveMap.geojsonClick', function(selected, event){
    console.log(event);
	
  });
});
