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
      templateUrl: '/app/views/home/index.html',
      controller: 'HomeController',
      controllerAs: 'hc'
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


// angular services

//https://upload.wikimedia.org/wikipedia/commons/8/8b/Giant_inflatable_bunnies_have_taken_over_City_Hall._(26412731036).jpg

//https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwjU7Imvg8zOAhUO-GMKHXV7CGUQjBwIBA&url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F3c%2FPaderborner_Dom_Dreihasenfenster.jpg&psig=AFQjCNHRWGfEJbou-a4p5tg-OrV7-tu3kg&ust=1471646132187435

//https://pixabay.com/p-585109/?no_redirect