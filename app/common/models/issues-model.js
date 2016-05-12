angular.module('gitApp.models.issues', [])
    .service('IssuesModel', ['$http', function($http) {
        var model = this,
            //simple object to store the http urls
            URLS = {
                FETCH: 'https://api.github.com/repos/'
            },
            issues;

        //convenience method to return the data property from results
        function extract(result) {
            return result.data;
        }

        function getIssues(result) {
            issues = extract(result);
            return issues;
        }

        model.getIssues = function(search) {
            return $http.get(URLS.FETCH + search + '/issues').then(getIssues);
        }
    }]);
