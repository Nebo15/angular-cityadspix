# angular-cityadspix

[![Greenkeeper badge](https://badges.greenkeeper.io/Nebo15/angular-cityadspix.svg)](https://greenkeeper.io/)

Angular JS module for CityAds Pix service

## Install

```
bower install angular-cityadspix --save
```

## Usage

```js

// add dependency
angular.module('app', [
  'cityadspix'
]);


// configure module in config 
angular.module('app').config(function ($cityadspixProvider) {
  
  $cityadspixProvider.init('ACCOUNT_ID');
  
});


// track events inside controllers
angular.module('app').controller('AppController', function ($scope, $cityadspix) {

  $cityadspix.track('some data');
  
});

```
