'use strict';

angular.module('hermesApp', [
  'ngRoute',
  'home',
  'whyus',
  'services',
  'clients',
  'opportunities',
  'approach',
  'aboutus',
  'contactus',
  'legal'
]);

angular.module('hermesApp').controller('MainController', ['$scope',function($scope){
  $scope.$on('$routeChangeStart', function(next, current) {

  //  window.scrollTo(0, 0);
  setTimeout(function(){
    $('html, body').animate({scrollTop : 0},0);
  
  },0);

 });
}])
