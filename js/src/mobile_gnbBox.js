// mobile_gnbBox.js

(function($) {

  var beforeWindowWidth = $(window).width();
  var windowWidth;
  var mob = 480;
  var table = 768;
  var pc = 960;

  var gnbresponsiveWeb = function() {

    if(beforeWindowWidth < pc){
      gnbMob();
      console.log('test');
    }else if(beforeWindowWidth >= pc) {
      gnbPc();
      // gnbMob();
      // console.log('mobile');
    }
  };

function gnbMob(){
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

    shows.siblings().hide();
    
    var showH = showbUl.outerHeight();

    showm.siblings().hide();
    showm.parent().removeAttr('style');
    showmUl.removeAttr('style');
    gnbN.removeAttr('style');

   
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

    shows.siblings().hide();

    var showH = showmUl.outerHeight();

    showb.siblings().hide();
    gnbN.removeAttr('style');
    showbUl.removeAttr('style');

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
  var showsLi = shows.children('li');


  shows.children('a').on('click',function() {
    var _this = $(this).parent('li');
    // console.log(_this);
    var brother = _this.siblings().css('display');
    _this.siblings().children('a').css({'color':'#aaa'});

    showb.siblings().hide();
    showbUl.removeAttr('style');

    showm.siblings().hide();
    showm.parent().removeAttr('style');
    showmUl.removeAttr('style');
    gnbN.removeAttr('style');

    if(brother=='none'){
      _this.siblings().show();
          
    }else{
      // gnbN.removeAttr('style');
      showsLi.removeAttr('style');
      _this.siblings().hide();
    } 

  }); // shows.on

}; // function gnbMob()

// =============================================================


function gnbPc(){
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

    shows.siblings().hide();
    
    var showH = showbUl.outerHeight();

    showm.siblings().hide();
    showm.parent().removeAttr('style');
    showmUl.removeAttr('style');
    gnbN.removeAttr('style');

   
    if(brother=='none'){
          _this.siblings().show();
          // _this.parent().css({position:'relative',zIndex:2000});
    
          // showbUl.css({position:'absolute',left:0});
          _this.children('ul').css({top:mt});
    
          gnbN.css({height:mt+showH});
    }else{
      _this.siblings().hide();
      // _this.parent().removeAttr('style');
      gnbN.removeAttr('style');
      // showbUl.removeAttr('style');
    }

  }); // showb.on

  // showb.children('a').on('blur',function() {
  //   var _this = $(this).parent();
  //   var brother = _this.siblings().css('display');
  //   _this.siblings().children('a').css({'color':'#aaa'});
  //   var bIndex = _this.index();
  //   var mt = gnbliH * (gnbliLength - bIndex);

  //   shows.siblings().hide();
    
  //   var showH = showbUl.outerHeight();

  //   showm.siblings().hide();
  //   showm.parent().removeAttr('style');
  //   showmUl.removeAttr('style');
  //   gnbN.removeAttr('style');

   
  //   if(brother=='none'){
  //         _this.siblings().show();
  //         // _this.parent().css({position:'relative',zIndex:2000});
    
  //         // showbUl.css({position:'absolute',left:0});
  //         _this.children('ul').css({top:mt});
    
  //         gnbN.css({height:mt+showH});
  //   }else{
  //     _this.siblings().hide();
  //     // _this.parent().removeAttr('style');
  //     gnbN.removeAttr('style');
  //     // showbUl.removeAttr('style');
  //   }

  // }); // showb.on


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

    shows.siblings().hide();

    var showH = showmUl.outerHeight();

    showb.siblings().hide();
    gnbN.removeAttr('style');
    // showbUl.removeAttr('style');

    if(brother=='none'){
          _this.siblings().show();
          // _this.parent().css({position:'relative',zIndex:2000});
    
          // showmUl.css({position:'absolute',left:0});
          _this.children('ul').css({top:mt});
    
          gnbN.css({height:mt+showH+showmH});
    }else{
      _this.siblings().hide();
      _this.parent().removeAttr('style');
      // showmUl.removeAttr('style');
      gnbN.removeAttr('style');
    } 

  }); // showm.on

  // showm.children('a').on('blur', function() {
  //  var _this = $(this).parent();
  //   var brother = _this.siblings().css('display');
  //   _this.siblings().children('a').css({'color':'#aaa'});
  //   var bIndex = _this.index();
  //   var mt = showmH * (showmLength - bIndex);

  //   shows.siblings().hide();

  //   var showH = showmUl.outerHeight();

  //   showb.siblings().hide();
  //   gnbN.removeAttr('style');
  //   // showbUl.removeAttr('style');

  //   if(brother=='none'){
  //         _this.siblings().show();
  //         // _this.parent().css({position:'relative',zIndex:2000});
    
  //         // showmUl.css({position:'absolute',left:0});
  //         _this.children('ul').css({top:mt});
    
  //         gnbN.css({height:mt+showH+showmH});
  //   }else{
  //     _this.siblings().hide();
  //     _this.parent().removeAttr('style');
  //     // showmUl.removeAttr('style');
  //     gnbN.removeAttr('style');
  //   } 
  // });

  
  var showsH = showsList.children('a').outerHeight()+2;
  var showsLength = showsList.parent().children().length;

  var shows = $('.shows_list');
  var showsLi = shows.children('li');


  shows.children('a').on('click',function() {
    var _this = $(this).parent('li');
    // console.log(_this);
    var brother = _this.siblings().css('display');
    _this.siblings().children('a').css({'color':'#aaa'});

    showb.siblings().hide();
    // showbUl.removeAttr('style');

    showm.siblings().hide();
    showm.parent().removeAttr('style');
    showmUl.removeAttr('style');
    gnbN.removeAttr('style');

    if(brother=='none'){
      _this.siblings().show();
          
    }else{
      gnbN.removeAttr('style');
      showsLi.removeAttr('style');
      _this.siblings().hide();
    } 

  }); // shows.on

  // shows.children('a').on('blur',function() {
  //   var _this = $(this).parent('li');
  //   // console.log(_this);
  //   var brother = _this.siblings().css('display');
  //   _this.siblings().children('a').css({'color':'#aaa'});

  //   showb.siblings().hide();
  //   // showbUl.removeAttr('style');

  //   showm.siblings().hide();
  //   showm.parent().removeAttr('style');
  //   showmUl.removeAttr('style');
  //   gnbN.removeAttr('style');

  //   if(brother=='none'){
  //     _this.siblings().show();
          
  //   }else{
  //     gnbN.removeAttr('style');
  //     showsLi.removeAttr('style');
  //     _this.siblings().hide();
  //   } 

  // }); // shows.on

}; // function gnbPc()

gnbresponsiveWeb();

$(window).on('resize',function() {
  var gnbresponsiveWeb = $(this).width();
  var re = beforeWindowWidth !== gnbresponsiveWeb;

  if(re){ location.reload(); }
  // gnbresponsiveWeb();

});

})(jQuery);






















