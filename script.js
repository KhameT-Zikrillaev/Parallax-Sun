let btren = document.querySelectorAll('.bt');
let collipse2 = document.querySelector('.collipse2');
let quyosh = document.querySelector('.header_img_q');
let fon = document.querySelector('.collipse0');
let h1 = document.querySelector('.h1');
let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
btren[0].addEventListener('click',function(){
  
   if( btren[0]== btren[0]){
    
     collipse2.classList.remove('activatedobloka');
     quyosh.classList.remove('activetedquyosh');
     fon.classList.remove('actfon');
     h1.classList.remove('activatedh1');
     p1.classList.remove('pactivated');
     p2.classList.remove('pactivated');
   }
 })
 
btren[1].addEventListener('click',function(){
  if (btren[1]== btren[1]){
    collipse2.classList.add('activatedobloka');
    quyosh.classList.add('activetedquyosh');
    fon.classList.add('actfon');
    h1.classList.add('activatedh1');
    p1.classList.add('pactivated');
    p2.classList.add('pactivated');
   }
})








for (let i = 0; i < btren.length; i++ ){
  btren[i].addEventListener("click",function(){

for(let j = 0; j < btren.length; j++){
  btren[j].classList.remove('act')

}
btren[i].classList.add('act')
  })
} 
