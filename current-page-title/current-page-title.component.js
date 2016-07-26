'use strict';

angular.
  module('hermesApp').
  component('currentPageTitle', {
    template: '<span class="current-page-title">{{$ctrl.pageTitle}}</sapn>',
    controller: function($location, $scope){
      var self = this;
      self.pageTitle = 'HOME';
      self.url = $location.url().replace('/', '');
      $scope.$on('$routeChangeSuccess', function(){
        self.url = $location.url().replace('/', '');
        switch (self.url) {
          case 'whyus':
            self.pageTitle='WHY US'
            break;
          case 'services':
            self.pageTitle='SERVICES'
            break;
          case 'clients':
            self.pageTitle='CLIENTS'
            break;
          case 'opportunities':
            self.pageTitle='OPPORTUNITIES'
            break;
          case 'approach':
            self.pageTitle='APPROACH'
            break;
          case 'aboutus':
            self.pageTitle='ABOUT US'
            break;
          case 'contactus':
            self.pageTitle='CONTACT US'
            break;
          case 'legal':
            self.pageTitle='LEGAL'
            break;
          default:
            self.pageTitle='HOME'

        }

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
