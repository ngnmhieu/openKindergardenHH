'use strict';

angular.module('clientApp').controller('MainCtrl', function ($scope, $http) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  angular.extend($scope, {
    defaults: {
      tileLayer: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
      maxZoom: 14,
      path: {
        weight: 10,
        color: '#800000',
        opacity: 1
      }
    },
    // 53° 33' 0" N / 10° 0' 0" E
    center: {
      lat: 53.33,
      lng: 10.0,
      zoom: 9
    }
  });

  // Get the countries geojson data from a JSON
  $http.get('kindergarten_hamburg.geojson').success(function(data, status) {
    console.log(data)
    angular.extend($scope, {
      geojson: {
        data: data,
        style: {
          fillColor: "black",
          weight: 2,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7
        }
      }
    });
  });
});
