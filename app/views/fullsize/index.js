'use strict';

const angular = require('angular');

const demoApp = angular.module('demoApp');

demoApp.controller('FullsizeController', ['$routeParams', function($routeParams) {
  console.log('$routeParams', $routeParams.id || 'no id');
  this.images = [{
    id: 1,
    url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
    description: 'Cute Bunny 1'
  }, {
    id: 2,
    url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
    description: 'Cute Bunny 2'
  }];
  this.imageUrl = this.images[$routeParams.id || 1];
}]);