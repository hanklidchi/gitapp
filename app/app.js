'use strict';

// Declare app level module which depends on views, and components
angular.module('gitApp', [
    'ui.router',
    'gitApp.repos'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
        .otherwise('/');
}]);
