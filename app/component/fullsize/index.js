'use strict';
require('./fullsize.scss');

const angular = require('angular');

angular.module('demoApp').directive('fullsize', function() {
  return {
    restrict: 'AE',
    //template: '<h1>test</h1>'
    template: require('./fullsize.html')
  };
});