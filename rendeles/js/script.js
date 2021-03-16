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
  var sor = s1.value;
  document.getElementById('rend').innerHTML=sor*300+" Ft";
}