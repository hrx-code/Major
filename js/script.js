const topBarIn=document.getElementById('btn-top-sign-in');
const topBarUp=document.getElementById('btn-top-sign-up');
const pass2=document.getElementById('inputpass2');
const remforg=document.getElementById('forget');
const signInUpBtn=document.getElementById('btn-sign-in');
const closePopUp=document.getElementById('close'),
popUpContainer=document.getElementById('pop-container');
const sideBarToggler=document.getElementById('sideBarToggler');
const sideBar=document.getElementById('sidebar');
const bodi=document.getElementById('bodi');
const main=document.getElementById('main');
let switchCart=[];
alladdtocart=document.getElementsByClassName('addtocart');
switchCart=[...alladdtocart];
const cartSidebar=document.getElementById('cart-sidebar');
const cartNavBar=document.getElementById('cart');
const loginBtn=document.getElementById('entry')
const inout=document.getElementById('inout');
const loginBtnSideBar=document.getElementById('entry-sidebar')

// offline data
var alok = {
    fname:"Alok",
    lname:"Kumar",
    sex:"Male",
    area:"Patna"
};
var sagar = {
    fname:"Sagar",
    lname:"Sahil",
    sex:"Male",
    area:"Patna"
}
var piyush = {
    fname:"Piyush",
    lname:"Abhiranjan",
    sex:"Male",
    area:"Bhagalpur"
}
var anurag = {
    fname:"Anurag",
    lname:"Gupta",
    sex:"Male",
    area:"Kolkata"
};
var aman = {
    fname:"Aman",
    lname:"Gupta",
    sex:"Male",
    area:"Sitamarhi"
}
var devanshu = {
    fname:"Devanshu",
    lname:"Dev",
    sex:"Male",
    area:"Hajipur"
}
var vaishnavi = {
    fname:"Vaishnavi",
    lname:"Jha",
    sex:"Female",
    area:"Bhagalpur"
}
var komal = {
    fname:"Komal",
    lname:" ",
    sex:"Female",
    area:"Gorakhpur"
}
var sukriti = {
    fname:"Sukriti",
    lname:"Kumari",
    sex:"Female",
    area:"Buxar"
}



// add eventListener

topBarIn.addEventListener('click',()=>{
     topBarIn.classList.add('changeBorder');
     topBarUp.classList.remove('changeBorder');
     pass2.classList.remove('show');
     remforg.classList.remove('hide');
     signInUpBtn.innerHTML="Sign In"
})
topBarUp.addEventListener('click',()=>{
    topBarUp.classList.add('changeBorder');
    topBarIn.classList.remove('changeBorder');
    pass2.classList.add('show');
    remforg.classList.add('hide');
    signInUpBtn.innerHTML="Sign Up";
})

closePopUp.addEventListener('click',()=>{
    popUpContainer.classList.toggle('hideContainer');
    inout.classList.toggle('hideinout');
})

// sidebar and navbar
sideBarToggler.addEventListener('click',()=>{
    sideBar.classList.toggle('show');
})

main.addEventListener('click',(e)=>{
    console.log(e.target.classList);
    if(e.target.classList.contains('main'))
       sideBar.classList.remove('show');

})

// document.addEventListener('click',(e)=>{
//     console.log(e.target.classList);
// })


// add to cart ! list of items added
const cartItems=[];

// console.log(switchCart);

switchCart.forEach(gocart);

function gocart(item){
    item.addEventListener('click',()=>{

        // console.log("clicked");
        if(item.classList.contains('gotocart')){
            console.log("cart link");
        }
        else{
            item.classList.add('gotocart');
            item.innerHTML=`<button>Go To Cart</button>`;
            const parent=item.parentNode;
            // console.log(parent.attributes[0].nodeValue);
            cartItems.push(parent.attributes[0].nodeValue);
            cartSidebar.innerHTML=`Cart +${cartItems.length}`;
            cartNavBar.innerHTML=`Cart +${cartItems.length}`;
        }
    })
}


// click on login button from navbar

loginBtn.addEventListener('click',function(){
    inout.classList.toggle('hideinout');
    popUpContainer.classList.toggle("hideContainer");
})

// click on login button from sidebar

loginBtnSideBar.addEventListener('click',()=>{
    inout.classList.toggle('hideinout');
    popUpContainer.classList.toggle("hideContainer");
})



