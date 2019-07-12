const resume_link = "insert google drive link here"



// document.getElementById("resume").setAttribute("href", resume_link)



// routing
var app = angular.module("myApp", ["ngRoute"]);
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
