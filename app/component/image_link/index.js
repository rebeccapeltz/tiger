'use strict';
require('./image_link.scss');

const angular = require('angular');


angular.module('demoApp').directive('imageLink', function() {
  return {
    restrict: 'A',
    //template: '<h1>test</h1>'
    template: require('./image_link.html')
  };
});