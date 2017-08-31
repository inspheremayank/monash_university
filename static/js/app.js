

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

$(".card__view-content .favorite").on('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
    $(this).parents('.card__view-content').toggleClass('active');
    
});

$(".search-section input").on('focus', function() {
    $(this).closest(".input-group").addClass("active");
});
$('.search-section input').on('blur', function() {
    if( !$(this).val() ) {
           $(this).closest(".input-group").removeClass("active");
    }
});
$(".desktop-search .button").on('click', function() {
    var searchActive = $(this).parent(".desktop-search");
    var data = $(this).parent(".desktop-search").find('input').val();
    if(searchActive.hasClass('active') && data === "") { 
       searchActive.removeClass("active");
       $(this).find('.fa').addClass('fa-search').removeClass('fa-close');
    }
    else {
       searchActive.addClass("active"); 
       $(this).find('.fa').removeClass('fa-search').addClass('fa-close');
    }
    return false;
});

$("#desktopSearch").on('keypress', function(e){
   if(e.which === 13) {
       $('#headerSearchForm').submit();
   }
});

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});

$(".chzn-select").chosen({width: '100%', disable_search: true});
$(".chzn-search").chosen({width: '100%'});