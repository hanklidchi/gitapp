'use strict';

// Declare app level module which depends on views, and components
angular.module('gitApp', [
    'ui.router',
    'gitApp.repos',
    'gitApp.issues',
    'gitApp.utils.service',
    'gitApp.utils.d3Service',
    'cgBusy'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
        .otherwise('/');
}]);
