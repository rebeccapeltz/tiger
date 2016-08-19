'use strict';
//const angular = require('angular');
describe('route tests', () => {
  //let testRoute;
  beforeEach(() => {
    angular.module('demoApp', ['ngRoute']);
  });

  // beforeEach(() => {
  //   angular.mock.inject(function($route) {
  //     testRoute = $route;
  //   });
  // });

  it('should map routes to controllers', () => {
    console.log('in the route test');
    // angular.mock.inject(function($route) {
    expect($route.routes['/'].controller).toBe('HomeController');
    expect($route.routes['/'].templateUrl).toEqual('/app/views/home/home.html');
    // otherwise redirect to
    expect($route.routes[null].redirectTo).toEqual('/');
    // });
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


// 'use strict';

// describe('testing routes', function () {
//   beforeEach(() => {
//     angular.mock.module('demoApp');
//     angular.mock.inject(($controller, $rootScope) => {
//       this.scope = $rootScope.$new();
//       new $controller('PlayerController', {$scope: this.scope});
//     });
//   });

//   it('should create a player', () => {
//     this.scope.playerCtrl.signUp({name: 'goo'})
//     expect(this.scope.playerCtrl.player.name).toBe('goo');
//   });
// });

// 'use strict';

// describe('testing player-controller', function () {
//   beforeEach(() => {
//     angular.mock.module('demoApp');
//     angular.mock.inject(($controller, $rootScope) => {
//       this.scope = $rootScope.$new();
//       new $controller('PlayerController', {$scope: this.scope});
//     });
//   });

//   it('should create a player', () => {
//     this.scope.playerCtrl.signUp({name: 'goo'})
//     expect(this.scope.playerCtrl.player.name).toBe('goo');
//   });
// });


//require('../app/js/client');
//const angular = require('angular');

//require('angular-mocks');
//require(__dirname + '/../app/js/entry.js');
////////////////////////////////////
// 'use strict';

// describe('testing player-controller', function() {
//   beforeEach(() => {
//     angular.mock.module('demoApp');
//     angular.mock.inject(($controller, $rootScope) => {
//       this.scope = $rootScope.$new();
//       new $controller('PlayerController', { $scope: this.scope });
//     });
//   });

//   it('should create a player', () => {
//     this.scope.playerCtrl.signUp({ name: 'goo' })
//     expect(this.scope.playerCtrl.player.name).toBe('goo');
//   });
// });

///////////////////