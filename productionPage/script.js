// NAV の色変更
$(document).on('click', 'ul li', function() {
  $(this).addClass('active').siblings().removeClass('active');
})

const cards = document.querySelectorAll('.memory_card');

let has_flipped_card = false;
let lock_board = false;
let first_card, second_card;

function flipCard() {
  if (lock_board) return;
  if (this === first_card) return;

  this.classList.add('flip');

  if (!has_flipped_card) {
    // first click
    has_flipped_card = true;
    first_card = this;

    return;
  } else {
    // second click;
    second_card = this;

    check_for_match();
  } 
}

function check_for_match() {
  // // カードはペアになっている？
  // if (first_card.dataset.framework === second_card.dataset.framework) {
  //   // はい
  //   disable_cards();
  // } else {
  //   // いいえ
  //   unflip_cards();

  let is_match = first_card.dataset.framework === second_card.dataset.framework;
  is_match ? disable_cards() : unflip_cards();
  }

  

function disable_cards() {
  first_card.removeEventListener("click", flipCard);
  second_card.removeEventListener("click", flipCard);

  reset_board();
}

function unflip_cards() {
  lock_board = true;

  setTimeout(() => {
    first_card.classList.remove('flip');
    second_card.classList.remove('flip');

    reset_board();
  }, 1500);
}

function reset_board() {
  has_flipped_card = false;
  lock_board = false;
  first_card = null;
  second_card = null;
}

// 外をかっこで括ることですぐに呼ばれるらしい！！
(function shuffle() {
  cards.forEach( card => {
    let random = Math.floor(Math.random() * 12);
    card.style.order = random;
  })
})();

cards.forEach( card => card.addEventListener("click", flipCard)) 


