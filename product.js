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
var product=document.getElementById("product")
var search=document.getElementById("search")
var productlist=product.querySelectorAll("div")
search.addEventListener("keyup",function(){
    var entervalue=event.target.value.toUpperCase()
    for(c=0;c<productlist.length;c=c+1){
        var productname=productlist[c].querySelector("h1").textContent
        if(productname.toUpperCase().indexOf(entervalue)<0){
            productlist[c].style.display="none"
        }
        else{
            productlist[c].style.display="block"
        }
    }
    
})