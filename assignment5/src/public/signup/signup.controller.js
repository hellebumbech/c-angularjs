(function() {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService'];
function SignupController(SignupService) {
  var $ctrl = this;

  $ctrl.submit = function() {
    SignupService.findCategory($ctrl.user).then(function(response){
      $ctrl.categoryExists = response;
    })
  }

  $ctrl.getUser = function() {
    return SignupService.getUser();
  }
}

})();
