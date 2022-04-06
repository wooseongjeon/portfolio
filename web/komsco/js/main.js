$(function() {

  //올메뉴(햄버거버튼)
  //allmenu_btn을 클릭하면 allmenu_box를 보임
  $('.allmenu_btn').click(function() {
    $('.allmenu_box, .header_util .login').show();
    $('html, body').css({'overflow-y' : 'hidden'});
    $('.allmenu_wrap').addClass('on');
  });
  //close_btn
  $('.allmenu_box .close_btn').click(function() {
    $('.allmenu_box, .header_util .login').hide();
    $('html, body').css({'overflow-y' : 'visible'})
    $('.allmenu_wrap').removeClass('on');
  });
  // $('.allmenu_box .a1>li>a').click(function() {
  //   $(this).next().slideDown()
  // })

  //$('.allmenu_box .a2>li').has('.a3').css('background','red')
  $('.allmenu_box .a1>li').has('ul').addClass('dep1');
  $('.allmenu_box .a2>li').has('ul').addClass('dep2');

  $('.allmenu_box .a1>li>a').click(function() {//.a1>li>a => 1뎁스 a : 전시안내
    //2뎁스 ul이 보임 => .allmenu_box .a2
    //$('.allmenu_box .a2').slideToggle() ==> 모든 2뎁스 ul에게 액션

    // 클릭하지 않은 다른 .a2는 안보임
    //$('.allmenu_box .a2').slideUp() 
    //==> 모든 2뎁스 ul이라는 뜻으로 클릭한 a의 동생을 포함하는 선택자로 up 후에 다시 down이 되기 때문에 토글을 사용하지 못함
    
    // 클릭한 1뎁스 a의 동생이 아닌 a2라는 선택자를 사용
    $('.allmenu_box .a1>li>a').not(this).next().slideUp()
    
    // 클릭한 1뎁스 a의 동생 ul만 액션
    $(this).next().slideToggle(); //up과 down을 번갈아

    $('.dep1>a::before').hide()
  })
  $('.allmenu_box .a2>li>a').click(function() {
    $('.allmenu_box .a2>li>a').not(this).next().slideUp()
    $(this).next().slideToggle()
  })

  
  //팝업
  let s = 0, v, p;
  $('.popup_btn').click(function() {

    if(s == 0) {//보일 때 안보임
      v = 0; //팝업의 높이값과 헤더의 탑 값이 0이 되면 안보임
      p = 2; //키프레임 애니메이션의 번호 (회전 방향)
      s = 1; // 안보이게 설정 후에 다음 클릭에서는 else로 보내주기 위해 상태를 변경
    } 
    else {//안보일때 보이게
      v = 120;  p = 1;  s = 0;
    } 
    
    $('.popup').animate({'height' : v})
    $('header').animate({'top' : v})

    $('.popup_btn img').css({'animation' : 'popup' + p + ' 0.5s forwards'})
  })
  
})//ready()