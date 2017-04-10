'use strict';

/**
 * @ngdoc overview
 * @name sampleExampleApp
 * @description
 * # sampleExampleApp
 *
 * Main module of the application.
 */
var app = angular.module('sampleExampleApp', ['ngRoute']);

app.config(function ($routeProvider,$locationProvider) {
    $routeProvider
      .when('/dashboard', {
        templateUrl: 'dashboard.html',
        controller: 'DashCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/courses', {
        templateUrl: 'views/courses.html',
        controller: 'CoursesCtrl'
      })
      .when('/students', {
        templateUrl: 'views/students.html',
        controller: 'StudentsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("");
  });
app.controller('loginCtrl', function ($scope,$location) {
  $scope.submit = function(){
    console.log("in page");
    $location.path('/dashboard')
    //window.location = "dashboard.html";
  }
});
