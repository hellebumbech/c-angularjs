(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective);

  /* DIRECTIVES */

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'found.html',
      restrict: 'E',
      scope: {
        foundItems: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'list',
      bindToController: true
    };
    return ddo;
  };

  /* CONTROLLERS */

  FoundItemsDirectiveController.$inject = ['MenuSearchService'];
  function FoundItemsDirectiveController() {
    var list = this;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;

    menu.findItems = function() {
      if(menu.searchTerm === undefined || menu.searchTerm == "") {
        MenuSearchService.clearItemList();
        menu.found = []
      }
      else {
        MenuSearchService.getMatchedMenuItems(menu.searchTerm).then(function(result) {
          menu.found = result;
        });
      }
    }

    menu.removeItem = function(index) {
        MenuSearchService.removeItem(index);
    }
  }

  /* SERVICES */

  MenuSearchService.$inject = ['$http']
  function MenuSearchService($http) {
    var service = this;

    var foundItems = []

    service.getMatchedMenuItems = function (searchTerm) {
      service.clearItemList();
      return $http({
          method: 'GET',
          url: "https://davids-restaurant.herokuapp.com/menu_items.json"
        }).then(function(result) {
            var items = result.data.menu_items;
            for(var item in items) {
              var description = items[item].description;
              if(description.indexOf(searchTerm) != -1) {
                foundItems.push(items[item]);
              }
            }
          return foundItems;
        })
    }

    service.removeItem = function(index) {
      foundItems.splice(index, 1);
    }

    service.clearItemList = function () {
      foundItems = [];
    }
  }

})();
