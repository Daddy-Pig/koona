$(document).ready(function() {
  
    /*navigation scroll*/
    $(function() {
          $('a[href*=\\#]:not([href=\\#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top - 50
                }, 1000);
                return false;
              }
            }
          });
        });
    
  /*Scroll on buttons*/
    $('.js--scroll-to-contact').click(function(){  
        $('html,body').animate({scrollTop: $('.js--section-contact').offset().top - 100},1000);
    });
    $('.js--scroll-to-plans').click(function(){
       $('html,body').animate({scrollTop: $('.js--section-plans').offset().top-50},1000);
    });

        /*Animations on scroll*/
       $('.js--wp-1').waypoint(function(direction) {
                $('.js--wp-1').addClass('animated shake');
                    }, {
                offset: '50%'
            });
       $('.js--wp-2').waypoint(function(direction) {
            $('.js--wp-2').addClass('animated fadeInUp');
        }, {
            offset: '50%'
        });
    });