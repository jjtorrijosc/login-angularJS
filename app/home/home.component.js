'use strict';

angular
  .module('home')
  .component('home', {
    templateUrl: 'home/home.component.html',
    controller: ['userService', function HomeCtrl(userService) {

      this.userSessions = undefined;

      this.$onInit = function() {
        this.userSessions = userService.userSessions();
      }
    }
    ]
  })
;