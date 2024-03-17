let btn_setting = document.querySelector('.fa-cog');
let btn_home = document.querySelector('.fa-home');
let btn_phone= document.querySelector('.fa-phone');
let btn_message = document.querySelector('.fa-envelope');
let outer = document.querySelector('.outer');
let outer2 = document.querySelector('.outer2');
let outer3 = document.querySelector('.outer3');
let outer4 = document.querySelector('.outer4');
btn_setting.addEventListener('click',()=>{
    let fa = document.getElementsByClassName('fa')
    for (let i=0;i<4;i++){
        fa[i].classList.remove('active');
    }
    btn_setting.classList.add('active')
    outer3.style.opacity = '0';
    outer3.style.transform = 'skew(10deg)' 
    outer2.style.transform = 'scale(0) rotate(0deg)'
    outer.style.top = '30px';
    outer4.style.transform = ' translateX(-1500px)';
    setTimeout(()=>{
        outer.style.top = '0px';
        setTimeout(()=>{
            outer.style.transform = 'scaleX(1.9)'
        },300)
    },450)
  
})
btn_message.addEventListener('click',()=>{
    let fa = document.getElementsByClassName('fa')
    for (let i=0;i<4;i++){
        fa[i].classList.remove('active');
    }
    btn_message.classList.add('active')
    outer3.style.opacity = '0';
    outer3.style.transform = 'skew(10deg)' 
    outer.style.transform = 'scaleX(1)'
    outer.style.top = '-700px';
    outer4.style.transform = ' translateX(-1500px)';
    setTimeout(function(){
        outer2.style.transform = 'scale(1) rotate(360deg)'
    },800)
})
btn_phone.addEventListener('click',()=>{
    let fa = document.getElementsByClassName('fa')
    for (let i=0;i<4;i++){
        fa[i].classList.remove('active');
    }
    btn_phone.classList.add('active')
    outer.style.transform = 'scaleX(1)'
    outer.style.top = '-700px';
    outer2.style.transform = 'scale(0) rotate(0deg)';
    outer4.style.transform = ' translateX(-1500px)';
    setTimeout(function(){
        outer3.style.opacity = '1';
            outer3.style.transform = 'skew(0)'    
    },800)
})
btn_home.addEventListener('click',()=>{
    let fa = document.getElementsByClassName('fa')
    for (let i=0;i<4;i++){
        fa[i].classList.remove('active');
    }
    btn_home.classList.add('active')
    outer.style.transform = 'scaleX(1)'
    outer.style.top = '-700px';
    outer2.style.transform = 'scale(0) rotate(0deg)'
    outer3.style.opacity = '0';
    outer3.style.transform = 'skew(10deg)'
    setTimeout(function(){
      outer4.style.transform = ' translateX(200px)';
      setTimeout(function(){
        outer4.style.transform = ' translateX(-200px)';
        setTimeout(function(){
        outer4.style.transform = ' translateX(0px)';
        },200)
      },200)
    },800)
})