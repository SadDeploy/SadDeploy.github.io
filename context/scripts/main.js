'use strict';

$(window).load(function () {
    // animate
    //$(window).scroll(function() {
    //    $('#benefits .container').each(function(){
    //        var imagePos = $(this).offset().top;
    //
    //        var topOfWindow = $(window).scrollTop();
    //        if (imagePos < topOfWindow+900) {
    //            $(this).addClass("slideUp");
    //        }
    //    });
    //    $('#shares_anim .container').each(function(){
    //        var imagePos = $(this).offset().top;
    //
    //        var topOfWindow = $(window).scrollTop();
    //        if (imagePos < topOfWindow+800) {
    //            $(this).addClass("fadeIn");
    //        }
    //    });
    //    $('#partners .container').each(function(){
    //        var imagePos = $(this).offset().top;
    //
    //        var topOfWindow = $(window).scrollTop();
    //        if (imagePos < topOfWindow+700) {
    //            $(this).addClass("bigEntrance");
    //        }
    //    });
    //});

    $(".fancybox").fancybox({
        maxWidth: 523,
        maxHeight: 744,
        width: '70%',
        height: '70%'
    });

    (function ($) {
        $(function () {
            $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
                $(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
            });
        });
    })(jQuery);

    function initMap() {
        var myLatLng = new google.maps.LatLng(56.994355, 40.9750783);
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
            center: myLatLng,
            scrollwheel: false,
            zoom: 17,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.TOP_RIGHT
            }
        });
        // Create a marker and set its position.
        polygon.setMap(map);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(56.994355, 40.9750783),
            map: map,
            title: '',
            icon: 'images/marker.png'
        });
        marker.setMap(map);
    }

    // anchor
    $('a[href*=#]').bind("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 79
        }, 1000);
        e.preventDefault();
    });
    return false;
});
//# sourceMappingURL=main.js.map