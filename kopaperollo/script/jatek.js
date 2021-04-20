function jatek(){
    tomb=["ko","papir","ollo"];
    szam=Math.floor(Math.random()*10)%3;
    document.getElementById('egyben').src="pic/"+tomb[szam]+".png";
    var vendeg="";
    var robot="";
    if(document.getElementById('ko').checked){
        vendeg=document.getElementById('ko').value;
    }
    if(document.getElementById('papir').checked){
        vendeg=document.getElementById('papir').value;
    }
    if(document.getElementById('ollo').checked){
        vendeg=document.getElementById('ollo').value;
    }

    robot=tomb[szam];
    switch (x) {
        case "ko":
          text = "kő";
          break;
        case "papir":
          text = "papír";
          break;
        case "ollo":
          text = "olló";
          break;
        default:
          text = "No value found";
    document.getElementById('er').innerHTML=vendeg+"+"+robot;
}