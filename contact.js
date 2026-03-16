// side navigator,menu
var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var colsenav=document.getElementById("colsenav")
menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
colsenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})
