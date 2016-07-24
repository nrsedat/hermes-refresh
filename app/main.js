$(document).ready(function () {

    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".bs-example-navbar-collapse-1").hasClass("in");
        if (_opened && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggle").click();
        }
    });

  
});
