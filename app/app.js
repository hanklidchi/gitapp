'use strict';

angular.module('gitApp', [
    'ui.router',
    'gitApp.repos',
    'gitApp.issues',
    'gitApp.utils.service',
    'gitApp.utils.d3Service',
    'cgBusy',
    'ngAnimate'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
        .otherwise('/');
}]);
