app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'homeCtrl'
        })
        .when('/teachers', {
            templateUrl: 'partials/teachers.html',
            controller: 'teachersCtrl'
        })
        .when('/students', {
            templateUrl: 'partials/students.html',
            controller: 'studentsCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
})