var app = angular.module('universityApp',[ ]);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
    $scope.navbar = 'partials/nav.html';
}]);