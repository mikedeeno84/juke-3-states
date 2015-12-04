var app = angular.module('juke', ["ui.router"]).config([
  '$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode( true );
  }
]);