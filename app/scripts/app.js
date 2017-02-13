(function () {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true, 
                requireBase: false
        });
        $stateProvider
            /*.state('landing', {
                url: '/',
                controller: 'LandingCtrl as landing', 
                templateUrl: '/pages/index.html'
            })*/
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home', 
                templateUrl: '/templates/home.html'
            });
        }
    
    angular 
        .module('blocChat', ['ui.router', 'firebase'])
        .config(config);
})();



