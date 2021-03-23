var kepcsere = 0;
function csere(kep){
   // document.getElementById('teszt').innerHTML=kep;
    if (kepcsere==0){
       document.getElementById(kep).src="pic/"+kep+"f.png";
        kepcsere=1;
    }else{
        document.getElementById(kep).src="pic/"+kep+".png";
        kepcsere=0;
    }

}
