(function (){
'use strict';

angular.module('rental',['ngRoute','ui.bootstrap']);


/**
 * Configure the Routes
 */

angular.module('rental').config(['$routeProvider', function ($routeProvider) {
  var viewBase = 'resources/ui/content/';
  $routeProvider
    // Home
    .when("/", {
    	templateUrl: viewBase + "home.html",
    	controller: "TransactionController",
    	controllerAs:"vm"
    })
    .when("/reg", {
    	templateUrl: viewBase + "transaction.html",
    	controller: "TransactionController",
    	controllerAs: "vm"
    })
    // Pages
    .when("/collection", {templateUrl: viewBase + "collection.html",
        controller: "CollectionController",
        controllerAs: "vm"
     })
    //.when("#/faq", {templateUrl: "/faq", controller: "UserController"})
//    .when("/pricing", {templateUrl: "/pricing", controller: "PageCtrl"})
//    .when("/services", {templateUrl: "/services", controller: "PageCtrl"})
//    .when("/contact", {templateUrl: "/contact", controller: "PageCtrl"})
    // Blog
    //.when("/blog", {templateUrl: "/blog", controller: "BlogCtrl"})
//    .when("/blog/post", {templateUrl: "/content/blog_item", controller: "BlogCtrl"})
    // else 404
    .otherwise({ redirectTo: '/' });
}]);


angular.module('rental').run(['$rootScope', '$location',
    function ($rootScope, $location, authService) {

        //Client-side security. Server-side framework MUST add it's
        //own security as well since client-based security is easily hacked
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
//            if (next && next.$$route && next.$$route.secure) {
//                if (!authService.user.isAuthenticated) {
//                    $rootScope.$evalAsync(function () {
//                        authService.redirectToLogin();
//                    });
//                }
//            }
        });

}]);

})();

