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
                                //get the grouped data for the issues using d3 nest
                                //and rollup. Moved off to d3 service to keep the
                                //controller skinny. This data will be sent through
                                //to the graph directive ready to be used without any
                                //additional manipulation so that the directive
                                //isn't limited to just this set of data. 
                                $scope.myDataGrouped = d3Utils.groupIssuesByUser($scope.issues);
                            }
                        ]
                    }
                }

            });
    }]);
