'use strict';

const angular = require('angular');

const demoApp = angular.module('demoApp');

demoApp.controller('FullsizeController', ['$routeParams', '$rootScope', function($routeParams, $rootScope) {
  let index = Number.parseInt($routeParams.id || 1);
  this.images = $rootScope.imageData;
  this.image = this.images[index - 1];
}]);