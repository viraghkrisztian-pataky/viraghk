var i = 0;
function kepn(){
    var kep = document.getElementById('pic');
    if(i<1){
        i=4;
    }
    if(i>4){
        i=1;
    }
    kep.src="pic/img_"+i+".jpg";
}
function bal(){
    i--;
    kepn();
}
function jobb(){
    i++;
    kepn();
}