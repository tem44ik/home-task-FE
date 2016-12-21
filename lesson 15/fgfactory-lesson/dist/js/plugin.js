;(function ($){
    var header = $('header');
    var windowHeight = $(window).height();

    $(window).on('scroll', function(){
        var scrollTop = $(window).scrollTop();

        if( scrollTop  > windowHeight/2){
            header.addClass('is-fixed');
        } else{
            header.removeClass('is-fixed');
        }
    });
})(jQuery);
(function ($){
   $(window).on('load', function () {
       var prev = $('.slick-prev');
       var next = $('.slick-next');

       var parentCarousel, curentSlide, nextSlide, prevSlide;

       function addClassSlider(self, elem){
           parentCarousel = $(self).closest('.corusel');
           curentSlide =  $(parentCarousel).find('.slick-current');

           nextSlide =  curentSlide.next('.slick-slide');
           prevSlide =  curentSlide.prev('.slick-slide');


           if(elem == 'next'){
               $(curentSlide).addClass('translate-left');
               $(nextSlide).addClass('translate-left');
           }  else{
               $(curentSlide).addClass('translate-right');
               $(prevSlide).addClass('translate-right');
           }

       };

       next.on('mouseover', function(){
           addClassSlider(this, 'next');
       });
       next.on('mouseout', function () {
           $(curentSlide).removeClass('translate-left');
           $(nextSlide).removeClass('translate-left');
       })
       prev.on('mouseover', function(){
           addClassSlider(this, "prev");
       });
       prev.on('mouseout', function () {
           $(curentSlide).removeClass('translate-right');
           $(prevSlide).removeClass('translate-right');
       })
   })
})(jQuery);