'use strict';

angular
  .module('signup')
  .component('signup', {
    templateUrl: 'signup/signup.component.html',
    controller: ['$location','$http','userService', function signupController($location,$http,userService) {
      
      this.userName = '';
      this.password = '';
      this.rePassword = '';
      
      this.errorPwdNoMatch = false;
      this.signupError = '';

      this.signup = function signup() {
        if (this.password == this.rePassword) {
          var self = this;
          $http({
            method: 'POST',
            url: 'http://localhost:8080/usuario/sign-up',
            data: '{"username" : "'+this.userName+'", "password" : "'+this.password+'"}',
            transformResponse: [function(data){ return data;}]
          }).then(function signUpSucess(response) {
              if (response.data) {
                self.signupError = false;
                userService.login(self.userName);
                $location.path('/home');
              }
          }, function signUpError(response) {
              self.signupError = response.data;
          })
        } else {
          this.errorPwdNoMatch = true;
        }
      }
    }
    ]
  })
;