(function() {
  'use strict';

  angular.module('data')
  .controller('MenuItemsController', MenuItemsController);

  MenuItemsController.$inject = ['MenuDataService', '$stateParams', 'jsonItems'];
  function MenuItemsController(MenuDataService, $stateParams, jsonItems) {
    var menuItems = this;
    menuItems.categoryName = jsonItems.category.name;
    menuItems.items = jsonItems.menu_items;
  }
})();
