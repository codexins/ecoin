/******************************

INDEX:

	s00 - Predefined Variables
	s01 - Preloader
	s02 - Primary Slider Settings
	s03 - Primary Slider Background Settings
	s04 - Full Screen Header
	s05 - Header Background Video
	s06 - Header Background Slider
	s07 - Superfish Menu
	s08 - Intelligent Header Space
	s09 - Headroom Js for Auto Hide the header on scroll
	s10 - Animated Counter
	s11 - Isotope Js for Portfolio Section
	s12 - Slide left action for Mobile Menu
	s13 - Reasons to Choose Carousel
	s14 - Testimonial Carousel
	s15 - Client Carousel
	s16 - Smooth Scroll to anchor tags
	s17 - Scroll to Top JS
	s18 - Placeholder JS


******************************/

(function($) {

    "use strict";

    // Declaring main variable
    var CODEXIN = {};


    /************************************************************
        s00 - Predefined Variables
    *************************************************************/

    var $window 			= $(window),
        $document 			= $(document),
        $sliderPro			= $("#primary_slider"),
        $sliderProOverlay	= $(".sp-slide"),
        $owlSliderSlide		= $(".slider-section .slide-single"),
        $fillscreen 		= $(".fill-screen"),
        $fullscreenVideo 	= $("#header_full_screen_video"),
        $bgSlide 			= $("#header_bg_slide"),
        $sfMenu 			= $(".main-menu"),
        $pageloader 		= $(".cx-pageloader"),
        $intelHeader 		= $(".intelligent-header"),
        $counter 			= $(".counter"),
        $isoContainer 		= $(".portfolio-wrapper"),
        $isoFilter	 		= $(".portfolio-filter li"),
        $slickOne 			= $(".info-carousel"),
        $slickTwo 			= $(".testimonial-carousel"),
        $slickNav 			= $(".testimonial-nav"),
        $slickThree 		= $(".testimonial-carousel-type-02"),
        $slickFour 			= $(".client-carousel"),
        $toTop 				= $("#toTop");
        
    // Check if element exists
    $.fn.cxExists = function() {
        return this.length > 0;
    };


    /************************************************************
        s01 - Preloader
    *************************************************************/

    CODEXIN.preloader = function() {
		$pageloader.delay(300).fadeOut('fast');
    };


    /************************************************************
        s02 - Primary Slider Settings
    *************************************************************/

	CODEXIN.primarySlider = function() {
		if ($sliderPro.cxExists()) {
		    $sliderPro.sliderPro({
		    	width: '100%',
		    	visibleSize: '100%',
		    	height:500,
		    	arrows: true,
				buttons: false,
				autoplay:false,
				forceSize: 'fullWidth',
				responsive: true,
				orientation: 'vertical',
				breakpoints: {
					1199: {
						height: 470,
					},
					991: {
						height: 430
					},
					767: {
						height: 350
					}
				}
		    });
		}
	};

	CODEXIN.primarySliderOverlay = function() {
		if ($sliderProOverlay.cxExists()) {
			$sliderProOverlay.append('<div class="overlay-mask"></div>');
		}
	};


    /************************************************************
        s03 - Primary Slider Background Settings
    *************************************************************/

	CODEXIN.primarySliderBgSetting = function() {
        if ($owlSliderSlide.cxExists()) {
            $owlSliderSlide.each(function() {
                var $this = $(this);
                var img = $this.find(".slider-image").attr("src");

                $this.css({
                    backgroundImage: "url("+ img +")",
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                })
            });
        }
	};


    /************************************************************
        s04 - Full Screen Header
    *************************************************************/

    CODEXIN.fullscreenHeader = function() {
	    if ( $window.width() > 991) {      
			$fillscreen.css("height", window.innerHeight);
	    } 
	    else {
	      	$fillscreen.css("height", "500px");
	    }
    };


    /************************************************************
        s05 - Header Background Video
    *************************************************************/

    CODEXIN.fullscreenVideoHeader = function() {
	    if ($fullscreenVideo.cxExists()) {
	        $fullscreenVideo.wallpaper({
	            source: {
	                poster: "assets/img/slider/home-2/poster.jpg",
	                webm: "assets/videos/video.webm",
	                mp4: "assets/videos/video.mp4",
	                ogg: "assets/videos/video.ogv"
	            }

	        });
	    }
    };


    /************************************************************
        s06 - Header Background Slider
    *************************************************************/

	CODEXIN.backgroundSliderHeader = function() {
	    if ($bgSlide.cxExists()) {
	        $bgSlide.backstretch([
	            "assets/img/slider/home-4/slide-1.jpg",
	            "assets/img/slider/home-4/slide-2.jpg",
	            "assets/img/slider/home-4/slide-3.jpg" 
	        ], 
	        {
	            duration: 4000,
	            fade: 750,
	            preload: 0,
	            start: 2

	        });
	    }
	};


    /************************************************************
        s07 - Superfish Menu
    *************************************************************/

    CODEXIN.mainNav = function() {

	    // Submenu Intelligent hover functionality
	    $sfMenu.on('mouseover', "ul", function() {
	        var menu = $(this);
	        var child_menu = $(this).find('ul');
	        if ($(menu).offset().left + $(menu).width() + $(child_menu).width() > $window.width()) {
	            $(child_menu).css({
	                "left": "inherit",
	                "right": "100%"
	            });
	        }
	    });
	};


    /************************************************************
        s08 - Intelligent Header
    *************************************************************/

	CODEXIN.headerAutoFixed = function() {
		var wrap = $("header");
		var intHeight = $(".intelligent-header").outerHeight();
	    $window.on('scroll', function() {
	        if ($window.scrollTop() > intHeight) {
	            wrap.addClass("fix-navigation");
	            $(".intelligent-header-space").height('56px');
	        } else {
	            wrap.removeClass("fix-navigation");
	            $(".intelligent-header-space").height('0');
	        }
	    });
    };




    /************************************************************
        s10 - Animated Counter
    *************************************************************/

    CODEXIN.animatedCounter = function() {
     if ($counter.cxExists()) {
         $counter.each(function () {
           var $elem = $(this);                 
             $elem.appear(function () {
               $elem.find('.timer').countTo();
            });                  
         });
     }
    };


    /************************************************************
        s11 - Isotope Js for Portfolio Section
    *************************************************************/

    CODEXIN.portfolioIsotope = function() {
    	if ($isoContainer.cxExists()) {
	        $isoContainer.imagesLoaded(function() {
	            $isoContainer.isotope({
	                itemSelector: ".portfolio",
	                layoutMode: 'masonry'
	            });
	        });

	        $isoFilter.on('click', function(e) {
	            var $this = $(this);
	            var $filter = $this.attr('data-filter');

	            $isoContainer.isotope({
	                filter: $filter
	            });

	            $isoFilter.removeClass('active');
	            $this.addClass('active');
	        });

		    //Targeting Portfolio a tag for click event
		    $(".portfolio .primary-title").on('click', function(e) {
		        $(this).find("a.clickable").first().click();
		    });

		    $(".portfolio .primary-title a.clickable").on('click', function(e) {
		        e.stopPropagation();
		    });

	    }
	};


    /************************************************************
        s12 - Slide left action for Mobile Menu
    *************************************************************/

    CODEXIN.responsiveMenu = function() {
	    var slideLeft = new Menu({
	        wrapper: "#o-wrapper",
	        type: "slide-left",
	        menuOpenerClass: ".c-button",
	        maskId: "#c-mask"
	    });

	    var slideLeftBtn = document.querySelector("#c-button--slide-left");

	    slideLeftBtn.addEventListener('click', function(e) {
	        e.preventDefault;
	        slideLeft.open();
	    });
	};

	// Mobile menu sub-menu actions
	CODEXIN.responsiveSubMenu = function() {
		var nav = $(".mobile-menu");
		// adds toggle button to li items that have children
		nav.find('li a').each(function() {
			if ($(this).next().length > 0) {
				$(this).parent('li').addClass('has-child').append('<a class="drawer-toggle" href="#"><i class="fa fa-angle-down"></i></a>');
			}
		});

		// expands the dropdown menu on each click 
		nav.find('li .drawer-toggle').on('click', function(e) {
			e.preventDefault();
			$(this).parent('li').children('ul').stop(true, true).slideToggle(250);
			$(this).parent('li').toggleClass('open');
		});
	}

    /************************************************************
        s13 - Reasons to Choose Carousel
    *************************************************************/

    CODEXIN.reasonsCarousel = function() {
	    if ($slickOne.cxExists()) {
	        $slickOne.slick({
	            infinite: true,
	            slidesToShow: 4,
	            slidesToScroll: 1,
	            dots: true,
	            arrows: true,
	            prevArrow: '<span class="prev-arrow"><i class="fa fa-angle-left"></i></span>',
	            nextArrow: '<span class="next-arrow"><i class="fa fa-angle-right"></i></span>',
	            responsive: [{
	                    breakpoint: 992,
	                    settings: {
	                        slidesToShow: 2,
	                        slidesToScroll: 1,
	                        infinite: true
	                    }
	                },
	                {
	                    breakpoint: 500,
	                    settings: {
	                        slidesToShow: 1,
	                        slidesToScroll: 1,
	                        infinite: true
	                    }
	                }
	            ]

	        });
	    }
	};


    /************************************************************
        s14 - Testimonial Carousel
    *************************************************************/

	CODEXIN.testimonialCarousel = function() {
		if ($slickTwo.cxExists()) {
	        $slickTwo.slick({
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            arrows: false,
	            asNavFor: ".testimonial-nav"
	        });

	        $slickNav.slick({
	            slidesToShow: 3,
	            slidesToScroll: 1,
	            asNavFor: ".testimonial-carousel",
	            centerMode: true,
	            focusOnSelect: true,
	            responsive: [
	                {
	                    breakpoint: 480,
	                    settings: {
	                        slidesToShow: 3,
	                        slidesToScroll: 1
	                    }
	                }
	            ]
	        });
	    }

	    //Testimonial Carousel Type 02
	    if ($slickThree.cxExists()) {
	        $slickThree.slick({
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            arrows: false,
	            dots: true
	        });
	    }
	};


    /************************************************************
        s15 - Client Carousel
    *************************************************************/

    CODEXIN.clientCarousel = function() {
    	if ($(".client-section").cxExists()) {
	        if ($(".client-section").hasClass("type-2")) {
	        	//client carosel type-2
	            $slickFour.slick({
	                infinite: true,
	                slidesToShow: 5,
	                slidesToScroll: 1,
	                dots: false,
	                arrows: true,
	                autoplay: true,
	                responsive: [{
	                        breakpoint: 992,
	                        settings: {
	                            slidesToShow: 4,
	                            slidesToScroll: 1
	                        }
	                    },

	                    {
	                        breakpoint: 768,
	                        settings: {
	                            slidesToShow: 3,
	                            slidesToScroll: 1
	                        }
	                    },

	                    {
	                        breakpoint: 481,
	                        settings: {
	                            slidesToShow: 2,
	                            slidesToScroll: 1
	                        }
	                    }
	                ]

	            });
	        } else {
	            //client carosel type-1
	            $slickFour.slick({
	                infinite: true,
	                slidesToShow: 5,
	                slidesToScroll: 1,
	                dots: true,
	                arrows: false,
	                autoplay: true,
	                responsive: [{
	                        breakpoint: 992,
	                        settings: {
	                            slidesToShow: 4,
	                            slidesToScroll: 1
	                        }
	                    },

	                    {
	                        breakpoint: 768,
	                        settings: {
	                            slidesToShow: 3,
	                            slidesToScroll: 1
	                        }
	                    },

	                    {
	                        breakpoint: 481,
	                        settings: {
	                            slidesToShow: 2,
	                            slidesToScroll: 1
	                        }
	                    }
	                ]

	            });
	        }
	    }
	};


    /************************************************************
        s16 - Smooth Scroll to anchor tags
    *************************************************************/

	CODEXIN.explore = function() {
	    $(".explore").on('click', function() {
	        $("html, body").stop().animate({
	            scrollTop: $($(this).attr('href')).offset().top + 30
	        }, 1000, 'easeOutCubic');
	        event.preventDefault ? event.preventDefault() : (event.returnValue = false);
	    });
	};


    /************************************************************
        s17 - Scroll to Top JS
    *************************************************************/

    CODEXIN.scrollToTop = function() {
	    $window.on('scroll', function() {
	        if ($window.scrollTop() > 200) {
	            $toTop.fadeIn();
	        } else {
	            $toTop.fadeOut();
	        }
	    });

	    $toTop.on('click', function() {
	        $("html,body").animate({
	            scrollTop: 0
	        }, 800)
	    }); //scrollup finished
	};


    /************************************************************
        s18 - Placeholder JS
    *************************************************************/

    CODEXIN.placeHolders = function() {
        var input = document.createElement("input");
        if (('placeholder' in input) === false) {
            $('[placeholder]').on('focus', function() {
                var i = $(this);
                if (i.val() === i.attr('placeholder')) {
                    i.val('').removeClass('placeholder');
                    if (i.hasClass('password')) {
                        i.removeClass('password');
                        this.type = 'password';
                    }
                }
            }).on('blur', function() {
                var i = $(this);
                if (i.val() === '' || i.val() === i.attr('placeholder')) {
                    if (this.type === 'password') {
                        i.addClass('password');
                        this.type = 'text';
                    }
                    i.addClass('placeholder').val(i.attr('placeholder'));
                }
            }).blur().parents('form').on('submit', function() {
                $(this).find('[placeholder]').each(function() {
                    var i = $(this);
                    if (i.val() === i.attr('placeholder'))
                        i.val('');
                })
            });
        }
    };

    /************************************************************
    	s19 - Parallax JS
    *************************************************************/

	CODEXIN.parallax = function() {
	    var parallax = document.querySelectorAll(".parallax"),
	        speed = 0.4;
	    window.onscroll = function() {
	        [].slice.call(parallax).forEach(function(el, i) {
	            var windowYOffset = window.pageYOffset,
	                elementYOffset = el.offsetTop,
	                elBackgrounPos = "50% " + ((windowYOffset - elementYOffset) * speed) + "px";
	            el.style.backgroundPosition = elBackgrounPos;
	        });
	    };
	};




	/************************************************************
		s99 - execute all functions
	*************************************************************/


    // Window load functions
    $window.on('load', function() {
        CODEXIN.preloader(),
        CODEXIN.primarySliderBgSetting(),
        CODEXIN.portfolioIsotope();
    });

    // Document ready functions
    $document.on('ready', function() {
    	CODEXIN.primarySlider(),
    	CODEXIN.primarySliderOverlay(),
    	CODEXIN.fullscreenVideoHeader(),
    	CODEXIN.backgroundSliderHeader(),
    	CODEXIN.mainNav(),
    	CODEXIN.animatedCounter(),
    	CODEXIN.responsiveMenu(),
    	CODEXIN.responsiveSubMenu(),
    	CODEXIN.reasonsCarousel(),
    	CODEXIN.testimonialCarousel(),
    	CODEXIN.clientCarousel(),
    	CODEXIN.explore(),
    	CODEXIN.scrollToTop(),
    	CODEXIN.placeHolders();
    	CODEXIN.parallax();
    });

    // Window load and resize functions
    $window.on('load resize', function() {
        CODEXIN.fullscreenHeader(),
        CODEXIN.headerAutoFixed();
    });

})(jQuery);