'use strict';

angular.
  module('hermesApp').
  config(['$routeProvider',
    function config($routeProvider){
      $routeProvider.
        when('/', {
          template: '<home></home>'
        }).
        when('/whyus', {
          template: '<whyus></whyus>'
        }).
        when('/services', {
          template: '<services></services>'
        }).
        when('/clients', {
          template: '<clients></clients>'
        }).
        when('/opportunities', {
          template: '<opportunities></opportunities>'
        }).
        when('/approach', {
          template: '<approach></approach>'
        }).
        when('/aboutus', {
          template: '<aboutus></aboutus>'
        }).
        when('/legal', {
          template: '<legal></legal>'
        }).
        otherwise('/');
    }
  ]);
