(function($){

  var beforeWindowWidth = $(window).width();
  var windowWidth;
  var mob = 480;
  var table = 768;
  var pc = 960;

  var headresponsiveWeb = function() {

    if(beforeWindowWidth < pc){
      openBtn();
      console.log('test');
    }else if(beforeWindowWidth >= pc) {
      gnbBtn();
      // console.log('mobile');
    }
  };

function openBtn(){
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

    var menuBoxH = $('#menuBox').height();
    var h1H = $('h1').parent().height();
    var formH = $('.head_search_box').outerHeight(true);

    var leftHeight = menuBoxH - h1H - formH

    var menuDl = $('.menu_box');

    menuDl.css({height:leftHeight});

  });

}; // function openBtn()


function gnbBtn(){
  var menuBox = $('#menuBox');
  var openArea = $('.open_area');
  var gnbMenuBtn = $('.menu_box');
  var gnbMenuBtnDt = gnbMenuBtn.children('dt');
  var gnbMenuBtnDd = gnbMenuBtn.children('dd');
  var timed = 800;

    gnbMenuBtnDd.hide();

    gnbMenuBtnDt.css({position:'relative', zIndex:100});
    openArea.css({height:'auto'});
    // gnbDt올렸을때 gnbDd보이기
    gnbMenuBtnDt.on('click', function(e) {
      e.preventDefault(); 

      menuBox.addClass('active');
      $(this).siblings().css({borderBottom:0});
      $(this).css({borderBottom:'3px solid #fff'});

      gnbMenuBtnDd.slideDown();
    });

    menuBox.on('mouseleave', function(e) {
      menuBox.removeClass('active');
      gnbMenuBtnDd.slideUp();
      gnbMenuBtnDt.css({borderBottom:0});
    });
    gnbMenuBtnDd.last().find('a').last().on('blur', function(e) {
      menuBox.removeClass('active');
      gnbMenuBtnDd.slideUp();
    });

  }; // function gnbBtn()

headresponsiveWeb();

$(window).on('resize',function() {
  var headresponsiveWeb = $(this).width();
  var re = beforeWindowWidth !== headresponsiveWeb;

  if(re){ location.reload(); }
  // headresponsiveWeb();
});


























})(this.jQuery);