/**
 * Created with JetBrains WebStorm.
 * User: jin
 * Date: 7/25/13
 * Time: 12:29 AM
 * To change this template use File | Settings | File Templates.
 */
'use strict';
var myTime = angular.module('meTime', [])
.config(function($routeProvider){
          $routeProvider
              .when('/home', {controller: 'CustomerController', templateUrl: 'partials/intro_customer.html'})
              .when('/about', {templateUrl:'partials/about.html'})
              .when('/contact', {templateUrl:'partials/contact.html'})
              .when('/suggestionlist' ,{templateUrl:'partials/suggestionlist.html'})
              .when('/shops' ,{templateUrl:'partials/shops.html'})
              .otherwise({redirectTo: '/home'});
});