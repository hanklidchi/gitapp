angular.module('gitApp.repos.detail', [
])
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
    .controller('RepoDetailCtrl', ['$scope', '$stateParams', 'utils', 
        function($scope, $stateParams, utils) {
            // console.log('hello');
            // console.log($stateParams.repoId);
            // console.log($scope.repos);
            $scope.repo = utils.findById($scope.repos, $stateParams.repoId);
            // console.log($scope.repo);
            
        }
    ]);
