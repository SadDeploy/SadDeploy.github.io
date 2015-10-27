$(window).load(function() {

// menu accordion
    jQuery('.page-sidebar .has-sub > a').click(function () {
        var last = jQuery('.has-sub.open', $('.page-sidebar'));
        last.removeClass("open");
        jQuery('.arrow', last).removeClass("open");
        jQuery('.sub', last).slideUp(200);

        var sub = jQuery(this).next();
        if (sub.is(":visible")) {
            jQuery('.arrow', jQuery(this)).removeClass("open");
            jQuery(this).parent().removeClass("open");
            sub.slideUp(200);
        } else {
            jQuery('.arrow', jQuery(this)).addClass("open");
            jQuery(this).parent().addClass("open");
            sub.slideDown(200);
        }
    });
/*
    function showMenu() {
        var screen_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        if (screen_width >= 991) {
            $('body').removeClass('page-sidebar-closed');
        }
        if (screen_width <= 990) {
            $('body').addClass('page-sidebar-closed');
        }
    }
    $(window).resize(function(){
        showMenu();
    });
*/

// sidebar show/hide
    $('body').on('click', '.sidebar-toggler', function (e) {
        var sidebar = $('.page-sidebar');
        var sidebarMenu = $('.page-sidebar-menu');
        var body = $('body');
        //$(".sidebar-search", sidebar).removeClass("open");
        $(this).toggleClass('active');
        if (body.hasClass("page-sidebar-closed")) {
            body.removeClass("page-sidebar-closed");
            sidebarMenu.removeClass("page-sidebar-menu-closed");
            if ($.cookie) {
                $.cookie('sidebar_closed', '0');
            }
        } else {
            body.addClass("page-sidebar-closed");
            sidebarMenu.addClass("page-sidebar-menu-closed");
            if (body.hasClass("page-sidebar-fixed")) {
                sidebarMenu.trigger("mouseleave");
            }
            if ($.cookie) {
                $.cookie('sidebar_closed', '1');
            }
        }
        $(window).trigger('resize');
    });

// sorting
    $('.sorting').click(function() {
        if ($(this).hasClass("sorting_asc")) {
            $(this).removeClass("sorting_asc");
            $(this).addClass("sorting_desc");
        } else if ($(this).hasClass("sorting_desc")) {
            $(this).addClass("sorting_asc");
            $(this).removeClass("sorting_desc");
        } else {
            $(this).addClass("sorting_asc");
        };
    });

// admin-bar
    $('.pass_remember').click(function() {
        $('.admin__bar-inner-password').slideToggle();
        $(this).find('i').toggleClass('active');
    });

// select
    if ($("select").length) {
        $('select').selectOrDie({});
    }
});