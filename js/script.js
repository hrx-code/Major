const topBarIn=document.getElementById('btn-top-sign-in');
const topBarUp=document.getElementById('btn-top-sign-up');
const pass2=document.getElementById('inputpass2');
const remforg=document.getElementById('forget');















// add eventListener

topBarIn.addEventListener('click',()=>{
     topBarIn.classList.add('changeBorder');
     topBarUp.classList.remove('changeBorder');
     pass2.classList.remove('show');
     remforg.classList.remove('hide');
})
topBarUp.addEventListener('click',()=>{
    topBarUp.classList.add('changeBorder');
    topBarIn.classList.remove('changeBorder');
    pass2.classList.add('show');
    remforg.classList.add('hide');
    
})

