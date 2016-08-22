``` html

```

``` JavaScript

```

#### index.html  
``` html
<header>
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#/">Bunny Widget</a>
        </div>

        <ul class="nav navbar-nav navbar-right">
          <li><a href="#/"><i class="fa fa-home"></i> Home</a></li>
          <li><a href="#thumbnail"><i class="fa fa-picture-o"></i> Thumbnail</a></li>
          <!--<li><a href="#fullsize"><i class="fa fa-picture-o"></i> Fullsize</a></li>-->
        </ul>
      </div>
    </nav>
  </header>

  <main ng-view>
  </main>
```


#### data  images.js
``` JavaScript
'use strict';

module.exports = [{
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

```

####  entry.js 

``` JavaScript
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
  $rootScope.imageData = require('./data/images.js');
  $rootScope.errorMessage = 'You have reached this page trying to access unknown resource';
}]);

app.config(['$routeProvider', function($route) {
  $route
    .when('/', {
      templateUrl: '/app/view/home/home.html',
      controller: 'HomeController',
      controllerAs: 'hc'
    })
    .when('/#', {
      templateUrl: '/app/view/home/home.html',
      controller: 'HomeController',
      controllerAs: 'hc'
    })
    .when('/thumbnail', {
      templateUrl: '/app/view/thumbnail/thumbnail.html',
      controller: 'ThumbnailController',
      controllerAs: 'th'
    })
    .when('/fullsize', {
      templateUrl: '/app/view/fullsize/fullsize.html',
      controller: 'FullsizeController',
      controllerAs: 'fs'
    })
    .when('/fullsize/:id', {
      templateUrl: '/app/view/fullsize/fullsize.html',
      controller: 'FullsizeController',
      controllerAs: 'fs'
    })
    .when('/error', {
      templateUrl: '/app/view/error/error.html'
    })
    .otherwise({
      redirectTo: '/error'
    });
}]);

// angular components
require('./component/main');
require('./component/image_link');
require('./component/thumbnail');
require('./component/fullsize');
require('./view/home');
require('./view/fullsize');
require('./view/thumbnail');
require('./view/error');

```

#### home 
``` html
<div class="container">
  <div class="row">
    <!--bootstrap tip - to center set an offset equal to half of the remaining size of the row-->
    <div class="list-group col-md-6  col-md-offset-3">
      <a ng-repeat="img in hc.images" href="#/fullsize/{{img.id}}" class="list-group-item">{{img.description}}</a>
    </div>
  </div>
</div>

```
``` JavaScript
'use strict';

const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.controller('HomeController', ['$rootScope', function($rootScope) {
  this.images = $rootScope.imageData;
}]);
```

#### thumbnail
``` html
<div class="container">
  <div class="row">
    <div ng-repeat="img in th.images" class="col-xs-2 img-spacing">
      <a href="#/fullsize/{{img.id}}" class="thumbnail">
        <img ng-src="{{img.url}}" height="100" width="100" />
      </a>
    </div>
  </div>
</div>
```
``` JavaScript
'use strict';

const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.controller('ThumbnailController', ['$rootScope', function($rootScope) {
  this.images = $rootScope.imageData;
}]);
```
#### fullsize
``` html
<div class="container">
  <div class="row">
    <div class="list-group col-md-8  col-md-offset-4">
      <h1>{{fs.image.description}}</h1>
      <div>
        <img ng-src="{{fs.image.url}}" height="400" width="400" />
      </div>
    </div>
  </div>
</div>

```

``` JavaScript 
'use strict';

const angular = require('angular');

const demoApp = angular.module('demoApp');

demoApp.controller('FullsizeController', ['$routeParams', '$rootScope', '$location', function($routeParams, $rootScope, $location) {
  //let id = Number.parseInt($routeParams.id || 1);
  this.images = $rootScope.imageData;
  this.isValidId = function(id) {
    if (isNaN(id)) return false;
    if (!isFinite(id)) return false;
    if (id < 1) return false;
    if (typeof(this.images[id - 1]) === 'undefined') return false;
    return true;
  };
  let id = Number.parseInt($routeParams.id);
  if (!this.isValidId(id)) {
    $location.path('/error');
  }
  this.image = this.images[id - 1];
}]);
```

#### error
``` html
<div class="container">
  <div>
    <div>
      <i class="stop fa fa-hand-paper-o"></i> Error: {{errorMessage}}

    </div>
  </div>

  <div class="alert alert-danger">
    <strong>Warning!</strong> Indicates a warning that might need attention.
  </div>

```
``` JavaScript
'use strict';
require('./error.scss');

const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.controller('ErrorController', ['$rootScope', function($rootScope) {
  this.errorMessage = $rootScope.errorMessage;
}]);
```

``` css
@import "_theme";
.stop {
  color: $app-stop;
}
```

#### base.css
``` css
// vendor styles
@import "vendor/normalize/_normalize.scss";
@import "vendor/bootstrap/stylesheets/_bootstrap.scss";
@import "vendor/font-awesome/scss/font-awesome.scss";
@include normalize();
// app styles
@import "_theme";
html,
body {
  width: 100%;
  height: 100%;
}

body {
  background-color: $app-default;
}

.brand {
  font-size: 1em;
}
```




