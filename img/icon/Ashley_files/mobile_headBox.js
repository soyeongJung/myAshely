(function($){

  var openBtn = $('.open_btn');
  var menuBox = $('#menuBox');
  var openArea = $('.open_area');

  openBtn.on('click', ['button'], function(e) {
    e.preventDefault();
    $(this).children().toggleClass('active');
    menuBox.toggleClass('active');
    openArea.toggleClass('active');
  });

  // var menuBox = $('.menu_box');
  var menuBoxDt = $('.menu_box').children('dt');
  var menuSpan = menuBoxDt.children('span')
  // var menuSpan = menuBoxDt.children('span').hasClass('minus');
  var menuBoxDd = $('.menu_box').children('dd');

  menuBoxDt.on('click', function(e) {
    e.preventDefault();

    $(this).next().slideToggle();
    $(this).siblings().next('dd').slideUp();

    var menuHas = $(this).children('span').hasClass('plus');
      console.log(menuHas);

    if(menuHas) {
      $(this).children('span').removeClass('plus');
      $(this).children('span').addClass('minus');
      // $(this).css({color:'#476401', fontWeight:'bold'});
      $(this).css({borderLeft:'1rem solid #fff', boxSizing:'border-box'});
      $(this).siblings('dt').css({borderLeft:'none'});
      $(this).siblings('dt').children('span').removeClass('minus');
      $(this).siblings('dt').children('span').addClass('plus');
    }else{
      $(this).children('span').removeClass('minus');
      $(this).children('span').addClass('plus');
      $(this).css({borderLeft:'none'});
    }

    // if(menuSpan !== true) {
    //   $(this).children('span').removeClass('minus');
    //   $(this).children('span').addClass('plus');
    // }else{
    //   $(this).children('span').removeClass('plus');
    //   $(this).children('span').addClass('minus');
    // }

    var menuBoxH = $('#menuBox').height();
    var h1H = $('h1').parent().height();
    var formH = $('.head_search_box').outerHeight(true);

    var leftHeight = menuBoxH - h1H - formH

    var menuDl = $('.menu_box');

    menuDl.css({height:leftHeight});

  });


























})(this.jQuery);