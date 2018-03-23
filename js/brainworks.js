(function ($) {
    "use strict";

    $(function () {
        console.info('The site developed by BRAIN WORKS digital agency');
        console.info('Сайт разработан маркетинговым агентством BRAIN WORKS');

        var html = $('html');
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if (isMobile) {
            html.addClass('is-mobile');
        }

        html.removeClass('no-js').addClass('js');

        scrollTop('.js-scroll-top');

        // Stick Footer
        var footerHeight = $('.footer').outerHeight() + 20;
        $('.page-wrapper').css('padding-bottom', footerHeight + 'px');

        // Buy one click
        buyOneClick('.one-click', '[data-field-id="field7"]', 'h1.product_title');

    });

    /**
     * Buy in one click
     *
     * @example
     * buyOneClick('.one-click', '[data-field-id="field7"]', 'h1.product_title');
     * @author Fedor Kudinov <brothersrabbits@mail.ru>
     * @param {(string|Object)} button - The selected button when clicking on which the form of purchase pops up
     * @param {(string|Object)} field - The selected field for writing the value
     * @param {(string|Object)} headline - The element from which we get the value to write to the field
     */
    function buyOneClick(button, field, headline) {
        var btn = $(button);
        if (btn.length) {
            btn.on('click', function () {
                $(field).val($(headline).text());
            });
        }
    }

    /**
     * Scroll Top
     *
     * @example
     * scrollTop('.js-scroll-top');
     * @author Fedor Kudinov <brothersrabbits@mail.ru>
     * @param {(string|Object)} element - Selected element
     */
    function scrollTop(element) {
        var el = $(element);

        el.on('click touchend', function () {
            $('html, body').animate({scrollTop: 0}, 'slow');
            return false;
        });

        $(window).on('scroll', function () {
            var scrollPosition = $(this).scrollTop();
            if (scrollPosition > 200) {
                if (!el.hasClass('is-visible')) {
                    el.addClass('is-visible');
                }
            } else {
                el.removeClass('is-visible');
            }
        });
    }

})(jQuery);
