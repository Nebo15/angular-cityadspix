'use strict';


angular.module('cityadspix', [])
  .provider('$cityadspix', function () {

    var config = {
      id: null
    };
    function noop () {
      console.warn('You have not initialized cityadspix');
    }
    return {
      init: function (id) {
        config.id = id;
      },
      $get: ['$log','$http', function ($log, $http) {
        if (!config.id) return {
          track: noop
        };

        function track (id) {
          return $http.jsonp('https://cityadspix.com/track/'+id+'/ct/q1/c/'+config.id+'?md=2');
        }

        return {
          track: track
        }
      }]
    }
  });
