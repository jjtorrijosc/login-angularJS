'use strict';

// Declare app level module which depends on views, and core components
angular.module('loginApp', [
  'ngRoute',
  'login',
  'signup',
  'home',
  'user'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.when('/login',{template: '<login></login>'});
  $routeProvider.when('/signup',{template: '<signup></signup>'});
  $routeProvider.when('/home',{template: '<home></home>'});
  $routeProvider.otherwise('/login');
}])
;
