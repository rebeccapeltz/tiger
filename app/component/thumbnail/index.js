'use strict';
require('./thumbnail.scss');

const angular = require('angular');

angular.module('demoApp').directive('thumbnail', function() {
  return {
    restrict: 'A',
    template: require('./thumbnail.html')
  };
});