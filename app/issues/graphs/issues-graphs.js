angular.module('gitApp.issues.graphs', [
        'gitApp.directives.barsChart'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('repos.detail.issues.graphs', {

                url: '/graphs',
                views: {
                    'q4@repos.detail.issues': {
                        templateUrl: 'issues/graphs/issues-graphs.tmpl.html',

                        controller: ['$scope', '$state', 'd3Utils',
                            function($scope, $state, d3Utils) {
                                $scope.myDataGrouped = d3Utils.groupIssuesByUser($scope.issues);
                                // $scope.myDataGrouped = d3.nest()
                                //     .key(function(d) {
                                //         return d.user.login;
                                //     })
                                //     .rollup(function(v) {
                                //         return v.length; })
                                //     .entries($scope.issues);

                            }
                        ]
                    }
                }

            });
    }]);
