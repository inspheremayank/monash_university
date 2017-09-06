

/***********************************/
/* Sidebar Slide in on top */
/**********************************/
$('.navigation__main-menu').children().clone().appendTo('.standalone-menu');
$('.menu-bar').on('click', function (event) {
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
$('.responsive-standalone li.dropdown').on('click', function () {
    $(this).addClass('active').children('.sub-menu').slideToggle();
});
/***********************************/
/* card favourite toggle class */
/**********************************/
//var start = $('.header').offset().top;
//
//$.event.add(window, "scroll", function () {
//    var p = $(window).scrollTop();
//    if (p > start) {
//        $('.header').addClass('header__fixed');
//    } else {
//        $('.header').removeClass('header__fixed');
//    }
//});

$(".desktop-search .button").on('click', function () {
    var searchActive = $(this).parent(".desktop-search");
    var data = $(this).parent(".desktop-search").find('input').val();
    if (searchActive.hasClass('active') && data === "") {
        searchActive.removeClass("active");
        $(this).find('.fa').addClass('fa-search').removeClass('fa-close');
    } else {
        searchActive.addClass("active");
        $(this).find('.fa').removeClass('fa-search').addClass('fa-close');
    }
    return false;
});

$("#desktopSearch").on('keypress', function (e) {
    if (e.which === 13) {
        $('#headerSearchForm').submit();
    }
});

$('.owl-carousel').owlCarousel({
    items: 1,
    responsiveClass: true
});

$(".regular").slick({
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$("#socialFix").sticky({topSpacing: 0});

$(".followers__grid-follow").on('click', function() {
    $(this).toggleClass('following');
});
$(".chzn-select").chosen({width: '100%', disable_search: true});
$(".chzn-search").chosen({width: '100%'});