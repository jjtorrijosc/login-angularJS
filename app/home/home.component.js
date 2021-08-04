'use strict';

angular
  .module('home')
  .component('home', {
    templateUrl: 'home/home.component.html',
    controller: ['$http','userService', function HomeCtrl($http,userService) {

      this.userSessions = undefined;
      this.userSessionsError = false;

      this.$onInit = function() {
        var self = this;
        $http.get(
          'http://localhost:8080/user-sessions?username='+userService.userName,
           {} //empty config
           ).then(function (response){
              self.userSessionsError = false;
              self.userSessions = response.data;
           }, function(response){
              self.userSessionsError = true;
           });
      }
    }
    ]
  })
;