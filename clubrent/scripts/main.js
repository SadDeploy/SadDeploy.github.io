"use strict";

$(window).load(function () {

    // owlCarousel
    $("#owl-example").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        navigationText: ["", ""],
        singleItem: true
    });

    // datepicker
    $('.date input').datepicker({
        format: "mm.dd.yyyy",
        orientation: "bottom auto"
    });

    // breadcrumb
    if ($(".breadcrumb li:first-child").hasClass("active")) {
        $('.breadcrumbs').addClass('first-list');
    } else if ($(".breadcrumb li:last-child").hasClass("active")) {
        $('.breadcrumbs').addClass('last-list');
    }

    // mask
    $(".phone").mask("+7 (999) 999-9999");
    $(".dates").mask("99.99.9999", { placeholder: "ДД/ММ/ГГГГ" });
    $(".passport").mask("9999 999999", { placeholder: "0000 000000" });

    // custom
    $('.full-js a').click(function () {
        $(this).parent().hide().parents().find('.custom-js').removeClass('col-xs-12').addClass('col-md-6').parents().find('.full-block').show('slow').parents().find('.form').addClass('anima');
    });
});
//# sourceMappingURL=main.js.map