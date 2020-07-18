jQuery(document).ready(function(){

    // var translateX = 0;
    // var matrix = jQuery('.swiper-wrapper').css('transform').replace(/[^0-9\-.,]/g, '').split(',');
    //     translateX = matrix[12] || matrix[4];
    //     console.log(translateX);
    
 

    jQuery(window).scroll(function(){

        

        var positiontop = jQuery(document).scrollTop();
        console.log(positiontop);

        if(positiontop >= 0){
            jQuery('.landing-title-1').addClass('animate__animated animate__fadeInDown animating');
            jQuery('.landing-title-2').addClass('animate__animated animate__fadeInDown animating');
            jQuery('.landing-content').addClass('animate__animated animate__zoomIn animating');
            jQuery('.landing-image').addClass('animate__animated animate__fadeInUp animating');
        }

        if(positiontop > 400)
        {
            jQuery('.section-1-title').addClass('animate__animated animate__fadeInLeft animating');
            jQuery('.sunderline-1').addClass('animate__animated animate__fadeInLeft animating');
            jQuery('.section-1-sub-title').addClass('animate__animated animate__fadeInRight animating');
            jQuery('.section-1-content').addClass('animate__animated animate__zoomIn animating');
        }
        if(positiontop > 650){
            jQuery('.section-1-image').addClass('animate__animated animate__fadeInUp animating');
        }
        if(positiontop > 1820){
            jQuery('.section-2-title').addClass('animate__animated animate__fadeInLeft animating');
            jQuery('.sunderline-2').addClass('animate__animated animate__fadeInLeft animating');
            jQuery('.section-2-sub-title').addClass('animate__animated animate__fadeInRight animating');
            jQuery('.section-2-content').addClass('animate__animated animate__zoomIn animating');
        }
        if(positiontop > 2100){
            jQuery('.section-2-image').addClass('animate__animated animate__fadeInUp animating');
        }
        if(positiontop > 3300){
            jQuery('.section-3-title').addClass('animate__animated animate__fadeInLeft animating');
            jQuery('.sunderline-3').addClass('animate__animated animate__fadeInLeft animating');
            jQuery('.section-3-sub-title').addClass('animate__animated animate__fadeInRight animating');
            jQuery('.section-3-content').addClass('animate__animated animate__zoomIn animating');
        }
        if(positiontop > 3650){
            jQuery('.section-3-image').addClass('animate__animated animate__fadeInUp animating');
        }
        if(positiontop > 4950){
            jQuery('.about-title').addClass('animate__animated animate__fadeInLeft animating');
            jQuery('.sunderline-4').addClass('animate__animated animate__fadeInLeft animating');
            jQuery('.about-sub-title-1').addClass('animate__animated animate__fadeInRight animating');
            jQuery('.about-content-1').addClass('animate__animated animate__zoomIn animating');
        }
        if(positiontop > 5050){
            jQuery('.about-sub-title-2').addClass('animate__animated animate__fadeInRight animating');
            jQuery('.about-content-2').addClass('animate__animated animate__zoomIn animating');
        }

    });

});
