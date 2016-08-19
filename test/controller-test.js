'use strict';

describe('testing controllers used in routing', function() {
  let homeController, fullsizeController;
  beforeEach(() => {
    angular.mock.module('demoApp');
    angular.mock.inject(($controller, $rootScope) => {
      //this.scope = $rootScope.$new();
      homeController = new $controller('HomeController');
      fullsizeController = new $controller('FullsizeController');
    });
  });

  it('home controller should create a list of images', () => {
    console.log(homeController);
    expect(homeController.images.length > 0).toEqual(true);
  });
  it('fullsize controller should create a list of images', () => {
    console.log(fullsizeController);
    expect(fullsizeController.images.length > 0).toEqual(true);
  });
});




// describe('testing Controller: Home', function() {
//   let $controller;

//   beforeEach(angular.mock.module('demoApp'));

//   beforeEach(angular.mock.inject(function(_$controller_) {
//     $controller = _$controller_;
//   }));

//   it('name is initialized to World', function() {
//     let ctrl = $controller('HomeController');
//     expect(ctrl.name).toBe('World');
//   });
// });

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