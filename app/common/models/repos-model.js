angular.module('gitApp.models.repos', [])
    .service('ReposModel', ['$http',function($http) {
        var model = this,
        	URLS = {
        		FETCH: 'https://api.github.com/orgs/'
        	},
            repos;
            function extract(result) {
            	return result.data;
            }
            function cacheCategories(result) {
            	categories = extract(result);
            	return categories;
            }

        model.getRepos = function(search) {
            return $http.get(URLS.FETCH+search+'/repos').then(cacheCategories);
        }
    }]);
