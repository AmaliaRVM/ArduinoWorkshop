var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0]; 

btn.onclick = function() {
    modal.style.display= "block";
}
span.onclick = function (){
    modal.style.display = "none";
}
window.onclick= function(event) {
    if (event.targer == modal) {
        modal.style.display = "none";
    }
}
/* second button */ 
var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("myBtn1");
var span1 = document.getElementsByClassName("close1")[0]; 

btn1.onclick = function() {
    modal1.style.display= "block";
}
span1.onclick = function (){
    modal1.style.display = "none";
}
window.onclick= function(event) {
    if (event.targer == modal1) {
        modal1.style.display = "none";
    }
}

/*third button*/
var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("close2")[0]; 

btn2.onclick = function() {
    modal2.style.display= "block";
}
span2.onclick = function (){
    modal2.style.display = "none";
}
window.onclick= function(event) {
    if (event.targer == modal2) {
        modal2.style.display = "none";
    }
}