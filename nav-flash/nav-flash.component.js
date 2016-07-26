'use strict';

angular.
  module('hermesApp').
  component('navFlash', {
    templateUrl: 'nav-flash/nav-flash.html',
    controller: function($location, $scope){
      var self = this;
      //self.imageVal = 'image/header.swf';
      self.url = $location.url().replace('/', '');
      $scope.$on('$routeChangeSuccess', function(){
        self.url = $location.url().replace('/', '');

      });

      // switch (self.url) {
      //   case 'whyus':
      //       self.imageVal='image/whyus.swf';
      //     break;
      //     case 'services':
      //         self.imageVal='services';
      //       break;
      //   default:
      //
      // }
    }}
  );
