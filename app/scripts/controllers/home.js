'use strict';

/**
 * @ngdoc function
 * @name boilerplateApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the boilerplateApp
 */
angular.module('boilerplateApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.message = 'hello !';
  });
