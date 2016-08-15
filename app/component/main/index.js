'use strict';
require('./main.scss');

const angular = require('angular');

angular.module('demoApp').directive('appMain', function() {
  return {
    restrict: 'E',
    //replace: true,
    template: require('./main.html'),
    controller: [MainController],
    controllerAs: 'mainCtrl',
    bindToController: true,
    scope: {},
  };
});
// demoApp.directive('imageLink', function() {
//   return {
//     restrict: 'A',
//     //template: '<h1>test</h1>'
//     template: require('../image_link/image_link.html')
//   };
// });

function MainController() {
  this.example = 'hello world';
};