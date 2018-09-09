var app = angular.module('universityApp',['ngRoute']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
    $scope.navbar = 'partials/nav.html';

    $scope.setActive = function(option){
        $scope.navHome = '';
        $scope.navTeachers = '';
        $scope.navStudents = '';

        $scope[option] = 'active';
    }
}]);