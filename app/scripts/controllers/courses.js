'use strict';

/**
 * @ngdoc function
 * @name sampleExampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sampleExampleApp
 */
angular.module('sampleExampleApp')
  .controller('CoursesCtrl', function ($scope) {
    $scope.cmessage = "COURESES LISTS";
    $scope.courses = ["HTML5","CSS","Bootstrap","JavaScript","Jquery","AngulkarJs"];
  });
