/**
 * gitApp.repos Module
 *
 * Description
 */
angular.module('gitApp.repos', [
        'gitApp.models.repos',
        'gitApp.repos.detail'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('repos', {
                url: '/',
                views: {
                    '': {
                        templateUrl: 'repos/repos.tmpl.html',
                        controller: ['$scope', '$state', 'ReposModel',
                            function($scope, $state, ReposModel) {
                                $scope.reposSearch = 'octokit';

                                $scope.searchRepos = function() {
                                    ReposModel.getRepos($scope.reposSearch)
                                        .then(function(result) {
                                            $scope.repos = result;
                                            console.log('result', result);
                                        });
                                }
                            }
                        ]
                    }
                },

            });
    }]);
