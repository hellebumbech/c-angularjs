(function() {
  'use strict';

  angular.module('data')
  .component('menuItems', {
    templateUrl: 'src/templates/menuItemsList.template.html',
    bindings: {
      categoryName: '<',
      items: '<'
    }
  });

})();
