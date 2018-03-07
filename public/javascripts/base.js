'use strict';
(function () {
    //导航滚动
    function winScrollTop() {
        var $banerHeight=$('.scrollHeight').height();
        $(window).scroll(function () {
            var $header=$('#header');
            var scrollTop=$(window).scrollTop();
            if(scrollTop>=($banerHeight-$header.height())){
                // $('#header').css('top',0).addClass('bg');
                $header.addClass('bg');
                if(window.location.pathname.indexOf('aboutus')<0){
                    $header.css('top','0');
                }
            }else{
                $header.removeClass('bg');
                if(window.location.pathname.indexOf('aboutus')<0){
                    $header.css('top','-85px');
                }
            }
        });
    }
    function curpage() {
        if(window.location.search.indexOf('curpage')>0){
            $('html,body').animate({'scrollTop':'640px'});
            $('#header').find('nav').find('a').eq(1).addClass('active').siblings().removeClass('active');
        }
    }
    function start() {
        if(window.location.pathname.indexOf('aboutus')>0){
            $('#header').css('top','0');
        }
        //导航滚动
         winScrollTop();
        curpage();
    }
    return {
        start: start
    }
}()).start();