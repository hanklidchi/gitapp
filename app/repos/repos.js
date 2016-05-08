/**
 * gitApp.repos Module
 *
 * Description
 */
angular.module('gitApp.repos', [
        'gitApp.models.repos'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('repos', {

                url: '/',
                templateUrl: 'repos/repos.tmpl.html',

                controller: ['$scope', '$state', 'ReposModel',
                    function($scope, $state, ReposModel) {
                        // ReposModel.getRepos()
                        //     .then(function(result) {
                        //         $scope.repos = result;
                        //         console.log('result', result);
                        //     });

                        $scope.searchRepos = function() {
                            ReposModel.getRepos($scope.reposSearch)
                                .then(function(result) {
                                    $scope.repos = result;
                                    console.log('result', result);
                                });
                        }

                    }
                ]
            });
    }]);
