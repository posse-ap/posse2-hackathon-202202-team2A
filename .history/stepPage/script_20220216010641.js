//線が伸びるための設定を関数でまとめる
function ScrollTimelineAnime() {
    $('.timeline li').each(function () {// それぞれのli要素の
        var elemPos = $(this).offset().top;// 上からの高さ取得
        var scroll = $(window).scrollTop();// スクロール値取得
        var windowHeight = $(window).height();// windowの高さ取得
        var startPoint = 100; //線をスタートさせる位置を指定※レイアウトによって調整してください
        if (scroll >= elemPos - windowHeight - startPoint) {
            var H = $(this).outerHeight(true)//liの余白と高さを含めた数値を取得
            //スクロール値から要素までの高さを引いた値を、liの高さの半分のパーセントで出す
            var percent = (scroll + startPoint - elemPos) / (H / 2) * 100;//liの余白と高さの半分で線を100％に伸ばす

            // 100% を超えたらずっと100%を入れ続ける
            if (percent > 100) {
                percent = 100;
            }
            // ボーダーの長さをセット
            $(this).children('.border-line').css({
                height: percent + "%", //CSSでパーセント指定
            });
        }
    });
}


// 画面をスクロールをしたら動かしたい場合の記述
$(window).on('scroll', function () {
    ScrollTimelineAnime();// 線が伸びる関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    ScrollTimelineAnime();// 線が伸びる関数を呼ぶ
});






$(function () {
    const fade_bottom = 50; // 画面下からどの位置でフェードさせるか(px)
    const fade_move = 100; // どのぐらい要素を動かすか(px)
    const fade_time = 800; // フェードの時間(ms)
    // フェード前のcssを定義
    $(".scroll-fade-side").css({
        opacity: 0,
        transform: "translateX(" + fade_move + "px)",
        transition: fade_time + "ms",
    });
    // スクロールまたはロードするたびに実行
    $(window).on("scroll load", function () {
        const scroll_top = $(this).scrollTop();
        const scroll_bottom = scroll_top + $(this).height();
        const fade_position = scroll_bottom - fade_bottom;
        $(".scroll-fade-side").each(function () {
            const this_position = $(this).offset().top;
            if (fade_position > this_position) {
                $(this).css({
                    opacity: 1,
                    transform: "translateX(0)",
                });
            }
        });
    });
});


$(function () {
    const fade_bottom = 50; // 画面下からどの位置でフェードさせるか(px)
    const fade_move = 100; // どのぐらい要素を動かすか(px)
    const fade_time = 800; // フェードの時間(ms)
    // フェード前のcssを定義
    $(".scroll-fade-side2").css({
        opacity: 0,
        transform: "translateX(-" + fade_move + "px)",
        transition: fade_time + "ms",
    });
    // スクロールまたはロードするたびに実行
    $(window).on("scroll load", function () {
        const scroll_top = $(this).scrollTop();
        const scroll_bottom = scroll_top + $(this).height();
        const fade_position = scroll_bottom - fade_bottom;
        $(".scroll-fade-side2").each(function () {
            const this_position = $(this).offset().top;
            if (fade_position > this_position) {
                $(this).css({
                    opacity: 1,
                    transform: "translateX(0)",
                });
            }
        });
    });
});

let img = document.getElementById('step_img');

img.addEventListener('mouseover', function () {
    let img = document.getElementById('step_img');
    let sentence = document.getElementById('sentence');
    img.style.display = "none";
    sentence.style.display = 'block';
})


sub.addEventListener('mouseleave', function () {
    let sub = document.getElementById('sub');
    let sub1 = document.getElementById('sub1');
    sub.style.visibility = "hidden";
    sub1.style.display = 'block';
}
)