(function() {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http']
  function MenuDataService($http, $stateParams) {
    var service = this;

    service.getAllCategories = function() {
      return $http({
          method: 'GET',
          url: "https://davids-restaurant.herokuapp.com/categories.json"
        }).then(function(result) {
          return angular.fromJson(result.data);
        })
    }

    service.getItemsForCategory = function(categoryShortName) {
      return $http({
          method: 'GET',
          params: {'category': categoryShortName},
          url: "https://davids-restaurant.herokuapp.com/menu_items.json"
        }).then(function(result) {
          return angular.fromJson(result.data);
        })
    }
  }
})();
