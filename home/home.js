function ticker() {
    $('#feeds').animate({
        top: '-220px'
    }, 6000, function () {
        $(this).animate({
            top: '0'
        }, 0);
        ticker();
    });
    console.log("scrolling");
}

ticker();
