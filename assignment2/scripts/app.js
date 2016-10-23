(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this;
    toBuyList.items = ShoppingListCheckOffService.getItemsToBuy();
    toBuyList.buyItem = function(itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    this.items = ShoppingListCheckOffService.getItemsBought();
  }

  function Item(itemName, quantity) {
    this.itemName = itemName;
    this.quantity = quantity;
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var itemsBought = [];
    var itemsToBuy = [new Item('Cookies', '10'),
                      new Item('Sodas', '20'),
                      new Item('Milk', '3'),
                      new Item('Bread', '16'),
                      new Item('Oranges', '2'),
                      new Item('Bananas', '4'),
                      new Item('Carrot', '1')];

    service.buyItem = function(index) {
      var item = itemsToBuy.splice(index, 1);
      itemsBought.push(item[0]);
    }

    service.getItemsToBuy = function () {
      return itemsToBuy;
    };

    service.getItemsBought = function () {
      return itemsBought;
    };
  }

})();
