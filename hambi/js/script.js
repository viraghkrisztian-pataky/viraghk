var kepcsere = [0, 0, 0, 0, 0, 0, 0];
var kepszama=0;
function csere(kep){
   // document.getElementById('teszt').innerHTML=kep;
   kepszama=kep.slice(1,2); //->1
   if (kepcsere[kepszama-1]==0){
       document.getElementById(kep).src="pic/"+kep+"f.png";
       kepcsere[kepszama-1]=1;
    }else{
        document.getElementById(kep).src="pic/"+kep+".png";
        kepcsere[kepszama-1]=0;
    }

}
