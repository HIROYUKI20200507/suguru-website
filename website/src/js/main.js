/** @format */

import "../scss/main.scss";
import "hover.css/scss/hover.scss";
import $ from "jquery";
import Swiper from "swiper/bundle";

// init Swiper:
const swiper = new Swiper();

$(function ($) {
    const fadeIn = $(".fade-in");

    $(window).scroll(function () {
        $(fadeIn).each(function () {
            const offset = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();

            if (scroll > offset - windowHeight + 150) {
                $(this).addClass("scroll-in");
            }
        });
    });

    $(window).scroll(function () {
        const scroll = $(this).scrollTop();
        if (scroll > 500) {
            $("aside").addClass("active");
        } else {
            $("aside").removeClass("active");
        }
    });
});
