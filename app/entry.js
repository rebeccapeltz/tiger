'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');


// npm modules
const angular = require('angular');
const angular_route = require('angular-route');

// angular modules
var app = angular.module('demoApp', [angular_route]);

//setting data in root scope because we haven't learned how to make services yet
app.run(['$rootScope', function($rootScope) {
  $rootScope.imageData = [{
    id: 1,
    url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
    description: 'Cute Bunny 1'
  }, {
    id: 2,
    url: 'https://c4.staticflickr.com/5/4070/4479409507_844b7129e7_b.jpg',
    description: 'Cute Bunny 2'
  }, {
    id: 3,
    url: 'https://c1.staticflickr.com/3/2019/5824431381_7fc17099d5_b.jpg',
    description: 'Cute Bunny 3'
  }, {
    id: 4,
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Giant_inflatable_bunnies_have_taken_over_City_Hall._(26412731036).jpg',
    description: 'Cute Bunny 3'
  }];
}]);

app.config(['$routeProvider', function($route) {
  $route
    .when('/', {
      templateUrl: '/app/views/home/home.html',
      controller: 'HomeController',
      controllerAs: 'hc'
    })
    .when('/#', {
      templateUrl: '/app/views/home/home.html',
      controller: 'HomeController',
      controllerAs: 'hc'
    })
    .when('/thumbnail', {
      templateUrl: '/app/views/thumbnail/thumbnail.html',
      controller: 'ThumbnailController',
      controllerAs: 'th'
    })
    .when('/fullsize', {
      templateUrl: '/app/views/fullsize/fullsize.html',
      controller: 'FullsizeController',
      controllerAs: 'fs'
    })
    .when('/fullsize/:id', {
      templateUrl: '/app/views/fullsize/fullsize.html',
      controller: 'FullsizeController',
      controllerAs: 'fs'
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
require('./views/thumbnail');


// angular services