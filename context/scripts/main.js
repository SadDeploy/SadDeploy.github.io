"use strict";

(function ($) {
    $.fn.jScroll = function (options) {

        var opts = $.extend({}, $.fn.jScroll.defaults, options);

        return this.each(function () {
            var $element = $(this);
            var $window = $(window);
            var locator = new location($element);

            $window.scroll(function () {
                $element.stop().animate(locator.getMargin($window), opts.speed);
            });
        });

        // Private
        function location($element) {
            this.min = $element.offset().top;
            this.originalMargin = parseInt($element.css("top"), 10) || 0;

            this.getMargin = function ($window) {
                var max = $element.parent().height() - $element.outerHeight();
                var margin = this.originalMargin;

                if ($window.scrollTop() >= this.min) margin = margin + opts.top + $window.scrollTop() - this.min + 73;

                if (margin > max) margin = max;

                return { "top": margin + 'px' };
            };
        }
    };

    // Public: Default values
    $.fn.jScroll.defaults = {
        speed: 0,
        top: 0
    };
})(jQuery);

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
                $(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('div.tabs__content').hide('slow').eq($(this).index()).show('slow');
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

    $(".scroll").jScroll();

    // anchor
    $('a[href*=#]').bind("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 65
        }, 1000);
        e.preventDefault();
    });
    return false;
});
//# sourceMappingURL=main.js.map