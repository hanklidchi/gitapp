angular.module('gitApp.repos.detail', [])
    .config(
        ['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {
                $stateProvider

                    .state('repos.detail', {

                    //regex to limit values of repoId
                    url: '/{repoId:[0-9]{1,9}}',

                    views: {
                        //goes to unnamed ui-router view in parent
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
            //find the specific repo that has been selected. It already is in parent scope
            //so no need to new http get.
            //findById method used to find it in utils service.
            $scope.repo = utils.findById($scope.repos, $stateParams.repoId);

            $stateParams.repoFullName = $scope.repo.full_name;

            //createed showIssues method so that when issues count is clicked
            //it can wrap state.go in promise so that angular busy can display
            //as it needs to be wrapped in promise
            //could have just used ui-sref if I didn't need the promise
            //passed in $q to create the promise
            //used shorthand .when instead of defer, resolve, etc as it was just
            //a simple value promise
            $scope.showIssues = function() {
                $scope.myPromise = $q.when($state.go('.issues.graphs', $stateParams));
            };

        }
    ]);
