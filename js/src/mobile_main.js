// mobile_main.js

(function($) {

// banner
//banner 이미지영역
  var beforeWindowWidth = $(window).width();
  var windowWidth;
  var mob = 480;
  var table = 768;
  var pc = 960;

  var responsiveWeb = function() {
   if(beforeWindowWidth < mob) {
      // bannerSlide();
      console.log('mobile');
    }else if(beforeWindowWidth >= mob) {
      bannerSlide();
      console.log('mobile');
    }

    if(beforeWindowWidth < pc){
       chioceBoxSlide();
       dailyBoxSlide();
    }else if(beforeWindowWidth >= pc) {
      console.log('mobile');
    }
  };

function bannerSlide(){ //----------------------------------------
  var bannerBox = $('#bannerBox');

  var bannerUl = $('.banner');
  var bannerLi = bannerUl.children('li');
  // indicator
  var indi = bannerBox.children('.banner_indi');
  var indiLi = indi.children('li');
  // 배너 및 인디케이터 첫요소 복제 후 마지막 요소로 이동
  var bannerClone = bannerLi.first().clone(true);
      bannerLi.last().after(bannerClone);
  var indiClone = indiLi.first().clone(true);
      indiLi.last().after(indiClone);
      bannerLi = bannerUl.children('li');
      indiLi = indi.find('li');

  // 좌, 우 버튼영역
  var btn = $('#arrowBtn');
  var leftBtn = btn.children('button').first();
  var rightBtn = btn.children('button').last();
  // // 자동 슬라이드에 대한 변수 지정
  var myAutoSlide, startSlide, stopSlide;
  var timed = 3000;

  // 가로형 슬라이드 형태로 변경
  bannerBox.css({overflow:'hidden'});
  var bannerLiLength = bannerLi.length;
  bannerUl.css({width:bannerLiLength*100+'%'});
  var bannerW = bannerUl.innerWidth();
  bannerLi.css({float:'left', width:bannerW/bannerLiLength});

  var myIndex = 0;
  var bannerSlideI = function(i) {

    if(i < 0){
        i = bannerLi.length-1;
        bannerUl.stop().css({marginLeft:-i*100+'%'});
        i--;
        bannerUl.stop().animate({marginLeft:-i*100+'%'});

    }
    else if(i >= bannerLi.length-1){
      bannerUl.stop().animate({marginLeft:-i*100+'%'},function() {
      i = 0;
        bannerUl.stop().css({marginLeft:0});
      });
      i=0;
    }else{
      bannerUl.stop().animate({marginLeft:-i*100+'%'});
    }
    indiLi.removeClass('focus');
    var bannerIndex = bannerLi.eq(i);
    indiLi.eq(i).addClass('focus');

    myIndex = i;
    console.log(i);
    return myIndex;
  }; // bannerSlideI

  // 1. indicator 클릭 시 fade효과
  // 첫 indicator, (.focus)
  indiLi.eq(0).addClass('focus');
  indiLi.eq(-1).hide();

  indiLi.on('click', ['button'], function(e) {
    e.preventDefault();
    myIndex = $(this).index();
    console.log(myIndex);
    bannerSlideI(myIndex);
  }); // indiLi.on();

  // 2. 좌,우 버튼을 클릭시 배너의 내용이 나타나게 만들기
  btn.find('button').on('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    var _this = $(this);
    console.log(_this);
    (_this[0] == leftBtn[0]) ? myIndex-- : myIndex++;
    console.log(myIndex);
    bannerSlideI(myIndex);
  }); // btn.find('button').on();

  var startSlide = function() { myAutoSlide = setInterval(function() { rightBtn.trigger('click');}, timed); };
  var stopSlide = function() { clearInterval(myAutoSlide); };
      startSlide();
  bannerBox.on({'mouseenter':stopSlide,'mouseleave':startSlide});

  // bannerBox.find('a').on('focus',function() {stopSlide()});
  bannerBox.find('button').on('focus',function() {stopSlide()});
  bannerBox.find('button').eq(-1).on('blur',function() {startSlide()});
 }; //----------------------------------------

responsiveWeb();

$(window).on('resize',function() {
  var responsiveWeb = $(this).width();
  var re = beforeWindowWidth !== responsiveWeb;

  if(re){ location.reload(); }
  // responsiveWeb();

});


 //----------------------------------------


// #chioceBox

function chioceBoxSlide(){ //----------------------------------------
  var newList = $('.new_list');
  var newListDl = newList.children('dl');
  // var newListDt = newListDl.children('dt');
  // var newListDd = newListDl.children('dd');

  var newBtn = $('.arrow_btn');
  var newBtnLeft = newBtn.find('.new_left');
  var newBtnRight = newBtn.find('.new_right');

  var listBoxL = 0;

  newBtn.children('li').on('click',['button'], function(e) {
    e.preventDefault();
    var _this = $(this).find('button')[0];
    // console.log(_this);

    var docWidth = $(window).width();
  // console.log(docWidth);

  // console.log(_this == newBtnRight[0]);

    newBtnLeft.parent().show();

    if(_this == newBtnRight[0]){
    listBoxL -= docWidth;
    console.log(listBoxL);
    // console.log(-newListDl.width());

      (listBoxL <= -newList.width()) ? listBoxL = -newList.width()+docWidth : listBoxL;
    
    }else if(_this == newBtnLeft[0] && !listBoxL <= 0){
      listBoxL += docWidth; // listBoxL = marginLeft
      // console.log(listBoxL);
    }

    if(listBoxL == 0){
      console.log(listBoxL);
      newBtnLeft.css({display:'none'});
      newBtnRight.css({display:'block'});
    }else if(listBoxL <= 0) {
      newBtnLeft.css({display:'block'});
    }

    // console.log(-newList.width()+docWidth);

    if(listBoxL == (-newList.width()+docWidth)){
      newBtnRight.css({display:'none'});
    }else if(listBoxL > (-newList.width()+docWidth) && listBoxL<0) {
      newBtnRight.css({display:'block'});
    }

    newList.stop().animate({marginLeft:listBoxL + 'px'});

  }); //newBtn.children('li').on
}; // function chioceBoxSlide()


  // #dailyBox
function dailyBoxSlide(){ //----------------------------------------
  var snsList = $('.sns_list');
  var snsListLi = snsList.children('li'); 

  var snsBtn = $('.arrow_btn');
  var snsBtnLeft = snsBtn.find('.sns_left');
  var snsBtnRight = snsBtn.find('.sns_right');

  var snsBoxL = 0;

  snsBtn.children('li').on('click',['button'], function(e) {
    e.preventDefault();
    var _this = $(this).find('button')[0];
    // console.log(_this);

    var docWidth = $(window).width();
  // console.log(docWidth);

  // console.log(_this == snsBtnRight[0]);

    snsBtnLeft.parent().show();

    if(_this == snsBtnRight[0]){
    snsBoxL -= docWidth;
    console.log(snsBoxL);
    // console.log(-snsListLi.width());

      (snsBoxL <= -snsList.width()) ? snsBoxL = -snsList.width()+docWidth : snsBoxL;
    
    }else if(_this == snsBtnLeft[0] && !snsBoxL <= 0){
      snsBoxL += docWidth; // snsBoxL = marginLeft
      // console.log(snsBoxL);
    }

    if(snsBoxL == 0){
      snsBtnLeft.css({display:'none'});
    }else if(snsBoxL <= 0) {
      snsBtnLeft.css({display:'block'});
    }

    // console.log(-snsList.width()+docWidth);

    if(snsBoxL == (-snsList.width()+docWidth)){
      snsBtnRight.css({display:'none'});
    }else if(snsBoxL > (-snsList.width()+docWidth) && snsBoxL<0) {
      snsBtnRight.css({display:'block'});
    }

    snsList.stop().animate({marginLeft:snsBoxL + 'px'});

  }); //snsBtn.children('li').on
}; // function dailyBoxSlide()




})(this.jQuery);



















