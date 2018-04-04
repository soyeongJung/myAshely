// mobile_store.js

(function($) {

  // ==========type===============
  var typeClassic = $('#typeClassic');
  var typeClassicLabel = $('label[for="typeClassic"]');
  var typeW = $('#typeW');
  var typeWLabel = $('label[for="typeW"]');
  var typeaLab = $('#typeaLab');
  var typeaLabLabel = $('label[for="typeaLab"]');
  var typeQueen = $('#typeQueen');
  var typeQueenLabel = $('label[for="typeQueen"]');
  var typeNodle = $('#typeNodle');
  var typeNodleLabel = $('label[for="typeNodle"]');
  var type83Grill = $('#type83Grill');
  var type83GrillLabel = $('label[for="type83Grill"]');

  // ==========service===============
  var wine = $('#wine');
  var wineLabel = $('label[for="wine"]');
  var beer = $('#beer');
  var beerLabel = $('label[for="beer"]');
  var takeOut = $('#takeOut');
  var takeOutLabel = $('label[for="takeOut"]');
  var forBaby = $('#forBaby');
  var forBabyLabel = $('label[for="forBaby"]');
  var wifi = $('#wifi');
  var wifiLabel = $('label[for="wifi"]');


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

    });
  };

  myCheckOn(typeClassic);
  myCheckOn(typeW);
  myCheckOn(typeaLab);
  myCheckOn(typeQueen);
  myCheckOn(typeNodle);
  myCheckOn(type83Grill);

  myCheckOn(wine);
  myCheckOn(beer);
  myCheckOn(takeOut);
  myCheckOn(forBaby);
  myCheckOn(wifi);

  // ==========mapBtn===============
  var mapBtn = $('.map_show');
  var showMap = $('.show_map');

  mapBtn.on('click', ['button'], function(e) {
    e.preventDefault();
    showMap.toggleClass('showing');
  });

// ===============modal==============
   // 2. 목록의 내용
  // - 전체 목록 일부분씩 끊어서 보여주기(목록 버튼만들기)
  var modalBox = $('#modalBox');
  // 1,2 modal영역 기본 구조 만들기(만든후 숨기기), list 영역 기본구조 만들기
  modalBox.append('<button type="button" class="close"> <i class="fa fa-times" aria-hidden="true"></i> <span class="hidden">닫기</span> </button><div class="view_box"><h2><span class="deco_left"></span>매장정보<span class="deco_right"></span></h2><img></div><div class="bg_back"></div>');
  var viewBox = $('.view_box'); 
  viewBox.append('<div class="list_box"></div>'); 

  var listWrap = $('.list_box');

// ---------------------------------------------------------------------------------------------------------
  // 어두운 배경 만들기/숨기기
  var bgBack  = $('.bg_back');
  bgBack.css({width:'100%',height:'100%',position:'fixed',zIndex:'500',top:0,left:0,backgroundColor:'rgba(0,0,0,0.5)'});
  // viewBox.css({backgroundColor:'#fff', width:'45rem', height:'90%', margin:'0 auto', position:'relative', zIndex:1000, marginTop:'5%'});
  viewBox.css({backgroundColor:'#fff', width:'45rem', height:'100%', margin:'0 auto', position:'relative', zIndex:1000});

  // viewBox.hide();  bgBack.hide();

var moreViewBtn = $('.more_view_btn');

