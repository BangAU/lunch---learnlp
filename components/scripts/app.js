var $ = jQuery;
var win = $(window);

'use strict';

document.addEventListener('DOMContentLoaded', function () {
    // call functions here
    // scroll down 
    scrollDownSection()

    // header on scroll
    headerScroll()

    // sidenav toggle
    sideNav()

    // speakers slider
    speakersSlider()

    // circ rotate on scroll
    joinCirc()

    // table wrap
    tableLoadmore()

    // scroll to next section
    scrollNextSection()

    // upcoming table
    upcomingTableReadMore()
});

//function called on window resize
win.on('resize', function () {});


/*****  Declare your functions here  ********/

AOS.init({
    once: true,
});


function scrollDownSection() {
    $('.scrolldown-arrow').click(function () {

    })
}

function headerScroll() {
    const header = $('.header');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            header.addClass('header-sticky');
        } else {
            header.removeClass('header-sticky')
        }
    })
}

function speakersSlider() {
    $('.speakers-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
}

function joinCirc() {
    var bodyHeight = $("body").height() - $(window).height();
    window.onscroll = function () {

        //Determine the amount to rotate by.
        var deg = (-window.scrollY * (360 / bodyHeight)) * 1.5;

        $('.join-circle img').css({
            "transform": "rotate(" + deg + "deg)",
        });

    };
}

function tableLoadmore() {
    const tableWrap = $('.upcoming-events-table-wrap'),
        currentHeight = tableWrap.height(),
        tableObj = tableWrap.find('table'),
        tableObjHeight = tableObj.height(),
        loadBtn = tableWrap.find('.load-more'),
        insideText = loadBtn.find('span');

    loadBtn.click(function () {
        console.log(currentHeight)
        console.log(tableObj)
        console.log(tableObjHeight)

        if (tableWrap.hasClass('loaded')) {
            tableWrap.removeClass('loaded');
            insideText.text('load more');
            tableWrap.animate({
                height: currentHeight
            }, 500)
        } else {
            tableWrap.addClass('loaded');
            insideText.text('load less');
            tableWrap.animate({
                height: (tableObjHeight + 160)
            }, 500)
        }
    })
}

function scrollNextSection() {
    $(".scroll-nextsec").click(function (event) {
        const parentSection = $(this).parents('.section'),
            nextSection = parentSection.next();

        $('html, body')
            .stop()
            .animate({
                    scrollTop: nextSection.offset().top - $('.header').height(),
                },
                1000
            );
        event.preventDefault();
    });
}

function sideNav() {
    const btnTrigger = $('.btn-sidenav'),
        sideNav = $('.sidenav'),
        sideNavBackdrop = $('.sidenav-backdrop');

    btnTrigger.click(function () {
        if (sideNav.hasClass('active')) {
            sideNavBackdrop.fadeOut()
            sideNav.removeClass('active');
            $('html').css('overflowY', '');
        } else {
            sideNavBackdrop.fadeIn()
            sideNav.addClass('active');
            $('html').css('overflowY', 'hidden');
        }
    })

    sideNavBackdrop.click(function () {
        sideNavBackdrop.fadeOut()
        sideNav.removeClass('active');
        $('html').css('overflowY', '');
    })
}

function upcomingTableReadMore() {
    $('.btn-read').click(function (event) {
        event.preventDefault();
        const siblingContent = $(this).siblings('p');

        if (siblingContent.is(':visible')) {
            siblingContent.slideUp();
            $(this).removeClass('less')
            $(this).text('read more');
        } else {
            siblingContent.slideDown();
            $(this).addClass('less');
            $(this).text('read less');
        }
    })
}