'use strict';

$(document).ready(function () {
    $('.header__form-js').click(function () {
        $(this).parent().parent().next().show();
        return false;
    });
    $('.header__form-close-js').click(function () {
        $(this).parent().hide();
        return false;
    });
    $(document).click(function (event) {
        if ($(event.target).closest("#form").length) return;
        $("#form").hide();
        event.stopPropagation();
    });
    $('.header__form-login-js').click(function () {
        $(this).toggleClass('active').parent().parent().next().slideToggle();
        return false;
    });
});
//# sourceMappingURL=main.js.map