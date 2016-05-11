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
                                    $scope.searchError = '';
                                    $scope.repos = {};
                                    $scope.myPromise = ReposModel.getRepos($scope.reposSearch)
                                        .then(function(result) {
                                            $scope.repos = result;
                                            console.log('result', result);
                                        }, function(error) {
                                            if (error.status == 404) {
                                                $scope.searchError = 'No repos with that name.';
                                                console.log('error', error);
                                            }
                                            console.log('error', error);
                                        });
                                }

                                $scope.setClickedRow = function(index) {
                                    $scope.selectedRow = index;
                                }
                            }
                        ]
                    }
                },

            });
    }]);
