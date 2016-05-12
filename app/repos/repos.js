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
                                //default value for search while testing
                                $scope.reposSearch = 'octokit';
                                $scope.reposFilter = '';

                                $scope.searchRepos = function() {
                                    //set search error to nothing for each new search
                                    $scope.searchError = '';

                                    $scope.repos = {};

                                    //get repos via http using repos model
                                    //placed in myPromise object to get angular busy to work
                                    //check for 404 and display message if no repos found
                                    //with search criteria
                                    $scope.myPromise = ReposModel.getRepos($scope.reposSearch)
                                        .then(function(result) {
                                            $scope.repos = result;
                                        }, function(error) {
                                            if (error.status == 404) {
                                                $scope.searchError = 'No repos with that name.';
                                            }
                                        });
                                }

                                //get selected row to highlight row using ng-class
                                $scope.setClickedRow = function(index) {
                                    $scope.selectedRow = index;
                                }
                            }
                        ]
                    }
                },

            });
    }]);
