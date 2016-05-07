angular.module('gitApp.models.repos', [])
    .service('ReposModel', [function() {
        var model = this,
            repos = [
                { "id": 0, "name": "Repo 1" },
                { "id": 1, "name": "Repo 2" },
            ];

        model.getRepos = function() {
            return repos;
        }
    }]);
