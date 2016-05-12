angular.module('gitApp.issues', [
        'gitApp.models.issues',
        'gitApp.issues.graphs'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('repos.detail.issues', {

                url: '/{repoFullName}',
                views: {
                    //view will be sent to q3 named ui-router view (q3 stands for
                    //quadrant 3 as I have broken up screen into 4 quadrants)
                    //which is in the repos state hence q3@repos
                    'q3@repos': {
                        templateUrl: 'issues/issues-detail.tmpl.html',

                        //using resolve to make sure controller isn't loaded
                        //until data has been received from api.
                        //data comes back as issues object which is passed into controller
                        resolve: {
                            issues: ['IssuesModel', '$stateParams',
                                function(IssuesModel, $stateParams) {
                                    return IssuesModel.getIssues($stateParams.repoFullName);
                                }
                            ]
                        },

                        controller: ['$scope', '$state', 'issues',
                            function($scope, $state, issues) {
                                //issues assigned to scope so that it can
                                //be used in ng-repeat with html page
                                $scope.issues = issues;
                            }
                        ]
                    }
                }

            });
    }]);
