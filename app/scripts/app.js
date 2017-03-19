'use strict';

/**
 * @ngdoc overview
 * @name marvelApp
 * @description
 * # marvelApp
 *
 * Main module of the application.
 */
angular
  .module('marvelApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.materialize'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl:  'views/home.html',
      controller: 'HomeCtrl'
    });
  })
  .run(function ($rootScope, $location) {
    $rootScope.url = $location.protocol() + '://' + $location.host();
    $rootScope.api = $rootScope.url + ':8080';
  });
