'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');


// npm modules
const angular = require('angular');

const angular_route = require('angular-route');

// angular modules
var app = angular.module('demoApp', [angular_route]);
app.config(['$routeProvider', function($route) {
  $route
    .when('/', {
      templateUrl: '/app/views/home/home.html',
      controller: 'HomeController',
      controllerAs: 'hc'
    })
    .when('/#', {
      templateUrl: '/app/views/home/index.html',
      controller: 'HomeController'
    })
    .when('/fullsize', {
      templateUrl: '/app/views/fullsize/fullsize.html',
      controller: 'FullsizeController'
    })
    .when('/fullsize/:id', {
      templateUrl: '/app/views/fullsize/fullsize.html',
      controller: 'FullsizeController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

// angular components
require('./component/main');
require('./component/image_link');
require('./component/thumbnail');
require('./component/fullsize');
require('./views/home');
require('./views/fullsize');


// angular services