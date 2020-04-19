var app = angular.module('app', ['ui.router', 'ngSanitize']);

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state("/", {
        url: "/",
        templateUrl: "home.html",
        onEnter: function($rootScope){
            $rootScope.pageTitle = "David Burn - Magnetism";
            $rootScope.og.title = "David Burn - Magnetism";
            $rootScope.og.image = "";
            $rootScope.og.description = "";
            $rootScope.og.url = "https://davidburn1.github.io";
        },
    });

    $stateProvider.state("/publications", {
        url: "/publications",
        templateUrl: "papers.html",
        onEnter: function($rootScope){
            $rootScope.pageTitle = "David Burn - Publications";
            $rootScope.og.title = "David Burn - Publications";
            $rootScope.og.image = "https://davidburn1.github.io/images/li_publications.jpg";
            $rootScope.og.description = "Publications in peer-reviewed international journals";
            $rootScope.og.url = "https://davidburn1.github.io/#!/publications";
        },
    });


    $stateProvider.state("/publications/{key}", {
        url: "/publications/{key}",
        templateUrl: "papers.html",
    });



    $urlRouterProvider.otherwise('/');
});



app.run(['$rootScope', function ($rootScope) {
    $rootScope.pageTitle = "David Burn - magnetism";

    $rootScope.og = {};
    $rootScope.og.title = "David Burn - Magnetism";
    $rootScope.og.image = "";
    $rootScope.og.description = "";
    $rootScope.og.url = "https://davidburn1.github.io";
 }]);



app.controller('papersController', function($scope, $http, $rootScope) {
    $scope.papers = [];

    $http.get("papers.json")
    .then(function(response) {
        $scope.papers = response.data;
    });

    $scope.formatAuthors = function(authors){
        console.log("fa");
        console.log(authors);
        
    }
});



app.filter('formatAuthors', function() {
    return function(authors) {
        return authors.replace("D.M. Burn", "<b>D.M. Burn</b>");
    };
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