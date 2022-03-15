var $ = jQuery;
var win = $(window);

'use strict';

document.addEventListener('DOMContentLoaded', function () {
    // call functions here
    // scroll down 
    scrollDownSection()

    // header on scroll
    headerScroll()

    // speakers slider
    speakersSlider()

    // circ rotate on scroll
    joinCirc()

    // table wrap
    tableLoadmore()
});

//function called on window resize
win.on('resize', function () {});


/*****  Declare your functions here  ********/

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
        var deg = (-window.scrollY * (360 / bodyHeight)) / 2.5;

        $('.join-circle').css({
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