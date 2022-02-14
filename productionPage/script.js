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