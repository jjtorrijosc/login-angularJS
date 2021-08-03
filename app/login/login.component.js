'use strict';

angular.
  module('login').
  component('login', {
    templateUrl: 'login/login.component.html',
    controller: ['$location','userService', function LoginCtrl($location,userService) {
      this.userName = '';
      this.password = '';
  
      this.login = function login() {
        if (userService.login(this.userName,this.password)) {
          $location.path('/home');
        }
      }
    }
    ]
  })
;



/*
angular.module('login', ['ngRoute'])
.component('login', {})
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.component.html'
  });
}])
.controller('LoginCtrl', ['userService', function LoginCtrl(userService) {
    this.userName = 'a';
    this.password = '';

    function login() {
      alert('antes');
      if (userService.login(this.userName,this.password)) {
        alert("TODO: redireccionar");
      }
    }
}]);*/