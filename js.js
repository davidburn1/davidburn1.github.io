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
        controller: 'papersController',
        onEnter: function($rootScope){
            $rootScope.pageTitle = "David Burn - Publications";
            $rootScope.selectedKey =  "";
            $("html,body").animate({ scrollTop: 0}, 10);
        },
    });

    $stateProvider.state("publications.key", {
        url: "/{key}",
        onEnter: function($rootScope, $stateParams, $timeout){
            $rootScope.pageTitle = "David Burn - Publications";
            $rootScope.selectedKey = $stateParams.key;


//            $timeout( function(){ // allow some time for previous abstract div to hide
//                $("html,body").animate({ scrollTop: $('#'+$stateParams.key).offset().top }, "slow");  
//            }, 500 );

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

app.controller('papersController', function($rootScope, $scope, $http) {

    $scope.$watch("selectedKey", function() {
        if ($rootScope.selectedKey == "") {return;}
        $http.get("abstracts/papers/"+$rootScope.selectedKey+".html")
        .then(function(response) {
            for (var i=0; i<$rootScope.papers.length; i++) {
                if ($rootScope.papers[i].key == $rootScope.selectedKey){
                    $rootScope.papers[i].abstract = response.data; 
                }
            }
        },
        function(data) {
        });
    });

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
        var out = authors.replace("D.M. Burn", "<b>D.M. Burn</b>");
        out = out.replace(/ /g, "&nbsp;"); //replace spaces with no-linebreak spaces
        out = out.replace(/,&nbsp;/g, ", "); // allow normal spaces after commas
        out = out.replace(/&nbsp;and&nbsp;/g, " and "); // allow normal spaces around 'and'
        return out;
    };
});


app.filter('formatLatex', function() {
    function replacer(match, text, offset, string) {
        text = text.replace(/_{(.*?)}/g, "<sub>$1</sub>"); // multi character subscript
        text = text.replace(/\^{(.*?)}/g, "<sup>$1</sup>"); // multi character superscript
        text = text.replace(/_(.)/g, "<sub>$1</sub>"); // single character subscript
        text = text.replace(/\^(.)/g, "<sup>$1</sup>"); // single character superscript
        return text;
    }

    return function(text) {
        if (text === undefined) return ""
        return text.replace(/\$(.*?)\$/g, replacer); // detects all math mode 
    };
});




//   app.directive("mathjaxBind", function() {
//     return {
//         restrict: "A",
//         controller: ["$scope", "$element", "$attrs",
//             function($scope, $element, $attrs) {
//                 $scope.$watch($attrs.mathjaxBind, function(texExpression) {
//                     $element.html(texExpression);
//                     MathJax.Hub.Queue(["Typeset", MathJax.Hub, $element[0]]);
//                 });
//             }]
//     };
// });

app.directive("scrollTo", function() {
    return {
        controller: ["$scope", "$element", "$attrs", "$timeout", "$rootScope", function($scope, $element, $attrs, $timeout, $rootScope) {
            $scope.$watch($attrs.scrollTo, function(value) {
                if (value) { 
                    console.log("directive watch"); 
                    $timeout( function(){ // allow some time for previous abstract div to hide
                        $("html,body").animate({ scrollTop: $('#'+$rootScope.selectedKey).offset().top }, "slow");
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


