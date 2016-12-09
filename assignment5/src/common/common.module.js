(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://secure-earth-32714.herokuapp.com/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
