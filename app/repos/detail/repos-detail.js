angular.module('gitApp.repos.detail', [])
    .config(
        ['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {
                $stateProvider

                    .state('repos.detail', {

                    url: '/{repoId:[0-9]{1,9}}',

                    views: {

                        '': {
                            templateUrl: 'repos/detail/repos-detail.tmpl.html',

                            controller: 'RepoDetailCtrl'

                        }
                    }
                });
            }
        ]
    )
    .controller('RepoDetailCtrl', ['$scope', '$q', '$stateParams', '$state', 'utils',
        function($scope, $q, $stateParams, $state, utils) {
            $scope.repo = utils.findById($scope.repos, $stateParams.repoId);
            // $stateParams.repo.full_name = $scope.repo.full_name;
            $stateParams.repoFullName = $scope.repo.full_name;
            $scope.showIssues = function() {
                console.log('si');
                $scope.myPromise = $q.when($state.go('.issues.graphs', $stateParams));
            };

        }
    ]);
