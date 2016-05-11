angular.module('gitApp.issues', [
        'gitApp.models.issues',
        'gitApp.issues.graphs'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('repos.detail.issues', {

                url: '/{repoFullName}',
                views: {
                    'q3@repos': {
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
                            }
                        ]
                    }
                }

            });
    }]);
