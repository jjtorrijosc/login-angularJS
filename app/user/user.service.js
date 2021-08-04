'use strict';

class userService {
  constructor() {

    this.userName = undefined;

    this.login = function (user) {
      this.userName = user;
    };

    this.logout = function () {
      this.userName = undefined;
    };
    return this;
  }
}    

angular.
  module('user').
  factory('userService', ['$http', userService]);