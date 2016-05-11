angular.module('gitApp.issues', [
        'gitApp.models.issues',
        'gitApp.directives.barsChart'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('repos.detail.issues', {

                url: '/{repoFullName}',
                views: {
                    'q4@repos': {
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
                                $scope.myData = [{ "n": 10, "i": "joe" }, { "n": 20, "i": "pete" }, { "n": 100, "i": "joe" }];
                                $scope.myDataGrouped = d3.nest()
                                    .key(function(d) {
                                        return d.user.login;
                                    })
                                    // .rollup(function(d) {
                                    //     return d3.sum(d.length; })
                                    .rollup(function(v) { return v.length; })
                                    // .rollup(function(v) {
                                    //     return d3.length(v, function(d) {
                                    //         return d.title;
                                    //     });
                                    // })
                                    .entries($scope.issues);
                                console.log($scope.myDataGrouped);


                            }
                        ]
                    }
                }

            });
    }]);