// ----------------------------------------------------
 
  var moreViewBtn = $('.more_view_btn');

  moreViewBtn.on('click', ['button'], function(e) {
    e.preventDefault();   
    modalBox.css({display:'block'});
    viewBox.css({overflowY:'scroll'})
    viewBox.fadeIn();    bgBack.fadeIn();
    viewBox.find('button.close').focus();
        
    // mView();    
   
  }); // moreViewBtn.on('click')
  

  listWrap.css({width:'100%', height:'auto', overflow:'hidden', margin:'0 auto', marginBottom:'60px'});

  $.fn.myGallery = function(dataUrl, baseImageFolder) {

    listWrap.append('<div class="gallery_view"><p class="hidden"></p></div>');
    listWrap.append('<div class="gallery_list"><ul></ul></div>');

    var gView =  $('.gallery_view');
    var gList =  $('.gallery_list');
    var gListUl =  gList.children('ul');
    var gListLi =  gListUl.children('li');
    var gListBotton =  gListLi.children('button');

    // 각 사용될 이미지위치 체크
    var baseUrl = baseImageFolder;
    var thumUrl = baseUrl + 'thum/';
    var bigUrl = baseUrl + 'big/';

    var gView =  $('.gallery_view');
    var gList =  $('.gallery_list');
    var gListUl =  gList.children('ul');

    var jsonUrl = dataUrl;
    $.getJSON(jsonUrl, function(data) {
      console.log(data);
      $.each(data, function(index, value) {
        // data 불러오기 체크
        console.log(index+': '+value.thum);
        gListUl.append('<li><button type = "button"><span class = "hidden">'+ value.thum +'</span></button></li>');
        gListUl.children('li').eq(index).children('button').css({'backgroundImage':'url('+ thumUrl+value.file +')'});
    
      }); // $.each();

      var gListLi =  gListUl.children('li');
      var gListBotton =  gListLi.children('button');

      gView.css({width:'33.75rem', height:'25.313rem', margin:'0 auto', backgroundColor:'#acc', boxSizing: 'border-box', border:'1px solid #cca', marginBottom: '1rem', borderRadius: '1rem', backgroundRepeat: 'no-repeat', backgroundPosition:'center', backgroundSize:'cover'});
      gList.css({width:'100%', height:'auto', boxSizing: 'border-box', padding:'0.5rem'});
      gListUl.css({width:'33.75rem', height:'auto', margin:'0 auto'}),
      gListLi.css({width:'23%', height:'120px', margin:'1%', float:'left'});
      gListBotton.css({width:'100%', height:'100%', backgroundColor:'#aaf', borderRadius: '0.7rem', backgroundRepeat: 'no-repeat', backgroundPosition:'center', backgroundSize:'cover', boxShadow: '0.1rem 0.1rem 0.1rem rgba(0,0,0,0.3)'});

      gView.css({backgroundImage:'url(' + bigUrl + data[0].file + ')'});
      gView.find('p').text(data[0].big);

    // 클릭하기 위한 기능사용 (getJSON메소드를 통해 처리된 기능을 사용함)
      var galleryBtn = gListUl.children('li');
      console.log(galleryBtn);
      galleryBtn.on('click', ['button'], function(e) {
        e.preventDefault();
        var thisI = $(this).index();
        console.log(thisI);
        gView.css({backgroundImage:'url(' + bigUrl + data[thisI].file + ')'});
        gView.find('p').text(data[thisI].big);
      }); // .on('click', function(e) {});

    }); // $.getJSON();

}; // $.fn.myGallery 플러그인 생성

  modalBox.find('button.close').on('click',function(e) {
    e.preventDefault();    viewBox.fadeOut();    bgBack.fadeOut(); 
    modalBox.fadeOut();
  });
// ------------------------------------------------------------------------------------
/** 2018.02.09 키보드제어 버그
  * 리스트 클릭후 이미지보고 나갔을때 다시확인시 좌우 이동이미지 위치가 원활하지 않음 
*/
  // 모달창에서만 키포커스 움직이기
  // viewBox.find('button').last().on('blur',function() {
  //   viewBox.find('button.close').focus();
  // });


  // 모달창 키보드 제어
  // function mView() {
  //   var viewBoxSee = viewBox.css('display') == 'block';
  //   if(viewBoxSee){
  //     $(document).unbind('keydown');    

  //     $(document).on('keydown', function(event) {
  //       // console.log(event.key, event.keyCode, event.which);
  //       // ArrowLeft 37, ArrowRight 39, Escape 27
  //         switch (event.which){ 
  //           case 37:
  //             modalLeft.focus();
  //             modalLeft.trigger('click');    
  //             break;
  //           case 39:
  //             modalRight.focus();
  //             modalRight.trigger('click');  
  //             break;
  //           case 27:
  //             viewBox.find('.close').focus();
  //             viewBox.find('.close').trigger('click'); 
  //             break;
  //         } 
  //     });
  //   }// if(viewBoxSee)
  // }//  function mView();
  // mView();
  // -----------------------------------------------------------------------------

viewBox.append('<div class="infomation"><span class="clearfix"><p>83그릴바이애슐리</p><ul class="clearfix"><li><span></span></li><li><span></span></li><li><span></span></li></ul></span><dl class="clearfix"><dt>주소</dt><dd>대구광역시 달서구 두류공원로 200 (두류동 산 302-11) 이월드 83타워 78층</dd><dt>전화번호</dt><dd>0507-1390-0083</dd><dt>영업시간</dt><dd>12:00 ~ 23:00</dd><dt class="last">오시는길</dt><dd class="last">두류역 15번 출구로 나와 이월드로 도보 5분</dd></dl><div class="modal_map"></div></div>');



// }); // $.getJSON

})(this.jQuery);




































