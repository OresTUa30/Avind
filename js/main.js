$(document).ready(function(){

   $(".slider").owlCarousel({
       nav : true,
       pagination : true,
       dots: false,
       loop: true,
       navText : ["<img src='img/arow-left.png'>","<img src='img/arow-right.png'>"],
       nav: true,
       responsive: {
        375: {
            items: 1
        },
         768: {
             items: 2
         },
         1024: {
            items: 3
        },
         1200: {
            items: 3
        },
        1440: {
         items: 4
         },
         1600: {
            items: 5
         }  
     }, 
       itemsDesktop : true,
       itemsDesktopSmall : true,
       itemsTablet: true,
       itemsMobile : true
   });
});

$(document).ready(function() {
  if ( document.documentElement.clientWidth < 1441 ){

      $(".photor__items").addClass('owl-carousel').owlCarousel({
          nav : true,
          dots: false,
          autoWith: false,
          loop: true,
          margin: 15,
          items: 3,
          navText : ["<img src='img/arow-left-empty.png'>","<img src='img/arow-right-empty.png'>"],
          responsive: {
           375: {
               items: 1,
           },
            768: {
                items: 2,
            },
            1024: {
               items: 2,
           },
           1440: {
              items: 3,
              },
        },
      });
  }
});


 VanillaTilt.init(document.querySelector(".cloud"), {
    max: 25,
    speed: 400
});

$(document).ready(function() {
   $('.header__burger').click(function() {
       $('.header__burger').toggleClass('open-menu');
       $('.burger__nav').toggleClass('open-menu');
   });
});

 $(document).ready(function(){
  
   $(".menu__achor").on("click","a", function (event) {
  
       //отменяем стандартную обработку нажатия по ссылке
       event.preventDefault();

       //забираем идентификатор бока с атрибута href
  
       var id  = $(this).attr('href'),
  
       //узнаем высоту от начала страницы до блока на который ссылается якорь
  
           top = $(id).offset().top;
       //анимируем переход на расстояние - top за 1500 мс
  
       $('body,html').animate({scrollTop: top}, 1500);
  
   });
  
   });
   