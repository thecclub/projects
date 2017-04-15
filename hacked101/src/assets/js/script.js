"use strict";

// JavaScript Document
( function( ) {

    // Variables
    var windowObj = $( window ),
        body = $( 'body' ),
        basketModal = $( '.basket-modal-bg' ), // modal window of a basket
        orderForm = $( '.to-order' ), // form of the order of goods
        orderFormButton = $( '.to-order-open' ), // button for open/close order form
        rulesBlock = $( '.rules-bl' ), // rules block of the order of tariffs
        rulesCheckbox = rulesBlock.find( '.rules' ), // rules checkbox of the order of tariffs
        rulesButton = $( '.submit-buy' ), // rules button of the order of tariffs
        fSymbol = $( '.photo-f' ), // mask symbol
        owlExercise = $('.owl-exercise'), // slider of exercise machines
        owlPrograms = $( '.programs-bl' ), // slider of programs
        photoSlider = $( '.photo-slider-bl' ); // slider of photo

    $( document ).on( 'ready', function( ) {

        /*----------------------------------------------------*/
        /*	Show/hide panelas (scheduke, news, menu)
        /*----------------------------------------------------*/

        $( 'header' ).on( 'click touch', function( e ) {
            var target = $( e.target );

            if ( target.closest( '.shedule-btn' )[ 0 ] ) {
                body.toggleClass( 'shedule-menu-open' );
            } else if ( target.closest( '.news-btn' )[ 0 ] ) {
                body.toggleClass( 'news-menu-open' );
            } else if ( target .closest( '.mobile-menu-title' )[ 0 ] ) {
                body.toggleClass( 'mobile-menu-open' );
            } else if ( target.closest( '.mobile-shadow' )[ 0 ] || target.closest( '.mobile-shadow-left' )[ 0 ] || target.closest( '.close-menu' )[ 0 ] || target.closest( '#menu-main_nav a' )[ 0 ] ) {
                body.removeClass();
            }
        } );

        /*----------------------------------------------------*/
        /*	Add info on click to Subscription Block
        /*----------------------------------------------------*/

        $( '.tarif-bl' ).on( 'click', '.tariff-price', function( e ) {
            $( '.tariff-price' ).removeClass( 'active' );
            $( this ).addClass( 'active' );

            var tariffIndex = $( this ).index( ),
                monthEqual = $( '.month-columns .month-bl > div' ).filter( '.month-num' ).eq( tariffIndex ).text( ),
                tarifName = $( this ).closest( '.column' ).find( '.price-title span' ).text( );

            $( '.title-description' ).text( tarifName + ' / ' + monthEqual + ' month' );
        } );

        /*----------------------------------------------------*/
        /*	Crop Item Title in the Busket
        /*----------------------------------------------------*/

        basketModal.find( '.basket-item-title' ).each( function( ) {
            var context = $( this ),
                contextText = context.text( );

            if ( contextText.length > 19 ) {
                context.text( contextText.slice( 0, 19 ) + '...' );
            }
        } );

        /*----------------------------------------------------*/
        /*	Open/Close Busket and order form
        /*----------------------------------------------------*/

        $( '.right-bl .num, .right-bl .busket-ico' ).on( 'click touch',  function( ) {
            basketModal.attr( 'style', 'opacity: 1; visibility: visible' );
            windowObj.disablescroll( );
        } );

        basketModal.on( 'click touch', function( e ) {
            var target = e.target;

            if ( target.className === 'close-btn' || target.className === $( this ).context.className ) {
                basketModal.attr( 'style', 'opacity: 0; visibility: hidden' );
                orderForm.removeClass( 'open' );
                orderFormButton.removeClass( 'open' );
                windowObj.disablescroll( 'undo' );
            } else if ( $( target ).closest( '.to-order-open' )[ 0 ] ) {
                orderForm.toggleClass( 'open' );
                $( ".to-order-open" ).toggleClass( 'open' );
            }
        } );

        /*----------------------------------------------------*/
        /*	Item Scroll in the Busket
        /*----------------------------------------------------*/

        $('.item-bl').scrollbar( { disableBodyScroll: true } );

        /*----------------------------------------------------*/
        /*	Circle Player
        /*----------------------------------------------------*/

        var myCirclePlayer = new CirclePlayer( '#jquery_jplayer_1',
        {
            m4a: 'http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a',
            oga: 'http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg'
        }, {
            cssSelectorAncestor : '#cp_container_1',
            swfPath             : '../../dist/jplayer',
            wmode               : 'window',
            keyEnabled          : true
        } );

        var audioTitle = $( '.audio-title' ),
            jplayer = $( '#jquery_jplayer_1' );

        jplayer.on( $.jPlayer.event.play, function( ) {
            audioTitle.text( audioTitle.attr( 'data-title' ) );
        } );

        jplayer.on( $.jPlayer.event.pause, function( ) {
            audioTitle.text( audioTitle.attr( 'data-block' ) );
        } );

        /*----------------------------------------------------*/
        /*	Disabled/Enabled Buy Button in Subscription Block
        /*----------------------------------------------------*/

        rulesCheckbox.on( 'click', function( ){
            $( this ).toggleClass( 'checked' );
            if ( $( this ).hasClass( 'checked' ) ) {
                rulesButton.removeAttr( 'disabled' );
            } else {
                rulesButton.attr( 'disabled', 'disabled' );
            }
        } );

        /*----------------------------------------------------*/
        /*	Animated Scroll To Anchor
        /*----------------------------------------------------*/

        $( '.menu, .buttons' ).find( 'a[href^="/#"]' ).on( 'click', function( e ) {
            e.preventDefault( );

            var target = this.hash,
                $target = $( target );

            $( 'html, body' ).animate( { 'scrollTop': $target.offset( ).top }, 1500 );
        } );

        /*----------------------------------------------------*/
        /*	Slider of exercise machines in About us section
        /*----------------------------------------------------*/

        $( '.simulator-slider' ).slick( {
            slidesToShow    : 1,
            slidesToScroll  : 1,
            infinite        : true,
            vertical        : true,
            autoplay        : true,
            autoplaySpeed   : 3000
        } );

        /*----------------------------------------------------*/
        /*	Slider of exercise in About us section
        /*----------------------------------------------------*/

        owlExercise.owlCarousel( {
            items             : 1,
            loop              : true,
            nav               : true,
            navText           : [],
            paginationNumbers : true,
            onInitialized     : function( e ) {
                $( '.counter' ).text( '1 / ' + this.items( ).length );
            }
        } );

        // Numbering conclusion
        owlExercise.on( 'changed.owl.carousel', function( e ) {
            $( '.counter' ).text( ++e.page.index + ' / ' + e.item.count );
            $( '.footer-title' ).text( owlExercise.find( '.owl-item' ).eq( e.item.index ).children( ).attr( 'data-title' ) );
        } );

        /*----------------------------------------------------*/
        /*	Slider of reviews
        /*----------------------------------------------------*/

        $( '.comment-slider' ).owlCarousel( {
            items               : 1,
            loop                : true,
            nav                 : false,
            dots                : true,
            autoplay            : true,
            autoplayTimeout     : 3000,
            autoplaySpeed       : 1000,
            dotsSpeed           : 1000,
            autoplayHoverPause  : true
        } );

        /*----------------------------------------------------*/
        /*	Slider of programs
        /*----------------------------------------------------*/

        owlPrograms.owlCarousel( {
            items       : 1,
            nav         : true,
            navText     : [],
            margin      : 25,
            dots        : false,
            loop        : true
        } );

        /*var owlProgramsPrev = owlPrograms.find( '.owl-prev' ).addClass( 'disabled' ), // slider of programs left nav
            owlProgramsNext = owlPrograms.find( '.owl-next' ); // slider of programs right nav

        owlPrograms.on( 'changed.owl.carousel', function( event ) {
            owlProgramsPrev.removeClass( 'disabled' );
            owlProgramsNext.removeClass( 'disabled' );
            if ( event.item.index === 0 ) {
                owlProgramsPrev.addClass( 'disabled' );
            }
            if ( event.item.index === event.item.count - 1 ) {
                owlProgramsNext.addClass( 'disabled' );
            }
        } );*/

        /*----------------------------------------------------*/
        /*	Slider of photos
        /*----------------------------------------------------*/

        photoSlider.owlCarousel( {
            items               : 5,
            loop                : true,
            nav                 : true,
            navText             : [],
            navSpeed            : 1000,
            dots                : false,
            autoplay            : false,
            autoplayHoverPause  : true,
            responsive          : {
                0:{
                    items:3
                },
                1200:{
                    items:5
                }
            }
        } );

        // Darken if there is a description
        photoSlider.find( '.photo-item' ).each( function( ) {
            if ( $( this ).find( '.photo-item-info' ).length ) {
                $( this ).addClass( 'has-description' );
            }
        } );

        /*----------------------------------------------------*/
        /*	Slider of goods
        /*----------------------------------------------------*/

        $( '.shop-slider' ).owlCarousel( {
            items               : 3,
            loop                : true,
            nav                 : true,
            dots                : false,
            autoplay            : true,
            autoplayTimeout     : 3000,
            autoplaySpeed       : 2000,
            autoplayHoverPause  : true,
            responsive          : {
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                1024:{
                    items:3
                }
            }
        } );

        /*----------------------------------------------------*/
        /*	Symbol Mask in Programm Block
        /*----------------------------------------------------*/

        fSymbol.each( function( ) {
            $( this ).text( $( this ).parents( '.photo-info-bl' ).find( '.info-bl-title' ).text( ).trim( ).charAt( 0 ) );
            $( this ).css( 'background-image', 'url(' + $( this ).parents( '.programs-slider' ).find( '.image-photo img' ).attr( 'data-rotate' ) + ')' );
        } );

        /*----------------------------------------------------*/
        /*	Lightbox
        /*----------------------------------------------------*/

        lightbox.option( {
            'fadeDuration'          : 50,
            'wrapAround'            : true,
            'showImageNumberLabel'  : false
        } );

        /*----------------------------------------------------*/
        /*	Animation of blocks at the skroll
        /*----------------------------------------------------*/

        function inviewGroup( selector, className ) {
            selector.on( 'inview', function( event, isInView ) {
                if ( isInView ) {
                    $( this ).addClass( 'animated ' + className );
                }
            } );
        };

        inviewGroup( $( '.buy-background-img' ), 'custSlideInLeft' );
        inviewGroup( $( '.in-our-img' ), 'slideInUp' );
        inviewGroup( fSymbol, 'fadeInLeft' );

        /*----------------------------------------------------*/
        /*	Circle Progress in Trainers Block
        /*----------------------------------------------------*/

        function circleProgerssPagam( selector, value, reverse, startAngle, size, thickness, emptyFill, gradient ) {
            $( selector ).circleProgress( {
                value       : value,
                reverse     : reverse,
                startAngle  : startAngle,
                size        : size,
                thickness   : thickness,
                emptyFill   : [ emptyFill ],
                fill        : {
                    gradient: [ gradient ]
                }
            } );
        }

        $( '.about' ).on( 'inview', function( event, isInView ) {
            if ( isInView ) {
                if ( !$( this ).hasClass( 'visible' ) ) {
                    $( this ).addClass( 'visible' );
                    circleProgerssPagam( '.progress-1', 0.75, true, 4.7, 80, 2, 'rgba(0, 0, 0, 0)', '#ffcc2f' );
                    circleProgerssPagam( '.progress-11', 0.25, true, 4.7, 60, 2, 'rgba(0, 0, 0, 0)', '#ffcc2f' );
                    circleProgerssPagam( '.progress-12', 0.50, true, 4.7, 42, 2, 'rgba(0, 0, 0, 0)', '#ffcc2f' );
                    circleProgerssPagam( '.progress-2', 0.65, true, 4.7, 80, 2, 'rgba(0, 0, 0, 0)', '#ffcc2f' );
                    circleProgerssPagam( '.progress-21', 0.50, true, 4.7, 60, 2, 'rgba(0, 0, 0, 0)', '#ffcc2f' );
                    circleProgerssPagam( '.progress-22', 0.75, true, 4.7, 42, 2, 'rgba(0, 0, 0, 0)', '#ffcc2f' );
                    circleProgerssPagam( '.progress-3', 0.50, true, 4.7, 80, 2, 'rgba(0, 0, 0, 0)', '#ffcc2f' );
                    circleProgerssPagam( '.progress-31', 0.30, true, 4.7, 60, 2, 'rgba(0, 0, 0, 0)', '#ffcc2f' );
                    circleProgerssPagam( '.progress-32', 0.25, true, 4.7, 42, 2, 'rgba(0, 0, 0, 0)', '#ffcc2f' );
                }
            }
        } );
    } );

    /*----------------------------------------------------*/
    /*	Hide preloader when page load
    /*----------------------------------------------------*/

    windowObj.on( 'load', function( ) {
        $( '.cssload-loader' ).fadeOut( 'slow' );
        $( '#preloader' ).delay(1000).fadeOut( 'slow' );
    } );

    /*----------------------------------------------------*/
    /*	Google maps
    /*----------------------------------------------------*/

    function initialize( ) {
        var mapOptions = {
            center: { lat: 50.518759, lng: 30.239388 },
            zoom: 15,
            styles: [
                        {
                            "featureType": "all",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "saturation": 36
                                },
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 40
                                }
                            ]
                        },
                        {
                            "featureType": "all",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "visibility": "on"
                                },
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 16
                                }
                            ]
                        },
                        {
                            "featureType": "all",
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 20
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 17
                                },
                                {
                                    "weight": 1.2
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 20
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 21
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 17
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 29
                                },
                                {
                                    "weight": 0.2
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 18
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 16
                                }
                            ]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 19
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 17
                                }
                            ]
                        }
                    ],
            disableDefaultUI: true,
            scrollwheel: false,
            draggable: true
        };

        var map = new google.maps.Map( document.getElementById( 'map-canvas' ), mapOptions );

        // Create marker
        var marker = new google.maps.Marker( {
            position: { lat: 50.518759, lng: 30.239388 },
            map: map,
            title: 'Superset',
            animation: google.maps.Animation.DROP,
            icon: './assets/images/marker.png'
        } );

        // Marker animation
        marker.setAnimation( google.maps.Animation.BOUNCE );
    }

    google.maps.event.addDomListener( window, 'load', initialize );

} ( ) );
