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
    if( vendeg == robot){
        alert("Döntetlen, tessék újra dobni!");
    }else{
        switch (vendeg) {
            case "ko":
                if(robot=="papir"){
                    document.getElementById('er').innerHTML="Robot nyert!";
                }else{
                    document.getElementById('er').innerHTML="Vendég nyert!";
                }
              break;
            case "papir":
                if(robot=="ollo"){
                    document.getElementById('er').innerHTML="Robot nyert!";
                }else{
                    document.getElementById('er').innerHTML="Vendég nyert!";
                }
              break;
            case "ollo":
                if(robot=="ko"){
                    document.getElementById('er').innerHTML="Robot nyert!";
                }else{
                    document.getElementById('er').innerHTML="Vendég nyert!";
                }
              break;
            }
    }
    
          
    document.getElementById('teszt').innerHTML=vendeg+"+"+robot;
}