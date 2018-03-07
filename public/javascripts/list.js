
'use strict';
(function () {

    //选项卡
   /* function tab() {
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
    }*/
    function start() {
        //选项卡
        //  tab();
    }
    return {
        start: start
    }
}()).start();
