var app = angular.module('app', ['ui.router', 'ngSanitize']);

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state("/", {
        url: "/",
        templateUrl: "home.html",
        onEnter: function($rootScope){
            $rootScope.pageTitle = "David Burn - Magnetism";
        },
    });

    $stateProvider.state("/publications", {
        url: "/publications",
        templateUrl: "papers.html",
        onEnter: function($rootScope){
            $rootScope.pageTitle = "David Burn - Publications";
        },
    });

    $stateProvider.state("/presentations", {
        url: "/presentations",
        templateUrl: "presentations.html",
        onEnter: function($rootScope){
            $rootScope.pageTitle = "David Burn - Presentations";
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
 }]);



app.controller('papersController', function($scope, $http, $rootScope) {
    $scope.papers = [];

    $http.get("papers.json")
    .then(function(response) {
        $scope.papers = response.data;
    });
});

app.controller('presentationsController', function($scope, $http, $rootScope) {
    $scope.presentations = [];

    $http.get("presentations.json")
    .then(function(response) {
        $scope.presentations = response.data;               
    });

    $scope.selected = {};
    $scope.getAbstract = function(key){
        $scope.selected = {};
        for (var i=0; i<$scope.presentations.length; i++) {
            if ($scope.presentations[i].key == key){
                $scope.selected = $scope.presentations[i];
            }
        }
        $scope.selected.abstract = "";

        $http.get("abstracts/presentations/"+key+".html")
        .then(function(response) {
            $scope.selectedAbstract = response.data;             
        },
        function(data) {
            $scope.selectedAbstract = "no abstract";
        });
    }
});

app.filter('formatAuthors', function() {
    return function(authors) {
        if (authors === undefined) return ""
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




app.directive('flickitySlide', ['$injector', function($injector){
    return {
        restrict : 'E',
        template : '<div ng-transclude></div>',
        transclude : true,
        link: function($scope, $element, attributes){
        	var lastTypeof = typeof($scope.$last), reInit = function(){
            var holder = $element.parent()[0], flickity = Flickity.data(holder);
           	flickity && flickity.destroy();
           	new Flickity(holder, angular.fromJson(holder.getAttribute('options'))); //data-flickity="..." does not work for me
          };
        	if($scope.$last || (lastTypeof === 'undefined' && !$element[0].nextElementSibling) || (lastTypeof !== 'undefined' && Flickity.data($element.parent()[0]))){
          	reInit();
          }
        }
    };
}])







// $carousel.on('staticClick.flickity', function( event, pointer, cellElement, cellIndex ) {
//     if ( !cellElement ) { return; }   // dismiss if cell was not clicked
//     console.log( 'Flickity clicked at ' + cellIndex)
//     $carousel.flickity( 'selectCell', cellIndex );
//     ga('send','event','pres_slider','clicked','', cellElement)
// });

// $carousel.on('select.flickity', function() {
//     pres = presentations[flkty.selectedIndex]
//     $('#presTitle').html(pres.title)
//     $('#presConference').html(pres.conference + " - " + pres.date)
//     ga('send','event','pres_slider','selected',pres.key, pres.title)
// })

// $('#btn_view_pres').click(function() {
//     pres = presentations[flkty.selectedIndex]
//     document.location.href="/presentations#" + pres.key;
// });
