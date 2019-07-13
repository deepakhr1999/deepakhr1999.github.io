/*Animation on scroll*/
AOS.init();



// const resume_link = "insert google drive link here"
// document.getElementById("resume").setAttribute("href", resume_link)


var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($locationProvider) {
    // use the HTML5 History API
    $locationProvider.html5Mode({
        enabled: false,
        requireBase: false,
        rewriteLinks: true
    }).hashPrefix('');
});

// routing
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html"
    })
    .when("/interests", {
        templateUrl : "interests.html"
    })
    .when("/contact",{
        templateUrl: "contact.html"
    })
    .when("/project", {
        templateUrl : "projects.html"
    });
});
 
//On routing we like to perform some commands
app.controller('HomeController', ['$scope', function($scope) {
    /*ParticlesJS configuration*/
    particlesJS.load('particles', 'js/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
}]);