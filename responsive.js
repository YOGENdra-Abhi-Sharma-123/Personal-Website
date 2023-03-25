burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
navlist=document.querySelector('.navlist');
rightnav=document.querySelector('.rightnav');

burger.addEventListener('click',()=>{
    navlist.classList.toggle('opac');
    rightnav.classList.toggle('opac');
    navbar.classList.toggle('navmb');
})
const form = document.querySelector("#formm");
const listc = document.querySelector("#listcc");
form.addEventListener('submit',function(e){
    e.preventDefault();
    const userinput = form.elements.username;
    const quaninput = form.elements.quantity;
     Order(userinput.value,quaninput.value);
     userinput.value = " ";
     quaninput.value =" ";
})
const Order = function(user,quan){
    const newOrder = document.createElement('li');
    const btag = document.createElement('b');
    btag.append(user);
   newOrder.append(btag);
   newOrder.append(`--${quan}`);
    listc.append(newOrder);

}
const button  = document.querySelector('.forchange');
const h1 = document.querySelector('h1');
button.addEventListener('click',function(){
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    const newColor = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor  = newColor;
    button.innerText = ` Change this page color from ${newColor}`;
   })