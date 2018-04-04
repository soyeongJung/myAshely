// customer.js

(function($) {

  // ==========category===============
  var allType = $('#allType');
  var allTypeLabel = $('label[for="allType"]');
  var serviceType = $('#serviceType');
  var serviceTypeLabel = $('label[for="serviceType"]');
  var promType = $('#promType');
  var promTypeLabel = $('label[for="promType"]');
  var menuType = $('#menuType');
  var menuTypeLabel = $('label[for="menuType"]');


  allType.on('change', function(e) {
    // e.preventDefault();

    var myck = $(this).attr('checked');

    if(!myck){
      $(this).attr('checked',true);
      serviceType.attr("checked", true);
      promType.attr("checked", true);
      menuType.attr("checked", true);
      allTypeLabel.addClass('checked');
      serviceTypeLabel.addClass('checked');
      promTypeLabel.addClass('checked');
      menuTypeLabel.addClass('checked');
    }else{
      $(this).attr('checked',false);
      serviceType.attr("checked", false);
      promType.attr("checked", false);
      menuType.attr("checked", false);
      allTypeLabel.removeClass('checked');
      serviceTypeLabel.removeClass('checked');
      promTypeLabel.removeClass('checked');
      menuTypeLabel.removeClass('checked');
    }
  });

  var myCheckOn = function(baseClick){
    baseClick.on('change', function(e){
      var _thisck = $(this).attr('checked');
      // console.log(_thisck);
      if(_thisck){
        baseClick.next().removeClass('checked');
        baseClick.attr('checked',false);
        baseClick.next().children('span').removeClass('checked');
      }else{
        baseClick.next().addClass('checked');
        baseClick.attr('checked',true);
        baseClick.next().children('span').addClass('checked');
      }

      checkAll();

    });
  };

  // myCheckOn(allType);
  myCheckOn(serviceType);
  myCheckOn(promType);
  myCheckOn(menuType);

  var checkAll = function(){

    var serviceChecked = serviceType.attr('checked');
    var promChecked = promType.attr('checked');
    var menuChecked = menuType.attr('checked');
    

    console.log(serviceType, promType, menuType);

    if(serviceChecked && promChecked && menuChecked){
      allType.attr("checked", true);
      allTypeLabel.addClass('checked');

    }else{
      allType.attr("checked", false);
      allTypeLabel.removeClass('checked');
      
    }
  };


  // ==========accodian===============
  var qnaDl = $('.qna');
  var qnaDt = qnaDl.find('dt');
  var qnaDd = qnaDl.find('dd');

  var ddHeight = [];
  var i = 0;
  
  for (; i < qnaDd.length; i++) {
    ddHeight[i] = qnaDd.eq(i).innerHeight();
  }
  console.log(ddHeight);

    // 2번 기능시 주석풀기
    // $('dd').hide(); 

  // 3. 1번,2번 기능을 함수처리하여 사용하기
  //1번기능 함수화처리
  var myHide = function(select){
    var _this = select;
    var _thisI = select.index() / 2;
    // 1. 선택된 바로 뒤의 dd외 다른 dd를 사라지게 만들기
    _this.next('dd').siblings('dd').animate({height:0, paddingTop:0, paddingBottom:0}, function(){
      var _$this = $(this);
      _$this.css({display:'none'});
    });
  };
  
  // 2번기능을 함수화
  var myShow = function(select){
    // 2. 선택된 바로뒤의 dd를 나타나게 만들기
    var _this = select;
    var _thisI = select.index() / 2;
    // console.log(_thisI);
    _this.next('dd').css({display:'block', paddingTop:0, paddingBottom:0, height:0});
      _this.next('dd').animate({paddingTop:'1rem', paddingBottom:'1rem', height:ddHeight[_thisI]});
  };

  // 선택된 다음 dd를 숨김처리하기위한 함수
    var mySelHide = function(select){
      var _this = select;
      var _thisI = select.index() / 2;
      _this.next('dd').stop().animate({height:0, paddingTop:0, paddingBottom:0}, function() {
      var _$this = $(this);
      _$this.css({display:'none'});
      }); 
    };


    qnaDt.on('click',['button'], function(e) {
    e.preventDefault();
    var sel = $(this);
    var ddView = sel.next('dd').css('display') == 'block';
    if(ddView){

      mySelHide(sel);
      
    }else{

      myHide(sel);
      myShow(sel);

    }

  });
 




// // ==========accodian===============
//   var qnaTbody = $('.qna');
//   var qnaQ = qnaTbody.find('.question');
//   var qnaA = qnaTbody.find('.answer');

//   var ddHeight = [];
//   var i = 0;
  
//   for (; i < qnaA.length; i++) {
//     ddHeight[i] = qnaA.eq(i).innerHeight();
//   }
//   console.log(ddHeight);

//     // 2번 기능시 주석풀기
//     $('dd').hide(); 

//   // 3. 1번,2번 기능을 함수처리하여 사용하기
//   //1번기능 함수화처리
//   var myHide = function(select){
//     var _this = select;
//     var _thisI = select.index() / 2;
//     // 1. 선택된 바로 뒤의 dd외 다른 dd를 사라지게 만들기
//     _this.next('dd').siblings('dd').animate({height:0, paddingTop:0, paddingBottom:0}, function(){
//       var _$this = $(this);
//       _$this.css({display:'none'});
//     });
//   };
  
//   // 2번기능을 함수화
//   var myShow = function(select){
//     // 2. 선택된 바로뒤의 dd를 나타나게 만들기
//     var _this = select;
//     var _thisI = select.index() / 2;
//     // console.log(_thisI);
//     _this.next('dd').css({display:'block', paddingTop:0, paddingBottom:0, height:0});
//       _this.next('dd').animate({paddingTop:'1rem', paddingBottom:'1rem', height:ddHeight[_thisI]});
//   };

//   // 선택된 다음 dd를 숨김처리하기위한 함수
//     var mySelHide = function(select){
//       var _this = select;
//       var _thisI = select.index() / 2;
//       _this.next('dd').stop().animate({height:0, paddingTop:0, paddingBottom:0}, function() {
//       var _$this = $(this);
//       _$this.css({display:'none'});
//       }); 
//     };


//     qnaQ.on('click',['button'], function(e) {
//     e.preventDefault();
//     var sel = $(this);
//     var ddView = sel.next('dd').css('display') == 'block';
//     if(ddView){

//       mySelHide(sel);
      
//     }else{

//       myHide(sel);
//       myShow(sel);

//     }

//   });









})(this.jQuery);





























