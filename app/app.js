'use strict';

// Declare app level module which depends on views, and components
angular.module('gitApp', [
    'ui.router',
    'gitApp.repos',
    'gitApp.issues',
    'gitApp.issues.graphs',
    'gitApp.utils.service'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
        .otherwise('/');
}]);
