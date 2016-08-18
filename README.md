#401n1 Angular Template
# tiger

running web pack web server: ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot  
clone normalize and move sass under normalize

karma.conf.js


karma init:
testing framework: jasmin

use require.js
no

browser
chrome

location of source and test files:[]
app/entry.js 
test/*-test.js

exlude
empty string

karma watch
karma start 
yes  

Testing: 
Jasmin expect
Karma browser
webpack: webpackConfig ---------  cause it to use webpack

beforeEach(()=>{

  angular.mock.module('demoApp');
  angular.mock.module.inject(($controller, $rootscope) =>{
    this.scope = $rootScope.$new();
    new $controller('PlayerController', {$scope: this.scope})  //map of actual to mock
  })
})
use lexical scope
it ('should create a player', () =>{
  console.log('this.scope', this.scope);
  this.scope.signup({name:'goo'});
  expect(this.scope.playerCtrl).toBe('goo');
})

demoApp.controller('PlayerController', ['$scope', '$http', function($scope)])

day 3 - add auto prefixer to deal with different browsers 
const autoprefixer = require('autoprefixer');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractText = require('extract-text-webpack-plugin');


//routing npm i angular-route --save


