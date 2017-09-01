

/***********************************/
/* Sidebar Slide in on top */
/**********************************/
$('.navigation__main').children().clone().appendTo('.responsive-standalone');
$('.open-menu').on('click', function (event) {
    event.preventDefault();
    $('body').addClass('noscroll');
    $('.responsive-standalone').addClass('navigation-active');
    $(".responsive-standalone-overlay").animate({
        "opacity": "toggle"
    }, {
        duration: 500
    }, function () {
        $(".responsive-standalone-overlay").fadeIn();
    });
    return false;
});
$('.responsive-standalone-close').on('click', function (event) {
    event.preventDefault();
    $('body').removeClass('noscroll');
    $('.responsive-standalone').removeClass('navigation-active');
    $(".responsive-standalone-overlay").hide();
    return false;
});
$(".responsive-standalone-overlay").on('click', function () {
    $('.responsive-standalone').removeClass('navigation-active');
    $(".responsive-standalone-overlay").hide();
    $('body').removeClass('noscroll');
});
$('.responsive-standalone li.dropdown').on('click', function() {
    $(this).addClass('active').children('.sub-menu').slideToggle();
});
/***********************************/
/* card favourite toggle class */
/**********************************/
var start = $('.header').offset().top;

$.event.add(window, "scroll", function () {
    var p = $(window).scrollTop();
    if (p > start) {
        $('.header').addClass('header__fixed');
    } else {
        $('.header').removeClass('header__fixed');
    }
});

$(".chzn-select").chosen({width: '100%', disable_search: true});
$(".chzn-search").chosen({width: '100%'});