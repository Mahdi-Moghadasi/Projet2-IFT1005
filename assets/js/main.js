(function($) {

    var $window = $(window),
        $body = $('body'),
        $header = $('#header'),
        $all = $body.add($header);

    // Breakpoints.
    breakpoints({
        xxlarge: ['1681px', '1920px'],
        xlarge: ['1281px', '1680px'],
        large: ['1001px', '1280px'],
        medium: ['737px', '1000px'],
        small: ['481px', '736px'],
        xsmall: [null, '480px']
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Section transitions.
    if (browser.canUse('transition')) {

        var on = function() {

            // Galleries.
            $('.gallery')
                .scrollex({
                    top: '30vh',
                    bottom: '30vh',
                    delay: 50,
                    initialize: function() { $(this).addClass('inactive'); },
                    terminate: function() { $(this).removeClass('inactive'); },
                    enter: function() { $(this).removeClass('inactive'); },
                    leave: function() { $(this).addClass('inactive'); }
                });

            // Generic sections.
            $('.main.style1')
                .scrollex({
                    mode: 'middle',
                    delay: 100,
                    initialize: function() { $(this).addClass('inactive'); },
                    terminate: function() { $(this).removeClass('inactive'); },
                    enter: function() { $(this).removeClass('inactive'); },
                    leave: function() { $(this).addClass('inactive'); }
                });

            $('.main.style2')
                .scrollex({
                    mode: 'middle',
                    delay: 100,
                    initialize: function() { $(this).addClass('inactive'); },
                    terminate: function() { $(this).removeClass('inactive'); },
                    enter: function() { $(this).removeClass('inactive'); },
                    leave: function() { $(this).addClass('inactive'); }
                });

            // Contact.
            $('#contact')
                .scrollex({
                    top: '50%',
                    delay: 50,
                    initialize: function() { $(this).addClass('inactive'); },
                    terminate: function() { $(this).removeClass('inactive'); },
                    enter: function() { $(this).removeClass('inactive'); },
                    leave: function() { $(this).addClass('inactive'); }
                });

        };

        var off = function() {

            // Galleries.
            $('.gallery')
                .unscrollex();

            // Generic sections.
            $('.main.style1')
                .unscrollex();

            $('.main.style2')
                .unscrollex();

            // Contact.
            $('#contact')
                .unscrollex();

        };

        breakpoints.on('<=small', off);
        breakpoints.on('>small', on);

    }

    // Events.
    var resizeTimeout, resizeScrollTimeout;

    $window
        .on('resize', function() {

            // Disable animations/transitions.
            $body.addClass('is-resizing');

            clearTimeout(resizeTimeout);

            resizeTimeout = setTimeout(function() {

                // Update scrolly links.
                $('a[href^="#"]').scrolly({
                    speed: 1500,
                    offset: $header.outerHeight() - 1
                });

                // Re-enable animations/transitions.
                setTimeout(function() {
                    $body.removeClass('is-resizing');
                    $window.trigger('scroll');
                }, 0);

            }, 100);

        })
        .on('load', function() {
            $window.trigger('resize');
        });

})(jQuery);