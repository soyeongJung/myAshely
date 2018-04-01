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

})(this.jQuery);