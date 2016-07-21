'use strict';

angular.module('parparApp')
  .controller('MainCtrl', function ($scope, $http, socket, barcodeScanner) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
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
      socket.unsyncUpdates('thing');
    });

	$scope.onSuccess = function(data) {
        console.log(data);
  };
  $scope.onError = function(error) {
      console.log(error);
  };
  $scope.onVideoError = function(error) {
      console.log(error);
  };

  $scope.scan = function () {
    barcodeScanner.scan().then( function (result) {
      if (result.canceled) {
        return;
      }
      // text from qr code or barcode is contained in result.text
    }, function (err) {
      alert(err);
    });
  };
  });
