app.controller('AlbumsCtrl', function ($scope, albums) {
	
  $scope.albums = albums;

}).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/','/albums');

    $stateProvider.state('albumList', {
        url: '/albums',
        templateUrl: '/views/albumlist.html',
        controller: 'AlbumsCtrl',
        resolve: {
          albums : function( AlbumFactory ) {
            return AlbumFactory.fetchAll();
          },
        }
    });
});


