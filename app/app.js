'use strict';

// Declare app level module which depends on views, and core components
angular.module('loginApp', [
  'ngRoute',
  'login',
  'signin',
  'home',
  'user'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  //$locationProvider.hashPrefix('/signin');
  $routeProvider.when('/login',{template: '<login></login>'});
  $routeProvider.when('/signin',{template: '<signin></signin>'});
  $routeProvider.when('/home',{template: '<home></home>'});
  $routeProvider.otherwise('/login');
}])
;
