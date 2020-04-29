import 'scss/main.scss';

import 'img/logo.svg';
import 'img/header/left_scroll.svg';
import 'img/header/right_scroll.svg';
import 'img/icons/arrow-down.svg';
import 'img/icons/arrow.svg';
import 'img/icons/header-mail-img.png';
import 'img/icons/promise-icon.svg';
import 'img/icons/read-more.svg';
import 'img/icons/tickbox.svg';
import 'img/icons-cards/icon-easy-to-use.svg';
import 'img/icons-cards/icon-flower.svg';
import 'img/icons-cards/icon-message.svg';
import 'img/illustrations/illustration.png';
import 'img/illustrations/shape-3.svg';

$(document).ready( function() {
    $('.about__toggle').click(function(event) {
        event.preventDefault();
        console.log('Click!');

        $('.about-content__box').hide();

        var href = $(this).attr('href'); 

        $(href).fadeIn();
    });

    $('.card__read-more-link').click(function(event) {
        event.preventDefault();
        console.log('Click!');

        $('.about-content__box').hide();

        var href = $(this).attr('href'); 

        $(href).fadeIn();
    });

    let windowHeight = $(window).height();

    $(window).scroll(function() {
        if ( $(this).scrollTop() > windowHeight) {
            $('#scrollToTop').fadeIn();
        } else {
            $('#scrollToTop').fadeOut();
        }
    });

    $('#scrollToTop').click( function(event) {
        event.preventDefault();
        $('html').animate({scrollTop: 0}, 800)
    })

});