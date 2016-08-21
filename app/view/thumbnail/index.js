'use strict';

const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.controller('ThumbnailController', ['$rootScope', function($rootScope) {
  this.images = $rootScope.imageData;
}]);