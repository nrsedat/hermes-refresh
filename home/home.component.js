'use strict';

angular.module('home', [
  'ngRoute'
]);
// Register `phoneList` component, along with its associated controller and template
angular.
  module('home').
  component('home', {
    templateUrl: 'home/home.html',
    controller: function(){
      //ticker();
      HT.ticker();
      //$(window).trigger('home.loaded');
    }}
  );
