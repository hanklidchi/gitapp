angular.module('gitApp.utils.service', [])
    .factory('utils', function() {
        return {
            //method to find any object by its id which can be used
            //anywhere in the app so is extracted to its own utilities service
            findById: function findById(a, id) {
                for (var i = 0; i < a.length; i++) {
                    if (a[i].id == id) return a[i];
                }
                return null;
            },
        };
    });
