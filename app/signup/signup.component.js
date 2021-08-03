'use strict';

angular
  .module('signup')
  .component('signup', {
    templateUrl: 'signup/signup.component.html',
    controller: ['$location','userService', function signupController($location,userService) {
      
      this.userName = '';
      this.password = '';
      this.rePassword = '';
      
      this.errorPwdNoMatch = false;

      this.signup = function signup() {
        if (this.password == this.rePassword) {
          if (userService.signup(this.userName,this.password)) {
            $location.path('/home');
          }
        } else {
          this.errorPwdNoMatch = true;
        }
      }
    }
    ]
  })
;