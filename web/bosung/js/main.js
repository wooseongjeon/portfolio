$(function() {
  
  //gnb
  $('.gnb .g1>li>a').hover(function() {
    $(this).next().show();
    $('nav').append('<div class="gnb_bg"></div>')
  }, function() {
    $('.gnb .g2').hide();
    $('.gnb_bg').remove()
  })

  $('.gnb .g1>li>a').off()//모바일 디바이스에서는 hover 액션을 사용하지 않음


  //mobile gnb
  $('.mo_gnb_btn').click(function() {
    $('header nav').toggle()
  })
})//ready()