'use strict';

/**
 * @ngdoc function
 * @name sampleExampleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sampleExampleApp
 */
//angular.module('sampleExampleApp')
//  .controller('HomeCtrl', function () {
//    this.hmessage = "HOME PAGE"
//  });

angular.module('sampleExampleApp')
  .controller('HomeCtrl', function ($scope) {
    console.log("Entered i  page");
    $scope.hmessage = "HOME PAGE";
  });
