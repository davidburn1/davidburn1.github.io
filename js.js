var app = angular.module('app', ['ui.router', 'ngSanitize']);

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state("/", {
        url: "/",
        templateUrl: "home.html",
        onEnter: function($rootScope){
            $rootScope.pageTitle = "David Burn - Magnetism";
            $rootScope.selectedKey =  "";
        },
    });

    $stateProvider.state("publications", {
        url: "/publications",
        templateUrl: "papers.html",
        onEnter: function($rootScope){
            $rootScope.pageTitle = "David Burn - Publications";
            $rootScope.selectedKey =  "";
            $("html,body").animate({ scrollTop: 0}, 10);
            //$("body").scrollTop = 0;
        },
    });

    $stateProvider.state("publications/{key}", {
        url: "/publications/{key}",
        templateUrl: "papers.html",
        onEnter: function($rootScope){
            $rootScope.pageTitle = "David Burn - Publications";
        },
    });

    $stateProvider.state("presentations", {
        url: "/presentations",
        templateUrl: "presentations.html",
        controller: 'presentationsController',
        onEnter: function($rootScope){
            $rootScope.pageTitle = "David Burn - Presentations";
            $rootScope.selectedKey =  "";
            $("html,body").animate({ scrollTop: 0}, 10);
            //$("body").scrollTop = 0;
        },
    });

    $stateProvider.state("presentations.key", {
        url: "/{key}",
        onEnter: function ($rootScope, $stateParams) {
            $rootScope.pageTitle = "David Burn - Presentations - " + $stateParams.key;
            $rootScope.selectedKey = $stateParams.key;
        },
    });

    $urlRouterProvider.otherwise('/');
});



app.run(['$rootScope', '$transitions', '$location', '$window', '$http', function ($rootScope, $transitions, $location, $window, $http) {
    $rootScope.pageTitle = "David Burn - Magnetism";

    $transitions.onSuccess({}, function(){
        $window.gtag('config', 'UA-163960416-1', {'page_path': $location.path()});
    });

    $rootScope.selectedKey = "";

    $http.get("papers.json")
    .then(function(response) {
        $rootScope.papers= response.data;
    });

    $http.get("presentations.json")
    .then(function(response) {
        $rootScope.presentations= response.data;
    });

 }]);


// app.service('papers', function($rootScope, $http){
//     var papers = {};
//     papers.data = [];

//     $http.get("papers.json")
//     .then(function(response) {
//         papers.data = response.data;
//     });
  
//     return papers;
// });

app.controller('papersController', function($scope, $http) {

});

app.controller('presentationsController', function($rootScope, $scope, $http) {

    $scope.$watch("selectedKey", function() {
        if ($rootScope.selectedKey == "") {return;}
        $http.get("abstracts/presentations/"+$rootScope.selectedKey+".html")
        .then(function(response) {
            for (var i=0; i<$rootScope.presentations.length; i++) {
                if ($rootScope.presentations[i].key == $rootScope.selectedKey){
                    $rootScope.presentations[i].abstract = response.data; 
                }
            }
        },
        function(data) {
        });
    });

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

app.directive("scrollTo", function() {
    return {
        controller: ["$scope", "$element", "$attrs", "$timeout", function($scope, $element, $attrs, $timeout) {
            $scope.$watch($attrs.scrollTo, function(value) {
                if (value) { 
                    console.log("directive watch"); 
                    $timeout( function(){ // allow some time for previous abstract div to hide
                        $("html,body").animate({ scrollTop: $('#'+$scope.selectedKey).offset().top }, "slow");
                    }, 50 );
                }
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






//$('.presLink').click(function(e) {
    //ga('send','event','pres_page','clicked', li.id, 0)
//});



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
