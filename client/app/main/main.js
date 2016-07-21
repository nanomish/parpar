'use strict';

module.exports = exports = function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: require('./main.controller.js')
      });
  }
