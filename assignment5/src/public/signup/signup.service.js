(function() {
"use strict";

angular.module('common')
.service('SignupService', SignupService);

SignupService.$inject = ['MenuService'];
function SignupService(MenuService) {
  var service = this;

  service.findCategory = function(user) {
    return MenuService.getMenuItems('').then(function(response) {
      var categoryExists = false;
      var i = 0;
      while(!categoryExists && i < response.menu_items.length) {
        if(response.menu_items[i].short_name == user.favorite) {
          categoryExists = true;
          service.user = user;
          service.user.favorite_menu_item = response.menu_items[i];
        }
        i++;
      }
      return categoryExists;
    });
  }

  service.getUser = function() {
    return service.user;
  }

}

})();
