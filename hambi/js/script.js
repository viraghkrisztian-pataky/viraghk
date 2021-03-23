var kepcsere = [1, 1, 1, 1, 1, 1, 1];
var kepszama=0;

function csere(kep){
    if(kep == "h1" ||  kep == "h7") {
        if (kepcsere[0]==1){
            document.getElementById('h1').src="pic/h1f.png";
            document.getElementById('h7').src="pic/h7f.png";
            kepcsere[0]=0;
            kepcsere[6]=0;
         }else{
            document.getElementById('h1').src="pic/h1.png";
            document.getElementById('h7').src="pic/h7.png";
             kepcsere[0]=1;
            kepcsere[6]=1;
         }
        }else{ 
                    // document.getElementById('teszt').innerHTML=kep;
                kepszama=kep.slice(1,2); //->1
                if (kepcsere[kepszama-1]==1){
                    document.getElementById(kep).src="pic/"+kep+"f.png";
                    kepcsere[kepszama-1]=0;
                    }else{
                        document.getElementById(kep).src="pic/"+kep+".png";
                        kepcsere[kepszama-1]=1;
                    }
         }
         var arak = [100, 110, 120, 130, 140, 150, 100];
         var osszeg=0;
         for(var i=0;i<7;i++)
         {
             osszeg=osszeg+kepcsere[i]*arak[i];
         }
         document.getElementById('ar').innerHTML=osszeg+" Ft";
}       


