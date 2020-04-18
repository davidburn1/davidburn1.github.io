var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state("/publications", {
        url: "/publications",
        name: "publications",
        templateUrl: "papers.html",
    });

    $stateProvider.state("/", {
        url: "/",
        templateUrl: "home.html",
    });

    $urlRouterProvider.otherwise('/');
});





app.controller('papersController', function($scope, $http) {
    $scope.papers = [];

    $http.get("papers.json")
    .then(function(response) {
        $scope.papers = response.data;
    });


});



app.directive("mathjaxBind", function() {
    return {
        restrict: "A",
        controller: ["$scope", "$element", "$attrs",
            function($scope, $element, $attrs) {
                $scope.$watch($attrs.mathjaxBind, function(texExpression) {
                    $element.html(texExpression);
                    MathJax.Hub.Queue(["Typeset", MathJax.Hub, $element[0]]);
                });
            }]
    };
});