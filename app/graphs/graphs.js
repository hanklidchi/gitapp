angular.module('gitApp.issues.graphs', [
        'gitApp.directives.barsChart'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('repos.detail.issues.graphs', {

                url: '/graphs',
                views: {
                    'q4@repos.detail.issues': {
                        templateUrl: 'graphs/graphs.tmpl.html',

                        controller: ['$scope', '$state',
                            function($scope, $state) {
                                console.log('rdig');
                                console.log($scope.issues);
                                $scope.myDataGrouped = d3.nest()
                                    .key(function(d) {
                                        return d.user.login;
                                    })
                                    // .rollup(function(d) {
                                    //     return d3.sum(d.length; })
                                    .rollup(function(v) {
                                        return v.length; })
                                    // .rollup(function(v) {
                                    //     return d3.length(v, function(d) {
                                    //         return d.title;
                                    //     });
                                    // })
                                    .entries($scope.issues);

                            }
                        ]
                    }
                }

            });
    }]);
