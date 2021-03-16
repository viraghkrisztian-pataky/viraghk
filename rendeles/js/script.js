function felnott(){
  if(document.getElementById('felnott').checked == true){
    s1.disabled = false; 
    b1.disabled = false; 
  }else{
    s1.disabled = true; 
    b1.disabled = true; 
  }
}
function ital(){
  var sor ="";
  if(s1.value>0 && document.getElementById('felnott').checked == true){
    sor = "sör: "+s1.value+" db -> "+s1.value*300+" Ft";
  }else{
    sor = "";
  }
  document.getElementById('rend').innerHTML=sor;
}