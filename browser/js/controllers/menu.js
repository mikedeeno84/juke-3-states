app.controller('MenuCtrl', function ($rootScope, $scope, $location) {
	// $rootScope.$on('$locationChangeSuccess', function(){
	// 	$scope.$digest();
	// })
	$scope.isActive=function(route){
		return $location.path().split('/')[1] === route;
	}
});