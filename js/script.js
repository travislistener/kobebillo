$(document).ready(function () {
    var previousScroll = 0;
    var $navbar = $(".navbar");

    $(window).scroll(function () {
        var currentScroll = $(this).scrollTop();

        // Check if the user is scrolling up or down
        if (currentScroll > previousScroll) {
        // Scrolling down
        $navbar.addClass("hidden");
        } else {
        // Scrolling up
        $navbar.removeClass("hidden");
        }

        previousScroll = currentScroll;
    });
});