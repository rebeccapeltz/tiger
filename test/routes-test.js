'use strict';
describe('route tests', () => {

  beforeEach(() => {
    angular.module('demoApp', ['ngRoute']);
    angular.mock.inject(($route) => {
      this.testRoute = $route;
    });

    it('should map routes to controllers', () => {
      console.log('in the route test');

      expect(this.testRoute.routes['/'].controller).toBe('HomeController');
      expect(this.testRoute.routes['/'].templateUrl).toEqual('/app/views/home/home.html');
      expect(this.testRoute.routes[null].redirectTo).toEqual('/');
      // });
    });

  });
});

////// working test using gulp
//require('../app/js/client');
// const angular = require('angular');

// require('angular-mocks');
// require(__dirname + '/../app/js/client.js');

// describe('crud app tests', () => {
//   beforeEach(() => {
//     angular.mock.module('FirstApp');

//   });

//   it('should map routes to controllers', function() {
//     angular.module('FirstApp');

//     angular.mock.inject(function($route) {

//       expect($route.routes['/list'].controller).toBe('ListController');
//       expect($route.routes['/list'].templateUrl).
//       toEqual('/templates/partials/ListView.html');

//       expect($route.routes['/edit-customer/:customerID'].controller).toBe('EditController');
//       expect($route.routes['/edit-customer/:customerID'].templateUrl).
//       toEqual('/templates/partials/EditView.html');


//       // otherwise redirect to
//       expect($route.routes[null].redirectTo).toEqual('/');
//     });
//   });
// });
//////////