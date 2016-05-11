angular.module('gitApp.utils.d3Service', [])
    .factory('d3Utils', function() {
        return {
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
