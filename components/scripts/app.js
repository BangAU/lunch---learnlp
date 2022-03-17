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

    // scroll to next section
    scrollNextSection()

    // speakers slider
    speakersSlider()

    // circ rotate on scroll
    joinCirc()

    // table wrap
    tableLoadmore()

    // upcoming table
    upcomingTableReadMore()

    smooth_scroll()
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
        headerscrollTop(header)
    })
    headerscrollTop(header)
}

function headerscrollTop(header) {
    if ($(window).scrollTop() > 100) {
        header.addClass('header-sticky');
    } else {
        header.removeClass('header-sticky')
    }
}

function sideNav() {
    const btnTrigger = $('.btn-sidenav'),
        sideNavWrap = $('.sidenav-wrap'),
        sideNavBackdrop = sideNavWrap.find('.sidenav-backdrop');

    btnTrigger.click(function () {
        if (sideNavWrap.hasClass('active')) {
            sideNavWrap.removeClass('active');
            $('html').css('overflowY', '');
        } else {
            sideNavWrap.addClass('active');
            $('html').css('overflowY', 'hidden');
        }
    })

    sideNavBackdrop.click(function () {
        sideNavWrap.removeClass('active');
        $('html').css('overflowY', '');
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
        // console.log(currentHeight)
        // console.log(tableObj)
        // console.log(tableObjHeight)

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
            setTimeout(function () {
                tableWrap.css({
                    height: 'auto'
                })
            }, 750);
        }
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

//smooth scroll JS
function smooth_scroll(){
    $(".navigation a, .navigation ~ a, .sidenav-list a,").on("click", function (e) {
        e.preventDefault();
        const href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
    });
}
