'use strict';

$(document).ready(function () {

    $('.station-inner__link').on('click', function (e) {
        debugger;
        var elemId = "";
        for (var i = 0; i < 27; i++) {
            switch (e.target.id) {
                case "nav" + i:
                    elemId = "#s" + i;
                    break;
            }
        }
        $('.station-inner__block').animate({
            scrollTop: $(elemId).parent().scrollTop() + $(elemId).offset().top - $(elemId).parent().offset().top
        }, {
            duration: 1000,
            specialEasing: {
                width: 'linear',
                height: 'easeOutBounce'
            },
            complete: function complete(e) {
                //console.log("animation completed");
            }
        });
        e.preventDefault();
    });
});
//# sourceMappingURL=main.js.map