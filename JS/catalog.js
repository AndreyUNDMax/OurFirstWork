var z = 0
var k = 0
var zheka = new Array("IMG/fTUBberUSiQ.jpg","IMG/e_659U-01uQ.jpg")
var id = ""
var k = 0
function greycross(){
 document.getElementById("crossline1").style.backgroundColor = 'grey'
    document.getElementById("crossline2").style.backgroundColor = 'grey'
}
function simplecross(){
    document.getElementById("crossline1").style.backgroundColor = 'white'
    document.getElementById("crossline2").style.backgroundColor = 'white'
}
function unbuyable(id){
    switch(k){
        case 0:
            document.getElementById(id).innerHTML = "Ты дебил?"
            break;
        case 1:
            document.getElementById(id).innerHTML = "Издеваешься?"
            break;
        case 2:
            document.getElementById(id).innerHTML = "Может хватит?"
            break;
        case 3:
            document.getElementById(id).innerHTML = "Осталось 0 попыток"
            break;
        case 4:
            document.getElementById(id).href = "http://gayporka.top/videos/2271/zrelyy-gey-oblizyvaet-chlen-lyubovnika-i-daet-emu-v-popku/"
            break;
    }
    k++
}
function popup(){
    document.getElementById('products__popup').style.display = 'inline'
    document.getElementById("body").style.overflow = 'hidden'
}
function nopopup(){
    document.getElementById('products__popup').style.display = 'none'
    document.getElementById("body").style.overflow = 'visible'
}
function popupphotos(){
    k++
    if (k > (zheka.length-1)){
        k= 0;
    }
    document.getElementById("product__photos").src = zheka[k]


}
function klik(){
    document.getElementById("VIN").innerHTML = "Короче Настя"
}
function PAREN1(){
    document.getElementById("PAREN").innerHTML = "Твой бывший парень"
}
function UL() {
 switch(z){
     case 0:
     case 1:
     case 2:
     case 3:
     case 4:
        break;
     case 5:
         document.getElementById("ULIA").innerHTML = "Андрея" ;
         break;
     case 6:
     case 7:
     case 8:
     case 9:
         break;
     case 10:
          document.getElementById("ULIA").innerHTML = "Любовь Максима" ;
         break;
     case 11:
     case 12:
     case 13:
     case 14:
         break;
     case 15:
          document.getElementById("ULIA").innerHTML = "Больше не девствственница" ;
         break;
 }
z++
}
