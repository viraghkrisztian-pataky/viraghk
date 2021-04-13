function jatek(){
    tomb=["ko","papir","ollo"];
    szam=Math.floor(Math.random()*10)%3;
    document.getElementById('egyben').src="pic/"+tomb[szam]+".png";





    document.getElementById('er').innerHTML=tomb[szam];
}