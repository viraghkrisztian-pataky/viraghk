function be(){
   document.getElementById('lampa1').src="pic/pic_bulbon.gif";
}
function ki(){
    document.getElementById('lampa1').src="pic/pic_bulboff.gif";
 }

 function obe(){
    document.getElementById('lampa2').src="pic/pic_bulbon.gif";
 }
 function oki(){
     document.getElementById('lampa2').src="pic/pic_bulboff.gif";
  }
  var izzo = 0;
  function lampa(){
      if (izzo == 0){
        document.getElementById('lampa3').src="pic/pic_bulbon.gif";
        izzo = 1;
      }else{
        document.getElementById('lampa3').src="pic/pic_bulboff.gif";
        izzo = 0;
      }

  }

  function miez(szoveg){
    document.getElementById('er').innerHTML=szoveg;
  }