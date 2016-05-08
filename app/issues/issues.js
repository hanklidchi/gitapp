angular.module('gitApp.issues', [
        'gitApp.models.issues'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('repos.detail.issues', {

                url: '/{repoFullName}',
                templateUrl: 'issues/issues-detail.tmpl.html',

                resolve: {
                    issues: ['IssuesModel', '$stateParams',
                        function(IssuesModel, $stateParams) {
                            console.log($stateParams.repoFullName);
                            return IssuesModel.getIssues($stateParams.repoFullName);
                        }
                    ]
                },

                controller: ['$scope', '$state', 'issues',
                    function($scope, $state, issues) {
                        console.log('rdi');
                        console.log(issues);
                        $scope.issues = issues;
                        // $scope.reposSearch = 'octokit';
                        // ReposModel.getRepos()
                        //     .then(function(result) {
                        //         $scope.repos = result;
                        //         console.log('result', result);
                        //     });

                        // $scope.searchRepos = function() {
                        //     ReposModel.getRepos($scope.reposSearch)
                        //         .then(function(result) {
                        //             $scope.repos = result;
                        //             console.log('result', result);
                        //         });
                        // }

                    }
                ]
            });
    }]);
