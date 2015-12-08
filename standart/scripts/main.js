"use strict";

$(window).load(function () {
    // owlCarousel
    $("#owl-products").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        stopOnHover: true,
        loop: true,
        navigationText: ["<i class='icon-angle-left'></i>", "<i class='icon-angle-right'></i>"]

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

    $("#owl-reasons").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        stopOnHover: true,
        loop: true,
        navigationText: ["<i class='icon-angle-left'></i>", "<i class='icon-angle-right'></i>"]
    });

    $("#owl-ideas").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        stopOnHover: true,
        loop: true,
        navigationText: ["", "Следующий проект <img src='../images/arrow.png' alt=''>"]
    });

    $(".owl-ideas-item").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        stopOnHover: true,
        loop: true,
        navigationText: ["<i class='icon-angle-left'></i>", "<i class='icon-angle-right'></i>"]
    });
});
//# sourceMappingURL=main.js.map