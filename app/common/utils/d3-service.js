angular.module('gitApp.utils.d3Service', [])
    .factory('d3Utils', function() {
        return {
            //function for grouping the json data first by user
            //and then by count of issues per user done very
            //succinctly by d3 nest and rollup methods
            groupIssuesByUser: function groupIssuesByUser(issues) {
                return d3.nest()
                    .key(function(d) {
                        return d.user.login;
                    })
                    .rollup(function(v) {
                        return v.length;
                    })
                    .entries(issues);
            },
        };
    });
