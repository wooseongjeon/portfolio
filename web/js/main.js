$(function() {
  //홈 화면 스크롤 이벤트
  let elm = '#home', event;
  $(elm).on("mousewheel DOMMouseScroll", function (e) {
    e.preventDefault();
    let delta = 0;
    if (!event) event = window.event;
    if (event.wheelDelta) {
      delta = event.wheelDelta / 120;
      if (window.opera) delta = -delta;
    }
    else if (event.detail)
      delta = -event.detail / 3;
    let moveTop = $(window).scrollTop();
    let elmSelecter = $(elm).eq(0);
    // 마우스휠을 위에서 아래로
    if (delta < 0) {
      if ($(elmSelecter).next() != undefined) {
        try {
          moveTop = $(elmSelecter).next().offset().top;
        } catch (e) { }
      }
      // 마우스휠을 아래에서 위로
    } else {
      if ($(elmSelecter).prev() != undefined) {
        try {
          moveTop = $(elmSelecter).prev().offset().top;
        } catch (e) { }
      }
    }

    // 화면 이동 0.8초(800)
    $("html,body").stop().animate({
      scrollTop: moveTop + 'px'
    }, {
      duration: 500, complete: function () {
      }
    });
  });

  //GNB
  $('#gnb li').click(function() {
    let n = $(this).index()
    $('html, body').animate({
      scrollTop : $('section').eq(n).offset().top
    })
  })

  //GNB 스타일 변경
  if($(window).scrollTop() >= $('#about').offset().top) {
    $('header').addClass('bg_on')
  }
  if($(window).scrollTop() < $('#about').offset().top) {
    $('header').removeClass('bg_on')
  }
  $(window).scroll(function() {
    if($(window).scrollTop() >= $('#about').offset().top) {
      $('header').addClass('bg_on')
    }
    if($(window).scrollTop() < $('#about').offset().top) {
      $('header').removeClass('bg_on')
    }
  })

  //Web Work
  const swiper = new Swiper('.web_swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true, 
    effect: 'cards',
    // If we need pagination
    pagination: {
      el: '.web_pagination',
      type: 'fraction',
    },  
    // Navigation arrows
    navigation: {
      nextEl: '.web_next',
      prevEl: '.web_prev',
    },  
    // And if we need scrollbar
    scrollbar: {
      el: '.web_scrollbar',
    },
  });
  
  //Graphic Tabs
  $('#work2 .tabs li').click(function() {
    $(this).addClass('on')
    $('#work2 .tabs li').not(this).removeClass('on');
    
    let gname = $(this).attr('class').substr(0,2);
    //window.alert(gname)
    //$('.work_thumb li').hide();
    //$('.work_thumb .' + gname).show();
  });
  $('#work2 .work_thumb li').hover(function() {
    $(this).find('span').fadeIn();
  }, function() {
    $(this).find('span').fadeOut()
  })
  //$('.work_thumb').isotope({});
  let graphic = $('.work_thumb').isotope()

  $('#work2 .tabs li').click(function() {
    let val = $(this).attr('data-filter');
    graphic.isotope({
      filter : val
    })
  })

  lightbox.option({
    fitImagesInViewport : false,
    positionFromTop : 100
  })
})//ready()
