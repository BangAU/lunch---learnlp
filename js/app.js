var $=jQuery,win=$(window);function scrollDownSection(){$(".scrolldown-arrow").click(function(){})}function headerScroll(){const e=$(".header");$(window).scroll(function(){100<$(window).scrollTop()?e.addClass("header-sticky"):e.removeClass("header-sticky")})}function speakersSlider(){$(".speakers-slider").slick({dots:!0,infinite:!1,speed:300,slidesToShow:1,slidesToScroll:1})}function joinCirc(){var o=$("body").height()-$(window).height();window.onscroll=function(){var e=-window.scrollY*(360/o)*1.5;$(".join-circle img").css({transform:"rotate("+e+"deg)"})}}function tableLoadmore(){const e=$(".upcoming-events-table-wrap"),o=e.height(),n=e.find("table"),s=n.height(),t=e.find(".load-more"),i=t.find("span");t.click(function(){console.log(o),console.log(n),console.log(s),e.hasClass("loaded")?(e.removeClass("loaded"),i.text("load more"),e.animate({height:o},500)):(e.addClass("loaded"),i.text("load less"),e.animate({height:s+160},500))})}function scrollNextSection(){$(".scroll-nextsec").click(function(e){const o=$(this).parents(".section"),n=o.next();$("html, body").stop().animate({scrollTop:n.offset().top-$(".header").height()},1e3),e.preventDefault()})}function sideNav(){const e=$(".btn-sidenav"),o=$(".sidenav"),n=$(".sidenav-backdrop");e.click(function(){o.hasClass("active")?(n.fadeOut(),o.removeClass("active"),$("html").css("overflowY","")):(n.fadeIn(),o.addClass("active"),$("html").css("overflowY","hidden"))}),n.click(function(){n.fadeOut(),o.removeClass("active"),$("html").css("overflowY","")})}function upcomingTableReadMore(){$(".btn-read").click(function(e){e.preventDefault();const o=$(this).siblings("p");o.is(":visible")?(o.slideUp(),$(this).removeClass("less"),$(this).text("read more")):(o.slideDown(),$(this).addClass("less"),$(this).text("read less"))})}function smooth_scroll(){$(".navigation a, .navigation ~ a, .sidenav-list a").on("click",function(e){e.preventDefault();e=$(this).attr("href");$("html, body").animate({scrollTop:$(e).offset().top},800)})}document.addEventListener("DOMContentLoaded",function(){scrollDownSection(),headerScroll(),sideNav(),speakersSlider(),joinCirc(),tableLoadmore(),scrollNextSection(),upcomingTableReadMore(),smooth_scroll()}),win.on("resize",function(){}),AOS.init({once:!0});