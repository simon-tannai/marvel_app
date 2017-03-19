'use strict';

/**
 * @ngdoc function
 * @name marvelApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the marvelApp
 */
angular.module('marvelApp')
  .controller('HomeCtrl', function ($scope, $rootScope, $http) {
    /**
     * Marvel characters
     * @type {Array}
     */
    $scope.characters = [];

    /**
     * Character details
     * @type {Object}
     */
    $scope.characterDetails = {
      'name': '',
      'desc': '',
      'img': '',
      'nbComics': 0,
      'treeFirstComics': []
    };

    /**
     * Set character details
     * @param {Number} indexOfList Index of characters list
     */
    $scope.setCharacterDetails = function (indexOfList) {
      $scope.characterDetails.name = $scope.characters[indexOfList].name;

      if ($scope.characters[indexOfList].description.length > 0) {
        $scope.characterDetails.description = $scope.characters[indexOfList].description;
      } else {
        $scope.characterDetails.description = 'No description :(';
      }

      $scope.characterDetails.nbComics = $scope.characters[indexOfList].comics.available;
      $scope.characterDetails.threeFirstComics = $scope.characters[indexOfList].comics.items.slice(0, 3);

      $scope.characterDetails.img = $scope.characters[indexOfList].thumbnail.path + '.' + $scope.characters[indexOfList].thumbnail.extension;
    };

    // Get characters from API
    $http.get($rootScope.api + '/marvel/characters/100/20')
    .then(
      function (success) {
        $scope.characters = success.data;
      },
      function (error) {
        Materialize.toast(error.message, 4000);
      }
    );
  });
