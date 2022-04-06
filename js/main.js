$(function() {
  let event, elm = 'section';
  // $(elm).each(function (index) {
  //   // 개별적으로 Wheel 이벤트 적용
  //   $(this).on("mousewheel DOMMouseScroll", function (e) {
  //     e.preventDefault();
  //     let delta = 0;
  //     if (!event) event = window.event;
  //     if (event.wheelDelta) {
  //       delta = event.wheelDelta / 120;
  //       if (window.opera) delta = -delta;
  //     }
  //     else if (event.detail)
  //       delta = -event.detail / 3;
  //     let moveTop = $(window).scrollTop();
  //     let elmSelecter = $(elm).eq(index);
  //     // 마우스휠을 위에서 아래로
  //     if (delta < 0) {
  //       if ($(elmSelecter).next() != undefined) {
  //         try {
  //           moveTop = $(elmSelecter).next().offset().top;
  //         } catch (e) { }
  //       }
  //       // 마우스휠을 아래에서 위로
  //     } else {
  //       if ($(elmSelecter).prev() != undefined) {
  //         try {
  //           moveTop = $(elmSelecter).prev().offset().top;
  //         } catch (e) { }
  //       }
  //     }

  //     // 화면 이동 0.8초(800)
  //     $("html,body").stop().animate({
  //       scrollTop: moveTop + 'px'
  //     }, {
  //       duration: 500, complete: function () {
  //       }
  //     });
  //   });
  // });//each

  // 로딩중~
  // $(window).load(function() {
  //   $('.loader').fadeOut();
  // })
  //홈 스크롤 이벤트
  let navtop = $('nav').offset().top;
  $(window).scroll(function() {
    //메뉴 사이드로

    // if($(window).scrollTop() >= '1000px') {}
    // //$('nav').css({})
    // else {
    //   $('nav').css()
    // }

    //메뉴 섹션별 포인트

    if($(window).scrollTop() >= $('section').eq(0).offset().top) {
      $('#gnb li').css({'border-bottom' : 'none'});
      $('#gnb li a').css({'color' : '#f1f1f1'});
      $('.skill_bar span').css({'animation' : '2s'})
    }
    if($(window).scrollTop() >= $('section').eq(1).offset().top) {
      $('#gnb li').css({'border-bottom' : 'none'});
      $('#gnb li').eq(1).css({'border-bottom' : '2px solid #111'});
      $('#gnb li a').css({'color' : 'black'});
      $('.skill_bar span').css({'animation' : 'bar 2s'})
    }
    if($(window).scrollTop() >= $('section').eq(2).offset().top) {
      $('#gnb li').css({'border-bottom' : 'none'});
      $('#gnb li').eq(2).css({'border-bottom' : '2px solid #111'});
      $('.skill_bar span').css({'animation' : '2s'})
    }
    if($(window).scrollTop() >= $('section').eq(3).offset().top) {
      $('#gnb li').css({'border-bottom' : 'none'});
      $('#gnb li').eq(3).css({'border-bottom' : '2px solid #111'});
    }
  });//scroll

  $('#gnb li').click(function() {
    let n = $(this).index();
    $('html, body').animate({scrollTop : $('section').eq(n).offset().top})
  })//click_section

  //스크롤옵션 1. 한 화면
  // $('section').scroll(function() {
  //   let top = $(this).height();
  //   let point = $(this).scrollTop();
  //   if($(point >= top/2) {

  //   })
  // });

  //스크롤옵션 2. 스크롤 이벤트 코트에 빠지다
  
  // 자기소개
  $('.click_me').click(function() {
    $('.introduce').fadeIn();
  })
  $('.close').click(function() {
    $('.introduce').fadeOut();
  })

  // 포트폴리오 페이지
  // $('.pofol_list li').mouseover(function() {
  //   let n = $(this).index()

  //   $('.pofol_list li .buttons').hide();
  //   $('.pofol_list li .buttons').eq(n).show('slow');
  //   $('.pofol_list li').stop().animate({'width' : '330px', 'padding-left' : '0'});
  //   $('.pofol_list li').eq(n).stop().animate({'width' : '450px', 'padding-left' : '120px'});
  //   $('.pofol_img li').hide();
  //   $('.pofol_img li').eq(n).show();
  // })
  $('.pofol_list li').mouseenter(function() {
    let n = $(this).index();
    $('.pofol_img li').stop().fadeOut();
    $('.pofol_img li').eq(n).stop().fadeIn();
    $('.pofol_list li .sub').hide();
    $('.pofol_list li .sub').eq(n).show();
    $('.pofol_list li').removeClass('point')
    $(this).addClass('point')
  })
})//ready(