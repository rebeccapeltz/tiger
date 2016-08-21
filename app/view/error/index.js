'use strict';
require('./error.scss');

const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.controller('ErrorController', ['$rootScope', function($rootScope) {
  this.errorMessage = $rootScope.errorMessage;
}]);