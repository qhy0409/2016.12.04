/**
 * Created by lenovo on 2017/2/22.
 */
$(function () {
    var $Img = $('.banner-picture img');
//console.log($Img.size());
    var iNow = 0;
    $('#next').on('click', function () {
        iNow++;
        if (iNow == $Img.size()) {
            iNow = 0;
        }
        changeImg(iNow);
    });
    $('#prev').on('click', function () {
        iNow--;
        if (iNow == -1) {
            iNow = $Img.size() - 1;
        }
        changeImg(iNow);
    });


    function changeImg(idx) {
        animate($('.banner-picture')[0], {left: -1002 * idx});
        iNow = idx;
    }

    var timer;

    function run() {
        timer = setInterval(function () {
            $('#next').trigger('click');
        }, 2000);
    }

    run();


    $('.carousel').hover(function () {
        clearInterval(timer);
    }, function () {
        run();
    });
})


