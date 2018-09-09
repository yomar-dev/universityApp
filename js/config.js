app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html'
        })
        .when('/teachers', {
            templateUrl: 'partials/teachers.html'
        })
        .when('/students', {
            templateUrl: 'partials/students.html'
        })
        .otherwise({
            redirectTo: '/'
        });
})