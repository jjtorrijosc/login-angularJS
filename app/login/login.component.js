'use strict';

angular.
  module('login').
  component('login', {
    templateUrl: 'login/login.component.html',
    controller: ['$location','userService','$http', function LoginCtrl($location, userService, $http) {
      this.userName = '';
      this.password = '';
      this.loginError = false;
  
      this.login = function login() {
        
        var self = this;
        $http({
          method: 'POST',
          url: 'http://localhost:8080/login?username='+this.userName+'&password='+this.password
        }).then(function loginSuccess(response) {
            if (response.data) {
              self.loginError = false;
              userService.login(self.userName);
              $location.path('/home');
            } else {
              self.loginError = true;
            }
        }, function loginError(response) {
            self.loginError = true;
        });
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