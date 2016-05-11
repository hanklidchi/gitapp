angular.module('gitApp.directives.barsChart', [])
    .directive('barsChart', function($parse) {
        //explicitly creating a directive definition variable
        //this may look verbose but is good for clarification purposes
        //in real life you'd want to simply return the object {...}
        var directiveDefinitionObject = {
            //We restrict its use to an element
            //as usually  <bars-chart> is semantically
            //more understandable
            restrict: 'E',
            //this is important,
            //we don't want to overwrite our directive declaration
            //in the HTML mark-up
            replace: false,
            //our data source would be an array
            //passed thru chart-data attribute
            scope: { data: '=chartData' },
            link: function(scope, element, attrs) {
                //in D3, any selection[0] contains the group
                //selection[0][0] is the DOM node
                //but we won't need that this time
                var chart = d3.select(element[0]);

                maxDataValue = d3.max(scope.data, function(d) {
                    return d.values;
                });

                chart.append("div").attr("class", "chart")
                    .selectAll('div')
                    .data(scope.data).enter().append("div")
                    .transition().ease("elastic")
                    .style("width", function(d) {
                        return ((d.values/maxDataValue)*99) + "%";
                    })
                    .text(function(d) {
                        return d.key;
                    });
                //a little of magic: setting it's width based
                //on the data value (d) 
                //and text all with a smooth transition
            }
        };
        return directiveDefinitionObject;
    });
