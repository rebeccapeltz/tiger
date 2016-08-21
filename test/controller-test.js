'use strict';
/*global angular angular:true*/
/*eslint no-undef: "error"*/

describe('testing controllers used in routing', function() {
  beforeEach(() => {
    angular.mock.module('demoApp');
    angular.mock.inject(($controller) => {
      this.homeController = new $controller('HomeController');
      this.fullsizeController = new $controller('FullsizeController');
    });
  });

  it('home controller should create a list of images', () => {
    expect(this.homeController.images.length > 0).toEqual(true);
    expect(this.homeController.images.length).toEqual(4);
  });
  it('fullsize controller should create a list of images', () => {
    expect(this.fullsizeController.images.length > 0).toEqual(true);
    expect(this.fullsizeController.images.length).toEqual(4);
  });
  it('fullsize controller should be able to test for valid id', () => {
    expect(this.fullsizeController.isValidId('x')).toEqual(false);
    expect(this.fullsizeController.isValid(1)).toEqual(true);
  });
});