
'use strict';
(function () {
    //加入我们
    function scrollTop() {
        if(window.location.search.indexOf('join')>0){
            $('html,body').animate({'scrollTop':'1496px'});
        }
    }
    //选项卡
    function tab() {
        var $accord=$('.accordion'),
            $link=$accord.find('dt').find('a'),
                $content=$accord.find('.content');

        $link.click(function () {
          var $index=$(this).index();
            $(this).addClass('active')
                .siblings().removeClass('active');
            $content.eq($(this).index()).fadeIn()
                .siblings('.content').fadeOut();
        });
    }
    function start() {
        //加入我们
         scrollTop();
        //选项卡
         tab();
    }
    return {
        start: start
    }
}()).start();
