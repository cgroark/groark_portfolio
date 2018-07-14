 $(document).ready(function(){
      $(".secondary-header").addClass("animated bounceInDown")
      $(".arrow-img").addClass("animated pulse infinite")
      $(".parallax").parallax();
      $(".button-collapse").sideNav();
      $(".dropdown-trigger").dropdown({ 
        hover: true });
    });

var parallaxbottom = $('.parallax-container').offset().top + $('.parallax-container').height() - 40;
var sectionprojects = $('.projects').offset().top - 60;
var sectionexp = $('.experience-image').offset().top -70;
var contact = $('.contact-div').offset().top -90;
$(window).on('scroll',function(){

    var stop = Math.round($(window).scrollTop());
 
    if (stop > parallaxbottom && stop < sectionprojects) {
        $('.about-nav').addClass('color-shift');
        $('.work-nav').removeClass('color-shift');
    } else if(stop > sectionprojects && stop < sectionexp){
        $(".secondary-header").removeClass("animated bounceInDown")
        $('.about-nav').removeClass('color-shift');
        $('.work-nav').addClass('color-shift');
        $('.expe-nav').removeClass('color-shift');
    } else if(stop > sectionexp && stop < contact){
        $('.work-nav').removeClass('color-shift');
        $('.expe-nav').addClass('color-shift');
         $('.con-nav').removeClass('color-shift');
    }else if(stop > contact){
        $('.expe-nav').removeClass('color-shift');
        $('.con-nav').addClass('color-shift');
    }else{
        $('.about-nav').removeClass('color-shift');
        $('.about-nav').removeClass('color-shift');
        $('.work-nav').removeClass('color-shift');
        $('.expe-nav').removeClass('color-shift');
        $('.con-nav').removeClass('color-shift');
    }

});

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);

      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
