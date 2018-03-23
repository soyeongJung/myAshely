

(function($) {

  var tel = $('#firstTel');

  for(var i = 0; i < 10; i++){
    var t = '01'+i;
      if(t === '015' || t === '018'){
        continue;
      }
    tel.append('<option value="' + t + '">' + t + '</option>');
  }

})(this.jQuery);


