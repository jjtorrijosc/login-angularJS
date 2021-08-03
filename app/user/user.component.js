'use strict';

angular.module('user')
.component('user', {
  templateUrl: 'user/user.component.html',
  controller: ['$location','userService', function UserCtrl($location, userService) {
      
      this.userService = userService;

      this.logout = function() {
        userService.logout();
        $location.path('/login');
      }
    }
  ]
});
