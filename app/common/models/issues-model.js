angular.module('gitApp.models.issues', [])
    .service('IssuesModel', ['$http',function($http) {
        var model = this,
        	URLS = {
        		FETCH: 'https://api.github.com/repos/'
        	},
            issues;
            function extract(result) {
            	return result.data;
            }
            function cacheIssues(result) {
            	issues = extract(result);
            	return issues;
            }

        model.getIssues = function(search) {
            return $http.get(URLS.FETCH+search+'/issues').then(cacheIssues);
        }
    }]);
