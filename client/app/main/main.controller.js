'use strict';
const socket = require('../components/socket/socket.service.js');
const barcodeScanner = {};

module.exports = function ($scope, $http) {
  var vm = this;
  vm.handleScan = handleScan;
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      // socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      // socket.unsyncUpdates('thing');
    });

  function handleScan(a) {
    console.log('scanned: ' + a);
  }

  /*$scope.words = [];
  $scope.triggerChar = 9;
  $scope.separatorChar = 13;
  $scope.triggerCallback = function () {
    $scope.lastTrigger = 'Last trigger callback: ' + new Date().toISOString();
    $scope.$apply();
  };
  $scope.scanCallback = function (word) {
    $scope.words.push(word);
    $scope.$apply();
  };*/
	/*$scope.onSuccess = function(data) {
        console.log(data);
  };
  $scope.onError = function(error) {
      console.log(error);
  };
  $scope.onVideoError = function(error) {
      console.log(error);
  };
  */


}
