define('parparInit', [], function() {
  require('angular');
  require('angular-cookies');
  require('angular-resource');
  require('angular-sanitize');
  require('json3');
  require('lodash');
  require('angular-ui-router');
  require('angular-bootstrap');
  require('./components/auth/auth.service.js');

  angular.module('parparApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap'
    //'barcodeScanner'
  ]);
});
