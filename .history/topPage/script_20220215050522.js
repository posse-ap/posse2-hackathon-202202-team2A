$('.burger-btn').on('click', function () {//.btn_triggerをクリックすると
    $('.burger-btn').toggleClass('close');//.btn_triggerにcloseクラスを付与(ボタンのアニメーション)
    $('.nav-wrapper').toggleClass('fade');//.nav-wrapperに
    $('body').toggleClass('noscroll');//bodyにnoscrollクラスを付与(スクロールを固定)
});

$(function () {
    var setImg = '#mainImg';
    var fadeSpeed = 1500;
    var switchDelay = 5000;

    $(setImg).children('img').css({ opacity: '0' });
    $(setImg + ' img:first').stop().animate({ opacity: '1', zIndex: '20' }, fadeSpeed);

    setInterval(function () {
        $(setImg + ' :first-child').animate({ opacity: '0' }, fadeSpeed).next('img').animate({ opacity: '1' }, fadeSpeed).end().appendTo(setImg);
    }, switchDelay);
});

$(function () {
    $('.scroll-down').click(function () {
        $('html, body').animate({ scrollTop: $('section.ok').offset().top }, 'slow');
        return false;
    });
});
const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const content = document.querySelector('.hero_content');
const logo = document.querySelector('.hero_logo');

const tl = new TimelineMax();

tl.fromTo(hero, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut})
.fromTo(hero, 1.2, {width: "100%"}, {width: "70%", ease: Power2.easeInOut})
.fromTo(content, 0.5, { opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(logo, 0.5, { opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")



