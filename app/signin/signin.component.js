'use strict';

angular
  .module('signin')
  .component('signin', {
    templateUrl: 'signin/signin.component.html',
    controller: ['$location','userService', function SigninController($location,userService) {
      
      this.userName = '';
      this.password = '';
      this.rePassword = '';
      
      this.errorPwdNoMatch = false;

      this.signin = function signin() {
        if (this.password == this.rePassword) {
          if (userService.signin(this.userName,this.password)) {
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