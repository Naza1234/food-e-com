if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoading', ready)
}else{
    ready()
}
function ready() {
    food()
    var removeCartitemButton=document.getElementsByClassName('btn-danger')
    console.log(removeCartitemButton)
for(i=0; i<removeCartitemButton.length;i++){
    var button=removeCartitemButton[i]
    button.addEventListener('click',removeCartitem)
}
}
const btnimg=document.getElementsByClassName('shop-item-img')
         for(i=0;i<btnimg.length;i++){
            var btnimage=btnimg[i]
            btnimage.addEventListener('click',active)
         }
         function active(event){
            btn=btnimage
            btn=event.target
            box=btn.parentElement
            var image=box.getElementsByTagName('img')[0].src
            var name=box.getElementsByClassName('shop-item-name')[0].innerHTML
            var price=box.getElementsByClassName('shop-item-price')[0].innerHTML
            document.getElementsByClassName('pop-up')[0].classList.add('pop-up-show')
            poposhowdit(name,image,price)
         }
         function poposhowdit(name,image,price){
            var cont=document.getElementsByClassName('pop-up')[0]
            cont.innerHTML=""
            html=
            `
            <div class="divv">
                    <img src="${image}" class="shop-item-img snacks dis-img">
                    <div class="dis-dit">
                        <img src="" alt="">
                        <span class="shop-item-name">${name}</span>
                        <span class="shop-item-price">${price}</span>
                        
                        <span class="span">the best food u can fined in teh market</span>
                        <button class="shop-item-button btn-dis" onclick="addtocartclicked(event),outpop()">add to cart</button>
                        <button class="btn-dis-buy" onclick="outpop()">buy now</button>
                    </div>
            </div>
            <div class="out" onclick="outpop()"></div>
                `
                cont.insertAdjacentHTML('beforeend',html)
         }
         
         function outpop(){
            document.getElementsByClassName('pop-up')[0].classList.remove('pop-up-show')
         }
       
function food(){
let 
see=document.getElementById('secone')
let 
seeone=document.getElementById('sectwo')
let
seeshop=document.querySelector('.see-shop')

let
food=document.querySelector('.food')




let
 seecart=document.getElementById('button')
 let
 seeCart=document.querySelector('.cout-see')
 let
 visible=document.querySelector('.visible')
 
 seecart.addEventListener('click',()=>{
    visible.classList.toggle('cout-visible')
 });
 seeCart.addEventListener('click',()=>{
    visible.classList.toggle('cout-visible')
 })
 see.addEventListener('click',()=>{
    seeshop.classList.toggle('not-see')
    food.classList.toggle('not-food')
   })
}

function removeCartitem(event){
    var buttonCliked=event.target
    buttonCliked.parentElement.parentElement.remove()
    updateCardtotal()
}
food()

var quantityinput=document.getElementsByClassName('cart-quantity-input')
for(i=0;i<quantityinput.length;i++){
    var input=quantityinput[i]
    input.addEventListener('change',quantitychanged)
}
function quantitychanged(event){
   var input=event.target
   if(isNaN(input.value)||input.value<=0){
       input.value=1
   }
   updateCardtotal()
}
function updateCardtotal(){
     var cartitemcontainer=document.getElementsByClassName('cart-items')[0]
    var coutheads=cartitemcontainer.getElementsByClassName('cout-head') 
    var totale=0 
    for(i=0;i<coutheads.length;i++){
      var couthead=coutheads[i]
      var cartprice=couthead.getElementsByClassName('cart-price')[0]
      var quntittyEl=couthead.getElementsByClassName('cart-quantity-input')[0]
      var price=parseFloat( cartprice.innerText.replace('$',''))
      var quantity=quntittyEl.value
      totale= totale+(price*quantity)
    }
    
    totale=Math.round(totale*10)/10
    document.getElementsByClassName('cart-total-price')[0].innerText='$'+totale
    var btt=document.getElementsByClassName('div')[0]
    btt.textContent=coutheads.length
}
var addtocart=document.getElementsByClassName('shop-item-button')
for(i=0;i<addtocart.length;i++){
    var button=addtocart[i]
    button.addEventListener('click',addtocartclicked)
}
function addtocartclicked(event){
    var button=event.target
    var shopitem=button.parentElement.parentElement.parentElement
    var titole=shopitem.getElementsByClassName('shop-item-name')[0].innerText
    var price=shopitem.getElementsByClassName('shop-item-price')[0].innerText
    var image=shopitem.getElementsByClassName('shop-item-img')[0].src
    additemtocart(titole,price,image)
    updateCardtotal()
   
    var btt=document.getElementsByClassName('div')[0].classList.add('seediv')
}
function additemtocart(titole,price,image){
    var cartrow=document.createElement('div')
    var cartitems=document.getElementsByClassName('cart-items')[0]
    var cartitemname=cartitems.getElementsByClassName('cart-item-title')
    for (i=0;i<cartitemname.length;i++){
        if (cartitemname[i].innerText==titole){
            alert('this item has been add to cart')
            return
        }
    }
    cartrow.classList.add('cout-head')
    var carthaedcontent =`
     <div class="cart-item">
            <img src="${image}" alt="" class="cart-item-image">
            <span class="cart-item-title">${titole}</span>
     </div>
     <span class="cart-price">${price}</span>
     <div class="cart-quantity">
            <input type="number" value="1" class="cart-quantity-input">
            <img src="png/delete.png" alt="" class="btn-danger">
     </div>
    `

    cartrow.innerHTML=carthaedcontent
    cartitems.append(cartrow)
    cartrow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeCartitem)
    cartrow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',quantitychanged)
}
document.getElementsByClassName('btn-purchase')[0].addEventListener('click',purchasecliked)
function purchasecliked(){
    var btt=document.getElementsByClassName('div')[0].classList.remove('seediv')
    alert('Thank you you have purchased this item')
    var cartitems=document.getElementsByClassName('cart-items')[0]
    while(cartitems.hasChildNodes()){
        cartitems.removeChild(cartitems.firstChild)
    }
    updateCardtotal()
}
