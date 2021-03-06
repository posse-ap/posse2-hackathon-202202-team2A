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

// NAV の色変更
$(document).on('click', 'ul li', function() {
    $(this).addClass('active').siblings().removeClass('active');
})


// ANIMATIONS FOR TOP SECTION

const image = document.querySelector('.top_image');
const slider = document.querySelector('.slider');
const content = document.querySelector('.top_content');
const logo = document.querySelector('.top_logo');

const tl = new TimelineMax();

tl.fromTo(image, 1, {height: "0%"}, {height: "90%", ease: Power2.easeInOut})
.fromTo(image, 1.2, {width: "100%"}, {width: "70%", ease: Power2.easeInOut})
.fromTo(content, 0.5, { opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(logo, 0.5, { opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")




const countdown = () => {
    const count_date = new Date('February 18, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = count_date - now;

    // ミリ秒を色々な単位に変換
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // 計算
    const text_day = Math.floor(gap / day);
    // (gap % day) は gap を day で割ってそのあまりを出力
    const text_hour = Math.floor((gap % day) / hour);
    const text_minute = Math.floor((gap % hour) / minute);
    const text_second = Math.floor((gap % minute) / second);


    document.querySelector('.day').innerText = text_day;
    document.querySelector('.hour').innerText = text_hour;
    document.querySelector('.minute').innerText = text_minute;
    document.querySelector('.second').innerText = text_second;

}

setInterval(countdown, 1000);

// 選択肢の配列と選択肢群
let No1Selection = ['B, 基本的に変わらない。','A,いつでも出来る。','C, 年度ごとに組み直す。']
let No2Selection = ['C, 人数が増えたら今後増える。','B, 人数が増えたら今後増やすか考える。','A 基本的にない。']
let No3Selection = ['B, 時々ある。','A, 全くない。','C, 頻繁にある。']
let Selections   = [No1Selection,No2Selection,No3Selection]

let questions = ['POSSE①②を変えることってできるの？','POSSE③など今後増えることもあるの？','POSSE①と②の接点はどのくらいあるの？']

let comment = ['正解は「B 基本的に変わらない」です。固定されているからこそ、お互いの理解が深まり信頼関係ができます！']

//ボタンシャッフルのための配列
let button = ['0','1','2']

// 本文
for(let count = 0; count < 3; count++){
    for(i = button.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = button[i];
        button[i] = button[j];
        button[j] = tmp;
    }
    let content=
        '<div class="content">' +
        '<div class="question"><p>' +(count+1)+`. ${questions[count]}</p></div>`+
        // Pictures[count] + '<br>'+
        '<button onclick="Judgment('+count+','+button[0]+')" class= "before" id="No' + (count+1) +'Answer'+button[0]+'"><div id="No'+(count+1)+button[0]+'"></div></button><br>' +
        '<button onclick="Judgment('+count+','+button[1]+')" class= "before" id="No' + (count+1) +'Answer'+button[1]+'"><div id="No'+(count+1)+button[1]+'"></div></button><br>' +
        '<button onclick="Judgment('+count+','+button[2]+')" class= "before" id="No' + (count+1) +'Answer'+button[2]+'"><div id="No'+(count+1)+button[2]+'"></div></button><br>' +
        '<div class="nothing" id="No' +(count+1)+'CommentBlue">' + 
            '<span class="blue-line">正解！</span><br>' +
            '<div id="No' +(count+1)+'CommentTrue"></div>' +
        '</div>' +
        '<div class="nothing" id="No' +(count+1)+'CommentRed">' +
            '<span class="red-line">不正解！</span><br>' +
            '<div id="No' +(count+1)+'CommentFalse"></div>' +
        '</div><br>' +
        '</div>';

    let content2 = document.getElementById('section_quiz');
    content2.insertAdjacentHTML("beforeend", content);

        
}
    // 選択肢の名称
for(let n = 0; n < 10; n++){
    for(let i=0; i<No1Selection.length; i++){
        target = document.getElementById('No'+(n+1)+i)
        target.innerHTML = Selections[n][i]
    }}
    // 正解、不正解のコメント
for(let e = 0; e < 10; e++){
    comment1 =document.getElementById('No' + (e+1) + 'CommentTrue')
    comment1.innerHTML ="正解は「"+Selections[e][0]+"」です！"
    comment2= document.getElementById('No' + (e+1) + 'CommentFalse')
    comment2.innerHTML ="正解は「"+Selections[e][0]+"」です！"
    }
    
    function Judgment(Number,clicked){
        document.getElementById('No'+(Number+1)+'Answer'+clicked).className = 'incorrect';
        document.getElementById('No'+(Number+1)+'Answer0').className = 'correct';
        document.getElementById('No'+(Number+1)+'Answer0').classList.add('after');
        document.getElementById('No'+(Number+1)+'Answer1').classList.add('after');
        document.getElementById('No'+(Number+1)+'Answer2').classList.add('after');
        if(Selections[Number][0] === document.getElementById('No'+(Number+1)+'Answer'+clicked).textContent){
        document.getElementById('No'+(Number+1)+'CommentBlue').className = 'comment';
        }
        else{
        document.getElementById('No'+(Number+1)+'CommentRed').className = 'comment';
    }
    }


