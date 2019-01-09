
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

     
     // -------   Active Mobile Menu-----//

    $(".menu-bar").on('click', function(e){
        e.preventDefault();
        $("nav").toggleClass('hide');
        $("span", this).toggleClass("lnr-menu lnr-cross");
        $(".main-menu").addClass('mobile-menu');
    });
     
    $('select').niceSelect();
    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });

	// $('.active-works-carousel').owlCarousel({
        // center: true,
        // items:2,
        // loop:true,
        // margin: 10,
        // responsive: {
            // 0: {
                // items: 1
            // },
            // 480: {
                // items: 1,
            // },
            // 768: {
                // items: 2,
            // }
        // }
    // });
	
	$('.loop').owlCarousel({
		center: true,
		autoplay: true,
		autoplayTimeout: 4000,
		items:2,
		loop:true,
		margin:80,
		responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1,
				},
				768: {
					items: 2,
				}
			}
	});
	
	var x = document.getElementsByClassName("avant");
	var i;
	for (i = 0; i < x.length; i++) {
	  x[i].innerText = "AVANT";
	}
	
	var x = document.getElementsByClassName("apres");
	for (i = 0; i < x.length; i++) {
	  x[i].innerText = "APRÈS";
	}
		
	
    // Add smooth scrolling to Menu links
    $(".main-menu li a, .smooth").on('click', function(event) {
            if (this.hash !== "") {
              event.preventDefault();
              var hash = this.hash;
              $('html, body').animate({
                scrollTop: $(hash).offset().top - (-10)
            }, 600, function(){
             
                window.location.hash = hash;
            });
        } 
    });

    $(document).ready(function() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    });      

 });
