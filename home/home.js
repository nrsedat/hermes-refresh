var HT = HT || {};

(function(){
  function ticker() {
      $('#feeds').animate({
          top: '-220px'
      }, 6000, function () {
          $(this).animate({
              top: '0'
          }, 0);
          ticker();
      });
  }

  HT.ticker = ticker;
  HT.message = 'Hello';

  HT.sayHello = function(){
    alert(HT.message);
  }

  //$(window).on('home.loaded', ticker);
})();
