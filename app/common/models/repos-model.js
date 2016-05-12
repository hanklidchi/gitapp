angular.module('gitApp.models.repos', [])
    .service('ReposModel', ['$http', function($http) {
        var model = this,
            URLS = {
                FETCH: 'https://api.github.com/orgs/'
            },
            repos;

        function extract(result) {
            return result.data;
        }

        function getRepos(result) {
            repos = extract(result);
            return repos;
        }

        model.getRepos = function(search) {
            return $http.get(URLS.FETCH + search + '/repos').then(getRepos);
        }
    }]);
