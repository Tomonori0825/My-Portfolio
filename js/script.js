// ハンバーガーメニュー
$(function(){
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});

  // メニューをクリックされたら、非表示にする
$(function(){
    $('#globalMenuSp a').click(function(){
    $('#toggle').trigger( 'click' );
    } );
});

//リンク先のidまでスムーススクロール
$('#gnav-nemu li a').click(function () {
    var elmHash = $(this).attr('href');
    var pos = $(elmHash).offset().top-0;
    $('body,html').animate({scrollTop: pos}, 1000);
    return false;
});

$(function(){
    var topBtn = $('#page-top');
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

// アニメーション
$(function(){
    new WOW().init();
});