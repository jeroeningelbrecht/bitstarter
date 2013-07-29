/**
 * Created with JetBrains WebStorm.
 * User: jin
 * Date: 7/25/13
 * Time: 12:29 AM
 * To change this template use File | Settings | File Templates.
 */
'use strict';
var meTime = angular.module('meTime', [])
    .config(function($routeProvider){
          $routeProvider
              .when('/home', {controller: 'CustomerController', templateUrl: 'partials/intro_customer.html'})
              .when('/about', {templateUrl:'partials/about.html'})
              .when('/help', {controller: 'HelpController', templateUrl: 'partials/help.html'})
              .when('/suggestionlist' ,{templateUrl:'partials/suggestionlist.html'})
              .when('/shops' ,{templateUrl:'partials/shops.html'})
              .when('/contact', {templateUrl:'partials/contact.html'})
              .otherwise({redirectTo: '/home'});
    })
    ;

meTime.directive('socialButtons', function($location){
    return {
        restrict: 'A',
        scope: false,
        templateUrl: 'partials/socialButtons.html',
        link: function (scope, elem, attrs) {
            scope.absUrl = $location.absUrl();
            scope.encodedAbsUrl = encodeURIComponent($location.absUrl());
        }
    };
});