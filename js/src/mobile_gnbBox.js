// mobile_gnbBox.js

(function($) {

  var vt = $('.viewPage').text();
  var arr = vt.split('.');
  console.log(arr);

  var gnbN = $('.gnb_nav');
  gnbN.children('li').removeClass('showb_list');
  gnbN.children('li').children('ul').children('li').removeClass('showm_list');
  gnbN.children('li').children('ul').children('li').children('ul').children('li').removeClass('shows_list');

  gnbN.children('li').eq(arr[0]).addClass('showb_list');
  var showbList = gnbN.children('.showb_list');
  showbList.children('ul').children('li').eq(arr[1]).addClass('showm_list');
  showbList.children('a').attr('href','#');
  var showmList = showbList.children('ul').children('.showm_list');
  showmList.children('ul').children('li').eq(arr[2]).addClass('shows_list');
  showmList.children('a').attr('href','#');
  var showsList = showmList.children('ul').children('.shows_list');
  showsList.children('a').attr('href','#');

  showbList.prependTo(gnbN);


  var gnbliH = showbList.children('a').outerHeight()+2;
  var gnbliLength = gnbN.children().length;


  var showb = $('.showb_list');
  var showbUl = showb.children('ul');

  showb.children('a').on('click',function() {
    var _this = $(this).parent();
    var brother = _this.siblings().css('display');
    _this.siblings().children('a').css({'color':'#aaa'});
    var bIndex = _this.index();
    var mt = gnbliH * (gnbliLength - bIndex);
    var showH = showbUl.outerHeight();

    showm.siblings().hide();
    showm.parent().removeAttr('style');
    showmUl.removeAttr('style');
    gnbN.removeAttr('style');

    shows.siblings().hide();
   
    if(brother=='none'){
          _this.siblings().show();
          _this.parent().css({position:'relative',zIndex:2000});
    
          showbUl.css({position:'absolute',left:0});
          _this.children('ul').css({top:mt});
    
          gnbN.css({height:mt+showH});
    }else{
      _this.siblings().hide();
      // _this.parent().removeAttr('style');
      gnbN.removeAttr('style');
      showbUl.removeAttr('style');
    }

  }); // showb.on


  var showmH = showmList.children('a').outerHeight()+2;
  var showmLength = showmList.parent().children().length;
console.log(showmLength);

  var showm = $('.showm_list');
  var showmUl = showm.children('ul');

  showm.children('a').on('click',function() {
    var _this = $(this).parent();
    var brother = _this.siblings().css('display');
    _this.siblings().children('a').css({'color':'#aaa'});
    var bIndex = _this.index();
    var mt = showmH * (showmLength - bIndex);
    var showH = showmUl.outerHeight();

    showb.siblings().hide();
    gnbN.removeAttr('style');
    showbUl.removeAttr('style');

    shows.siblings().hide();

    if(brother=='none'){
          _this.siblings().show();
          _this.parent().css({position:'relative',zIndex:2000});
    
          showmUl.css({position:'absolute',left:0});
          _this.children('ul').css({top:mt});
    
          gnbN.css({height:mt+showH+showmH});
    }else{
      _this.siblings().hide();
      _this.parent().removeAttr('style');
      showmUl.removeAttr('style');
      gnbN.removeAttr('style');
    } 

  }); // showm.on

  
  var showsH = showsList.children('a').outerHeight()+2;
  var showsLength = showsList.parent().children().length;

  var shows = $('.shows_list');
  // var showsUl = shows.siblings('li');


  shows.children('a').on('click',function() {
    var _this = $(this).parent('li');
    // console.log(_this);
    var brother = _this.siblings().css('display');
    _this.siblings().children('a').css({'color':'#aaa'});
    // var bIndex = _this.index();
    // var mt = showsH * (showsLength - bIndex);
    // var showH = shows.siblings().outerHeight();
    // var showH = _this.siblings().outerHeight();

    showb.siblings().hide();
    gnbN.removeAttr('style');
    showbUl.removeAttr('style');

    showm.siblings().hide();
    showm.parent().removeAttr('style');
    showmUl.removeAttr('style');
    gnbN.removeAttr('style');
   
    if(brother=='none'){
      _this.siblings().show();
          
    }else{
      gnbN.removeAttr('style');
      _this.siblings().hide();
    } 

  }); // shows.on

})(jQuery);






















