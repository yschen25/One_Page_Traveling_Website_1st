$(function(){

    // Slide show
    setTimeout(autoSlideshow, 8000);
    $('.banner').css('transition','0.5s');

    var iter = 1;
    function autoSlideshow(){   

        $('.background').css('opacity','0');
        if(iter == 0) $('#b0').css('opacity','1');
        else if(iter == 1) $('#b1').css('opacity','1');
        else if(iter == 2) $('#b2').css('opacity','1');
        else $('#b3').css('opacity','1');

        iter++;
        if(iter==4) iter=0;

        setTimeout(autoSlideshow, 8000);
    }

    // Show the popup
    $('.showPopup').click(function(){
        $('.popup').addClass('show');
    })

    // Close the popup
    $('.popup .close').click(function(){
        $('.popup').removeClass('show');
    })

    // Animated number
    $(window).scroll(startCounter);
    function startCounter() {
        if ($(window).scrollTop() > 300) {
            $(window).off("scroll", startCounter);
            $('.count').each(function(){
                var $this = $(this);
                $({Counter : 0}).animate({Counter: $this.text()}, {
                    duration: 1500,
                    easing: 'swing',
                    step: function(){
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
        }
    }

    // Change navagation style
    $(window).scroll(function() {

          if($(window).scrollTop() > 400){
                $(".logo img").css('width','60%');
                $(".navigation .nav a").css('padding','2px 30px 5px 20px');
                $(".navigation .nav li").css('font-size','14px');
          }else{
                $(".logo img").css('width','90%');
                $(".navigation .nav a").css('padding','6px 30px 15px 20px');
                $(".navigation .nav li").css('font-size','18px');
          }

          var level = 0;
          $('.nav_dw  a').each(function(){
            var scrollpos = $(window).scrollTop(); 
            var target = $(this).attr('href');
            var regionoffset = $(target).position().top;
            var anchor = $(target).closest('.anchor');

            if(anchor.position().top - 400 <= scrollpos 
            && (anchor.position().top + anchor.height() - 100) > scrollpos)
                 $(this).css('color','#e30a0a');
            else $(this).css('color','#000000');
          });
         
    });

    // Slide to specific block
    $('.logo a, .nav_dw a').click(function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop : $(target).offset().top
        }, 600);
    });

});