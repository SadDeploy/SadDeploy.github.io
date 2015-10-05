$(window).load(function() {
  $('#carousel').flexslider({
    animation: 'slide',
    controlNav: false,
    animationLoop: true,
    slideshow: false,
    itemWidth: 141,
    itemMargin: 10,
    asNavFor: '#slider'
  });

  $('#slider').flexslider({
    animation: 'slide',
    controlNav: false,
    directionNav: false,
    animationLoop: false,
    slideshow: false,
    sync: '#carousel'
  });


    $(".validate-phone").mask("+7 (999) 999-9999");


  $('a[href*=#]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
  });


// parallax
    $window = $(window);
    $('section[data-type="background"]').each(function(){
          var $bgobj = $(this); // Назначаем объект
          $(window).scroll(function() {
                // Прокручиваем фон со скоростью var.
                // Значение yPos отрицательное, так как прокручивание осуществляется вверх!
                var yPos = -($window.scrollTop() / $bgobj.data('speed'));
                // Размещаем все вместе в конечной точке
                var coords = '50% '+ yPos + 'px';
                // Смещаем фон
                $bgobj.css({ backgroundPosition: coords });
          });
 });



  $(".fancybox").fancybox({
    width		: 660,
    height		: 400
  });
});
window.onload = function(){
if(location.href.indexOf('success') != -1)
	{
		document.getElementById('thankHref').click()
	}
	if(location.href.indexOf('error') != -1)
	{
		document.getElementById('errorHref').click()
	}
}