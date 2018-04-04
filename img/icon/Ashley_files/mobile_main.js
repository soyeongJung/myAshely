// mobile_main.js

(function($) {

// #chioceBox
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
      newBtnLeft.css({display:'none'});
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


  // #dailyBox
  var snsList = $('.sns_list');
  var snsListLi = snsList.children('li'); 

  var snsBtn = $('.arrow_btn');
  var snsBtnLeft = snsBtn.find('.sns_left');
  var snsBtnRight = newBtn.find('.sns_right');


  var snsBoxL = 0;

  newBtn.children('li').on('click',['button'], function(e) {
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


})(this.jQuery);


















