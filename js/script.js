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
const homeSideBar=document.getElementById('home-sidebar');

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
            cartItems.push(parent);
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
    sideBar.classList.toggle('show');
    inout.classList.toggle('hideinout');
    popUpContainer.classList.toggle("hideContainer");
})

// cart button and relatives
 cartNavBar.addEventListener('click',itemsInCart);
cartSidebar.addEventListener('click',itemsInCart);

function itemsInCart(){ let count=0;

    // check if cart container is hidden
    let isCartHidden=document.getElementById('cart-container');
    if(isCartHidden!=null && isCartHidden.classList.contains('hide')){
        isCartHidden.classList.toggle('hide');
        sideBar.classList.toggle('show');
        main.classList.add('hide');
        return;
    }

    let cartContainer=document.createElement('div');
    cartContainer.className="cart-container";
    cartContainer.id="cart-container";
    sideBar.classList.toggle('show');
    main.classList.add('hide');
    cartItems.forEach(item=>{
        // item.attributes.id
        let temp=item.attributes.id;
        let img=item.getElementsByTagName('img');
        let imageSrc=img[0].src;
        let descriptions=item.getElementsByClassName('crop-description');
        // image description, already taken
        // extra details to add ! may be these details will come from backend;
        // but right now , I'm hardCodingIt;
        let div=document.createElement('div');
        div.className='show-cart-items';
        div.id=`show-cart-items${count}`;

        let imgdiv=document.createElement('div');
        imgdiv.className='cart-item-image';
        imgdiv.id=`cart-item-image${count} cart-flex1`;

        let varimg=document.createElement('img');
        varimg.src=imageSrc;
        imgdiv.appendChild(varimg);

        let otherDetails=document.createElement('div');
        otherDetails.id='cart-flex2';
        otherDetails.className="cart-item-details";
        otherDetails.innerHTML=`<p>this section will take more details about crop and some buttons to check out , multiple copies of item. lorem Hi, this is harsh sharma Seeking entry level role software development department skilled in data structure and algorithms and frontend development with computer science fundamentals  </p>`;

        div.appendChild(imgdiv);
        div.appendChild(otherDetails);

        cartContainer.appendChild(div);

        count++;
    })

    bodi.appendChild(cartContainer);
}

// home button
homeSideBar.addEventListener('click',()=>{
    main.classList.remove('hide');
    sideBar.classList.toggle('show');
    let cartContainer=document.getElementById('cart-container');
    cartContainer.classList.toggle('hide');
})