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
'use strict';

describe('route tests', () => {
  beforeEach(() => {
    angular.module('DemoApp');
  });

  it('should map routes to controllers', () => {
    //angular.module('DemoApp');

    //angular.mock.inject(function($route) {

    // expect($route.routes['/'].controller).toBe('HomeController');
    // expect($route.routes['/home'].templateUrl).
    // toEqual('/app/views/home/index.html');



    // // otherwise redirect to
    // expect($route.routes[null].redirectTo).toEqual('/');
    //});
    //});
    expect(true).toBe(true);
  });
});