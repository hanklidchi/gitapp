angular.module('gitApp.directives.barsChart', [])
    .directive('barsChart', function($parse) {
        var directiveDefinitionObject = {
            restrict: 'E',

            replace: false,

            scope: { data: '=chartData' },
            link: function(scope, element, attrs) {

                var chart = d3.select(element[0]);

                //get largest value so that it can be used below to scale
                //width of the bars
                maxDataValue = d3.max(scope.data, function(d) {
                    return d.values;
                });

                chart.append("div").attr("class", "chart")
                    .selectAll('div')
                    .data(scope.data).enter().append("div")
                    .transition().ease("elastic")
                    .style("width", function(d) {
                        return ((d.values / maxDataValue) * 99) + "%";
                    })
                    .text(function(d) {
                        //insert the number of issues and the user name in parenthesis
                        return d.values + ' (' + d.key + ')';
                    });
            }
        };
        return directiveDefinitionObject;
    });
