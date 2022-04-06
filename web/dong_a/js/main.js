$(function() {
  //검색
  $('.btn_search').click(function() {
    $('.search_bg').show()
  });
  $('.search_close').click(function() {
    $('.search_bg').hide()
  });
  //gnb
  $('#gnb').hover(function() {
    $('header').stop().animate({'height' : '350px'})
    $('#gnb ul').stop().fadeIn();
  }, function() {
    $('#gnb ul').stop().fadeOut();
    $('header').stop().animate({'height': '92px'})
  })
  //비주얼 버튼
  $('.dot').click(function() {
    let n = $(this).index()
    $('.control button').removeClass('on')
    $(this).addClass('.dot on')
    $('.web_img li').hide()
    $('.web_img li').eq(n).fadeIn()
  })

  //동아제품 슬릭
  let pp = {
    autoplay : true,
    slidesToShow : 4,
    appendArrows :  $('.prod_main'),
    responsive : [{
      breakpoint : 1280,
      settings : {
        slidesToShow : 3
      }
    },{
      breakpoint : 630,
      settings : {
        slidesToShow : 2
      }
    }]
  }
  let a = 1;
  let q = $('.pro_' + a + ' ul');
  q.slick(pp)

  $('.product_list li').click(function() {
    $('.product_list li').removeClass('tab_on')
    $(this).addClass('tab_on')

    a = $(this).index() + 1;
    $('.pro_list>div').hide()
    $('.pro_' + a).show()

    q = $('.pro_' + a + ' ul');
    q.slick(pp)
  })
  //동아 스페셜 가이드 슬릭
  let nn = {
    autoplay : true,
    slidesToShow : 4,
    appendArrows :  $('.guide_main'),
    responsive : [{
      breakpoint : 1280,
      settings : {
        slidesToShow : 3
      }
    },{
      breakpoint : 630,
      settings : {
        slidesToShow : 2
      }
    }]
  }
  $('.guide_list').slick(nn)
  //window.alert(nn)
  // let b = $('.guide_sub').width() / 4;
  // let a = $('.guide_sub li').width();
  // let cnt = $('.guide_sub li').length;
  // alert(a)
  // $('.guide_sub li').css({'width' : b})
  // $('.guide_sub ul').css({'width' : a * cnt + 100})
  // $('.slick-prev').append('<img src="img/arrow_prev.gif" alt="이전">')

  //모바일 사업자정보확인
  $('.mob_address').click(function() {
    $('address').toggle();
  })

  let allmenu_url = $('.allmenu_wrap').attr('href'); //http://www.naver.com

  $('.allmenu_wrap').click(function() {
    $('.mo_gnb_bg').show();
    
    if($(window).width() < 1280) {$(this).attr('href', '#');$('#gnb').off();}
    else {$(this).attr('href', allmenu_url);}
  })

  $('.mo_ddd button').click(function() {
    $('.mo_gnb_bg').hide();
  })
  
  // $(window).resize(function() {
  //   document.location.reload();
  // })

  //console.log($('h1').find('img').attr('src'))
  //$('h1').find('img').attr('src', 'img/about_icon01.gif')
})//ready()