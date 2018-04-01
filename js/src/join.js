

(function($) {

  var tel = $('#firstTel');

  for(var i = 0; i < 10; i++){
    var t = '01'+i;
      if(t === '015' || t === '018'){
        continue;
      }
    tel.append('<option value="' + t + '">' + t + '</option>');
  }


  var agreeAllBox = $('#agreeAllBox');
  var agreeAllLabel = $('label[for="agreeAllBox"]');
  var useCheckBox = $('#useCheckBox');
  var useCheckLabel = $('label[for="useCheckBox"]');
  var personCheckBox = $('#personCheckBox');
  var personCheckLable = $('label[for="personCheckBox"]');

  agreeAllBox.on('change', function(e) {
    // e.preventDefault();

    var myck = $(this).attr('checked');

    if(!myck){
      $(this).attr('checked',true);
      useCheckBox.attr("checked", true);
      personCheckBox.attr("checked", true);
      agreeAllLabel.addClass('checked');
      useCheckLabel.addClass('checked');
      personCheckLable.addClass('checked');
    }else{
      $(this).attr('checked',false);
      useCheckBox.attr("checked", false);
      personCheckBox.attr("checked", false);
      agreeAllLabel.removeClass('checked');
      useCheckLabel.removeClass('checked');
      personCheckLable.removeClass('checked');
    }
  });

  // var allcb = useCheckBox.attr('checked');
  var myCheckOn = function(baseClick){
    baseClick.on('change', function(e){
      agreeAllBox.attr("checked", false);
      agreeAllLabel.removeClass('checked');
      var _thisck = $(this).attr('checked');
      // console.log(_thisck);
      if(_thisck){
        baseClick.next().removeClass('checked');
        baseClick.attr('checked',false);
      }else{
        baseClick.next().addClass('checked');
        baseClick.attr('checked',true);
      }

      checkAll();

    });
  };

  myCheckOn(useCheckBox);
  myCheckOn(personCheckBox);

  var checkAll = function(){

    var useChecked = useCheckBox.attr('checked');
    var personChecked = personCheckBox.attr('checked');
    

    console.log(useChecked, personChecked);

    if(useChecked && personChecked){
      agreeAllBox.attr("checked", true);
      agreeAllLabel.addClass('checked');

    }else{
      agreeAllBox.attr("checked", false);
      agreeAllLabel.removeClass('checked');
      
    }
  };
  // checkAll(useChecked);
  // checkAll(personChecked);

  var nextBtn = $('.conf');
  nextBtn.on('click', function(e){
    var useChecked = useCheckBox.attr('checked');
    var personChecked = personCheckBox.attr('checked');
    console.log(useChecked, personChecked);

    if(useChecked && personChecked){
     location.replace('http://naver.com');
    }else{
      alert("애슐리 이용약관 및 개인정보 수집에 대해 모두 동의 후 클릭 바랍니다.");
    }
  });

// $('#middleTel').on('keydown',function() {
//   // $(this).css({background:'#fa0'});
//   var test = parseInt($(this).val());
//   var testText = $(this).text();
//   var inputL = test.length;
//   var max = parseInt($(this).attr('maxlength'));

//   var t = test.constructor.toString().slice(9,-20);
  
//  if(test !== NaN){console.log('!!!!!!');}
//   // console.log(test);

//   if(inputL >= max){;
//     var test1 = test.slice(0,max);
//     test = parseInt(test1);
//     // $(this).text(test1);
//   }
//    $(this).text(test1);
// });


// =========== con1 , con2 showBtn=============
var con1 = $('.con1');
var con2 = $('.con2');
var showBtn01 = $('.show_btn_01');
var showBtn02 = $('.show_btn_02');

showBtn01.on('click', function(e) {
  e.preventDefault();
  con1.toggleClass('showme');
});

showBtn02.on('click', function(e) {
  e.preventDefault();
  con2.toggleClass('showme');
});


})(this.jQuery);

  //tel_box maxlength 체크
  function maxLengthCheck(object){
   if (object.value.length > object.maxLength){
    object.value = object.value.slice(0, object.maxLength);
   }    
  }






















