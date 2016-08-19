'use strict';

const angular = require('angular');

const demoApp = angular.module('demoApp');

demoApp.controller('FullsizeController', ['$routeParams', '$rootScope', function($routeParams, $rootScope) {
  console.log('$routeParams', $routeParams.id || 1);
  let index = Number.parseInt($routeParams.id || 1);
  // this.images = [{
  //   id: 1,
  //   url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
  //   description: 'Cute Bunny 1'
  // }, {
  //   id: 2,
  //   url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
  //   description: 'Cute Bunny 2'
  // }];
  this.images = $rootScope.imageData;
  console.log('images', this.images);
  console.log('index', index);
  //debugger;
  this.image = this.images[index - 1];
  console.log('fs image', this.image);
}]);