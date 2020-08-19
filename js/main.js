/*global $ ,jQuery ,alert ,document ,window*/

$(document).ready(function () {
  // carousel
    'use strict';
    $('.carousel').carousel({
        interval: 3000
    });
    // carousel

    // loading
    $(window).load(function () {
        $('.loading-overlay .sk-folding-cube').fadeOut(2000, function () {
            $('body').css('overflow', 'auto');
            $(this).parent().fadeOut(1000, function () {
                $(this).remove();
            });
        });
    });
  // loading

  //scroll top
    var scrollTopBtn = $('#scroll-top');

    $(window).scroll(function () {

        if ($(this).scrollTop() >= 700) {
            scrollTopBtn.show();
        } else {
            scrollTopBtn.hide();
        }


    });
    scrollTopBtn.click(function () {
        $('html,body').animate({scrollTop: 0}, 600);
    });
    //scroll top










});
