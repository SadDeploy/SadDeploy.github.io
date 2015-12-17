'use strict';

$(document).ready(function () {

    if (screen.width > 768) {
        // fullpage
        $('#fullpage').fullpage({
            anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage'],
            menu: '#menu',
            css3: true,
            scrollingSpeed: 1000
        });
    }

    // phone
    $("[name=phone]").mask("+7 (999) 999-9999");

    // custom scroll
    $(".catalog-submenu").mCustomScrollbar({
        theme: "dark-thick"
    });
    $(".product__item-img").mCustomScrollbar({
        theme: "dark-thick",
        axis: "x"
    });

    // choose
    $('.brief__item').on('click', '.brief__item-element-js:not(.active)', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});
//# sourceMappingURL=main.js.map