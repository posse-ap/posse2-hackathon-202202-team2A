// NAV の色変更
$(document).on('click', 'ul li', function() {
  $(this).addClass('active').siblings().removeClass('active');
})