'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');


// npm modules
const angular = require('angular');
const angular_route = require('angular-route');

// angular modules
var app = angular.module('demoApp', [angular_route]);
// app.run(['$rootScope', function(rootScope){
//   rootScope.images();
// });
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

//https://upload.wikimedia.org/wikipedia/commons/8/8b/Giant_inflatable_bunnies_have_taken_over_City_Hall._(26412731036).jpg

//https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwjU7Imvg8zOAhUO-GMKHXV7CGUQjBwIBA&url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F3c%2FPaderborner_Dom_Dreihasenfenster.jpg&psig=AFQjCNHRWGfEJbou-a4p5tg-OrV7-tu3kg&ust=1471646132187435

//https://pixabay.com/p-585109/?no_redirect