/*jQuery start---------*/ 
 (function($) { 

var ImportFile = function(make, load, before){
   var wrap = $('#wrap');
   var beforeDiv = before;
   console.log('beforeDiv: '+beforeDiv);
   if(beforeDiv == 0){
      wrap.prepend('<div class="'+ make+'_wrap"></div>'); // 앞에담기
   }else if(beforeDiv == 1){
      wrap.children().eq(beforeDiv-1).after('<div class="'+ make+'_wrap"></div>'); // 해당번째 뒤에 담기
   }else{
      wrap.append('<div class="'+ make+'_wrap"></div>'); // 뒤에담기
   }
   $('.'+make+'_wrap').load(load);
};



 var baseUrl = './src/'; 
 var myHtml = [ 
   {make:'headBox',    load:'all/headBox.html'}, 
   {make:'gnbBox',    load:'all/gnbBox.html'},
   // {make:'bannerBox',  load:'main/bannerBox.html'}, 
   // {make:'mainConTent_01',  load:'main/mainConTent_01.html'}, 
   // {make:'mainConTent_02',  load:'main/mainConTent_02.html'}, 
   // {make:'mainConTent_03',  load:'main/mainConTent_03.html'}, 
   // {make:'mainConTent_04',  load:'main/mainConTent_04.html'}, 
   // {make:'mainConTent_05',  load:'main/mainConTent_05.html'}, 
   {make:'topBox',  load:'all/topBox.html'}, 
   {make:'footBox',    load:'all/footBox.html'} 
 ];

 for(var i = 0; i < myHtml.length; i++){ 
   if(i<=0){
     ImportFile(myHtml[i].make, baseUrl + myHtml[i].load, i); 
   }else if(i==1){
     ImportFile(myHtml[i].make, baseUrl + myHtml[i].load, i); 
   }else{
     ImportFile(myHtml[i].make, baseUrl + myHtml[i].load); 
   }
 };

 }) (this.jQuery); 
 /*jQuery end---*/