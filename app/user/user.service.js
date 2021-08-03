'use strict';

class userService {
  constructor($http) {

    this.userName = undefined;

    this.login = function (user, pass) {

      var loginOK = false;
      //TODO: backend
      loginOK = true;
      this.userName = user;
      return loginOK;
    };

    this.logout = function () {
      this.userName = undefined;
    };

    this.signup = function (user, pass) {
      var signinOK = false;
      //TODO: backend
      signinOK = true;
      this.userName = user;
      return signinOK;
    };

    this.userSessions = function () {
      var sessions = undefined;
      //TODO: backend
      return sessions;
    };

    return this;
  }
}    

angular.
  module('user').
  factory('userService', ['$http', userService]);