////////////search field///////////////////////

let button = document.getElementById('search-ico')
let input =  document.getElementById('search-field')
let srchpanel=document.querySelector('.search-panel')
let bool = true;
function anim(input){
  if( bool){
     input.style.width='18rem';
     input.style.opacity = '1';
     button.style.paddingLeft='.5rem'
    input.style.paddingLeft= '.4rem';
    input.style.paddingRight= '.4rem';
     srchpanel.style.width='18rem';
     srchpanel.style.color='#bfbfbf'
     srchpanel.style.background='#fff'
     input.focus();
     bool=false;
    }else{

      input.style.width='0';
       input.style.opacity = '0'
        button.style.paddingLeft='0'
      input.style.paddingLeft= '0';
      srchpanel.style.width='1.4rem'
      input.style.paddingRight= '0';
      srchpanel.style.color='#fff'
      srchpanel.style.background='none'
      input.blur();
      bool=true;
    }

}
if(button){
  button.addEventListener('click',function(){
  anim(input);
})
}
function  inputAnimOff(input){
  input.style.width='0';
       input.style.opacity = '0'
        button.style.paddingLeft='0'
      input.style.paddingLeft= '0';
      srchpanel.style.width='1.4rem'
      input.style.paddingRight= '0';
      srchpanel.style.color='#fff'
      srchpanel.style.background='none'
      input.blur();
      bool=true;
}

$(document).mouseup(function (e)
{
    var container = $('#search-field');
    var btn = $('#search-ico')


    if (!container.is(e.target) && !btn.is(e.target))
    {
        inputAnimOff(input);
    }
});



///////////////lang change section/////////////////////////////////////

const langField = document.querySelector('.lang-wrapper');
const langBtn = document.querySelector('.header-lang-change');
const langRotate = document.getElementById('lang-rotate')
const armFlag = document.getElementById('arm-flag');
const rusFlag = document.getElementById('rus-flag');
const engFlag = document.getElementById('eng-flag');

armFlag.addEventListener('click',()=>{
  armFlag.style.order = '1';
  rusFlag.style.order = '2';
  engFlag.style.order = '3';
})

rusFlag.addEventListener('click',()=>{
  rusFlag.style.order = '1';
  armFlag.style.order = '2';
  engFlag.style.order = '3';
})

engFlag.addEventListener('click',()=>{
  engFlag.style.order = '1';
  armFlag.style.order = '2';
  rusFlag.style.order = '3';
})


let langBool = true;

langBtn.addEventListener('click',()=>{
  langAnim(langField);

})


function langAnim(item){
  if(  item.style.height=='1.6rem'){
  item.style.height='6rem';
  item.style.background='#2a0745';
  langBool = false;
  // langRotate.style.transform='rotate(180deg)'

}else{
  item.style.height='1.6rem';
  langBool = true;
  item.style.background='none';
  // langRotate.style.transform='rotate(360deg)'
}

}



$(document).mouseup(function (e)
{
    var container2 = $('#lang-changer');



    if (!container2.is(e.target) &&container2.has(e.target).length === 0)
    {
      langField.style.background='none';
        langField.style.height='1.6rem';
        // if( langRotate.style.transform==='rotate(180deg)'){
        //   langRotate.style.transform='rotate(360deg)'
        // }

    }
});

/////////////////////dark mobile button///////////////////////////
const mobileThemeBtnRound = document.querySelector('.mobile-theme-round-btn');
const mobileThemeMainBtn = document.querySelector('.mobile-theme-main-btn');

////////////////////////dark theme button///////////////////
const servicesSliderBg = document.querySelector('.services-wrap-slide');
const facultiesSliderBg = document.querySelector('.faculties-wrap-slide');
const themeBtnRound = document.querySelector('.theme-round-btn');
const themeMainBtn = document.querySelector('.theme-main-btn');
const mainInner = document.querySelector('.main-inner');
const servicesSliderText=document.querySelectorAll('.wrap-slide-text');


//section1
const whiteText = document.querySelectorAll('.whiteText');
const section1CartBg = document.querySelectorAll('.section1CartBg');
const section1InputBg = document.querySelectorAll('.section1InputBg');
const section1ButtonBg = document.querySelector('.section1ButtonBg');
const sec1InputBg = document.querySelectorAll('.sec1-input-bg')

//section 3
const section3_card3 = document.querySelector(".section3_card3");
const section3_leg3 = document.querySelector("#section3_leg3");
const darkcolor = document.querySelectorAll(".dark")
const darkbg = document.querySelectorAll(".darkbg")

//mobile header
const mobHead = document.querySelector('.mobile-header')
//section 2
const section2 = document.querySelector('.section2')
const section2Inputs = document.querySelectorAll('.section2-input')
const section2Nat = document.querySelector('.section2-nat')

let darkBool = false;

themeBtnRound.addEventListener('click',()=>{
document.querySelector('.section1__apply-naturalPerson').classList.toggle('dark-btn')
document.querySelector('.section1__apply-legalPerson').classList.toggle('dark-btn')


sec1InputBg.forEach((item)=>item.classList.toggle('dark-mode'))
document.querySelector('.header-user-drop').classList.toggle('header-user-drop-active-dark');
document.querySelector('.log-out').classList.toggle('user-exit-dark-btn');


  if(themeBtnRound.style.right===''){
      darkBool=true;
      themeBtnRound.style.right='1.45rem';
      themeBtnRound.style.background='#fff';
      themeMainBtn.style.background='#0A0935';
      themeMainBtn.style.color='#fff';




      mainInner.style.background='#110022';
      servicesSliderBg.style.background='#000';
      servicesSliderBg.style.color = '#fff';
      facultiesSliderBg.style.background='#000';
      facultiesSliderBg.style.color = '#fff';

      //section1
      whiteText.forEach(item => item.style.color = "#fff");
      section1CartBg.forEach(item => {
        item.style.backgroundColor = "#2A0054"
        item.style.color='#fff'
      });

      section1InputBg.forEach(item => {
        item.style.backgroundColor = "#110022"
        item.style.color='#fff'
      });
      // section1ButtonBg.style.borderColor = "#fff";

      servicesSliderText.forEach((item)=>{
          item.style.color='#fff'
      })

///section 3
    darkcolor.forEach((item) => {
      item.style.color = '#fff'
    })
    darkbg.forEach((item) => {
      item.style.background = 'rgb(42, 0, 84)'
    })
     darkbg.forEach((item) => {
      item.style.color = '#fff'
    })
  

    ///mobile header
    mobHead.style.background='#110022'
    if (window.screen.width <= 450) {
    document.body.style.background = '#110022'

      darkbg.forEach((item) => {
      item.style.background = '#110022'

    })

    }

  } else {
      themeBtnRound.style.right='';
      darkBool = false;
      themeBtnRound.style.background='#0A0935';
      themeMainBtn.style.background='#fff';
      themeMainBtn.style.color='#0A0935';



      mainInner.style.background='#fff';
      servicesSliderBg.style.background='#fff';
      servicesSliderBg.style.color = '#000';
      facultiesSliderBg.style.background='#fff';
      facultiesSliderBg.style.color = '#000';

      //section1
      whiteText.forEach(item => item.style.color = "#000");
      section1CartBg.forEach(item => {
        item.style.backgroundColor = "#fff"
        item.style.color='#000'
    });
      section1InputBg.forEach(item => {
        item.style.backgroundColor = "#fff"
        item.style.color='#000'
    });
      // section1ButtonBg.style.borderColor = "#000";

      servicesSliderText.forEach((item)=>{
        item.style.color='#000'
      })

      //section 3
      darkbg.forEach((item) => {
      item.style.background = '#fff'
       })
      darkcolor.forEach(item => item.style.color = "#000");
      
      darkbg.forEach((item) => {
      item.style.color = '#000'
    })

       ///mobile header
    mobHead.style.background='#fff'
    if (window.screen.width <= 450) {
    document.body.style.background = '#fff'
}

  }
});










const formInput1 = document.querySelector('.section1CartBg-one')
const formInput2= document.querySelector('.section1CartBg-two')
const formInput3 = document.querySelector('.section1CartBg-three')
const formInput4 = document.querySelector('.section1CartBg-four')
const formInputsBg1 = document.querySelector('.section1__apply-input_one')
const formInputsBg2 = document.querySelector('.section1__apply-input_two')
const formInputsBg3 = document.querySelector('.section1__apply-input_three')
const formInputsBg4 = document.querySelector('.section1__apply-input_four')



formInput1.addEventListener('focus',()=>{
  formInputsBg1.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
})
formInput1.addEventListener('blur',()=>{
  formInputsBg1.style.background = '#939393'
})

formInput2.addEventListener('focus',()=>{
  formInputsBg2.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
})
formInput2.addEventListener('blur',()=>{
  formInputsBg2.style.background = '#939393'
})


formInput3.addEventListener('focus',()=>{
  formInputsBg3.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
})
formInput3.addEventListener('blur',()=>{
  formInputsBg3.style.background = '#939393'
})


formInput4.addEventListener('focus',()=>{
  formInputsBg4.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
})
formInput4.addEventListener('blur',()=>{
  formInputsBg4.style.background = '#939393'
})


const formInput1Nat = document.querySelector('.section1CartBg-nat-one')
const formInput2Nat= document.querySelector('.section1CartBg-nat-two')
const formInput3Nat = document.querySelector('.section1CartBg-nat-three')
const formInput4Nat = document.querySelector('.section1CartBg-nat-four')
const formInputsBg1Nat = document.querySelector('.section1__apply-input_nat-one')
const formInputsBg2Nat = document.querySelector('.section1__apply-input_nat-two')
const formInputsBg3Nat = document.querySelector('.section1__apply-input_nat-three')
const formInputsBg4Nat = document.querySelector('.section1__apply-input_nat-four')



formInput1Nat.addEventListener('focus',()=>{
  formInputsBg1Nat.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
})
formInput1Nat.addEventListener('blur',()=>{
  formInputsBg1Nat.style.background = '#939393'
})

formInput2Nat.addEventListener('focus',()=>{
  formInputsBg2Nat.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
})
formInput2Nat.addEventListener('blur',()=>{
  formInputsBg2Nat.style.background = '#939393'
})


formInput3Nat.addEventListener('focus',()=>{
  formInputsBg3Nat.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
})
formInput3Nat.addEventListener('blur',()=>{
  formInputsBg3Nat.style.background = '#939393'
})


formInput4Nat.addEventListener('focus',()=>{
  formInputsBg4Nat.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
})
formInput4Nat.addEventListener('blur',()=>{
  formInputsBg4Nat.style.background = '#939393'
})
///////////////////////////////////////////card profile change/////////////////////////////////


const naturalPersonBtn = document.querySelector("#naturalPersonBtn");
const legalPersonBtn = document.querySelector("#legalPersonBtn");
const natPerson = document.getElementById('naturalPersonCart')
const legPerson = document.getElementById('legalPersonCart')

naturalPersonBtn.addEventListener('click',()=>{
  natPerson.style.display = 'block'
  legPerson.style.display = 'none'
  naturalPersonBtn.classList.add('active-btn')
  legalPersonBtn.classList.remove('active-btn')

  

});

legalPersonBtn.addEventListener('click',()=>{
  natPerson.style.display = 'none'
  legPerson.style.display = 'block'
  legalPersonBtn.classList.add('active-btn')
  naturalPersonBtn.classList.remove('active-btn')

      
 
})


////////////////////////////////////////////mobile search field////////////////////////////////
let mobileButton = document.getElementById('mobile-search-ico')
let mobileInput =  document.getElementById('mobile-search-field')
let mobileSrchpanel=document.querySelector('.mobile-search-panel')
let mobileBool = true;
function mobileAnim(input){
  if( mobileBool){
     input.style.width='25rem';
     input.style.opacity = '1';
     mobileButton.style.paddingLeft='.5rem'
    input.style.paddingLeft= '.4rem';
    input.style.paddingRight= '.4rem';
     mobileSrchpanel.style.width='30rem';
     mobileSrchpanel.style.color='#bfbfbf'
     mobileSrchpanel.style.background='#fff'
     input.focus();
     mobileBool=false;
    }else{

      input.style.width='0';
       input.style.opacity = '0'
       mobileButton.style.paddingLeft='0'
      input.style.paddingLeft= '0';
      mobileSrchpanel.style.width='4.5rem'
      input.style.paddingRight= '0';
      mobileSrchpanel.style.color='#fff'
      mobileSrchpanel.style.background='none'
      input.blur();
      mobileBool=true;
    }

}
if(mobileButton){
  mobileButton.addEventListener('click',function(){
  mobileAnim(mobileInput);
})
}
function  mobileInputAnimOff(input){
  input.style.width='0';
       input.style.opacity = '0'
        mobileButton.style.paddingLeft='0'
      input.style.paddingLeft= '0';
      mobileSrchpanel.style.width='4.5rem'
      input.style.paddingRight= '0';
      mobileSrchpanel.style.color='#fff'
      mobileSrchpanel.style.background='none'
      input.blur();
      mobileBool=true;
}

$(document).mouseup(function (e)
{
    var mobContainer = $('#mobile-search-field');
    var mobBtn = $('#mobile-search-ico')


    if (!mobContainer.is(e.target) && !mobBtn.is(e.target))
    {
        mobileInputAnimOff(mobileInput);
    }
});








///////////////////////////////turn
const sec1_nat_name = document.getElementById('section1_nat_name')
const sec1_nat_surename = document.getElementById('section1_nat_surename')
const sec1_nat_phone = document.getElementById('section1_nat_phone')
const sec1_nat_mail = document.getElementById('section1_nat_mail')
const sec1_leg_name = document.getElementById('section1_leg_name')
const sec1_leg_phone = document.getElementById('section1_leg_phone')
const sec1_leg_mail = document.getElementById('section1_leg_mail')
const sec1_leg_comp = document.getElementById('section1_leg_comp')

//section 2 inputs ////////////

const sec2_name = document.getElementById('input1')
const sec2_brandName = document.getElementById('input1')

const sec2_leg_name =document.getElementById('input1-leg')
const sec2_leg_brandName =document.getElementById('input2-leg')
const sec2_leg_adress =document.getElementById('section2-input9')
const sec2_leg_bossName =document.getElementById('section2-input10-name')
const sec2_leg_bossSureName =document.getElementById('section2-input10-surename')
const sec2_leg_bossPhone =document.getElementById('section2-input10-phone')
const sec2_leg_bossMail =document.getElementById('section2-input10-mail')


let changeble1 = document.querySelector('.changebleText1')

let changeble3 = document.querySelector('.changebleText3')
let changeble4 = document.querySelector('.changebleText4')
let changeble6 = document.querySelector('.changebleText6')



const page1 = document.querySelector('#naturalPersonCart')
const page1leg = document.querySelector('#legalPersonCart')










$("#telephone").intlTelInput({
  allowDropdown:true,
  excludeCountries: ['az','tr'],
  preferredCountries: ["am","ru" ],
  separateDialCode:true,
  
  
  });

  const orderAdvice = document.getElementById('order-advice')
  const freeAdvice = document.querySelector('.free-advice-block')
  const closeBtn = document.getElementById('advice-close-btn')

  orderAdvice.addEventListener('click',()=>{
    freeAdvice.style.display = 'flex';
    freeAdvice.style.top = window.scrollY+'px';
    // document.body.style.overflowY = 'hidden'
    document.querySelector('.free-advice-bgr').style.height = document.body.clientHeight+'px'

  })
  closeBtn.addEventListener('click',()=>{
    freeAdvice.style.display = 'none';
    // document.body.style.overflowY = 'visible'

  })



//////////////////////////////login show

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const sign = document.getElementById('sign-btn');
const loginForm = document.querySelector('.login-wrapper');
const loginHide = document.querySelector('.login-bg');
const loginCloseBtn = document.querySelector('.login-close-btn');

loginCloseBtn.addEventListener('click',()=>{
  loginFormHide(loginForm)
})

loginHide.addEventListener('click',()=>{
  loginFormHide(loginForm)
})
// function loginFormHide(item){
  
//   item.style.display = 'none';
//   //  document.body.style.overflowY = 'visible'
// }
function loginFormShow(item){
    // loginForm.style.top = window.scrollY+'px'
    loginForm.style.height = document.body.clientHeight+'px'
  item.style.display = 'block';
  document.querySelector('.sign-type').style='flex'
  // document.body.style.overflowY = 'hidden'
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const randomDigit = function(num){
  return (Math.random()*num).toFixed(2);
 
 }
 
 
 
 
 
 const bgItemsLeft = document.querySelectorAll('.login-bg-item-left');
 const bgItemsTop = document.querySelectorAll('.login-bg-item-top');


 if(sign){
 
   sign.addEventListener('click',()=>{
   
     bgItemsLeft.forEach((item)=>{
   
     item.style.left = `${randomDigit(5)}rem`
     item.style.top = `${randomDigit(34)}rem`
   
   })
   
   bgItemsTop.forEach((item)=>{
   
     item.style.left = `${randomDigit(35)}rem`
     item.style.top = `${randomDigit(3)}rem`
   
   })
   
   
   loginFormShow(loginForm)
   
   })
 
 
 }




  ///////////////////mobile login-show//////
const mobileSighnBtn = document.querySelector('#mobile-log-in')

if(mobileSighnBtn){
  mobileSighnBtn.addEventListener('click',()=>{
    // document.querySelector('.mobile-menu-slider').classList.remove('mobile-menu-slider-active');
    bgItemsLeft.forEach((item)=>{
  
    item.style.left = `${randomDigit(5)}rem`
    item.style.top = `${randomDigit(34)}rem`
  
  })
  
  bgItemsTop.forEach((item)=>{
  
    item.style.left = `${randomDigit(35)}rem`
    item.style.top = `${randomDigit(3)}rem`
  
  })
  
  
  loginFormShow(loginForm)
  
    })
}

///////////////////////////////////
if(document.querySelector('#sign-btn')){

  document.querySelector('#sign-btn').onclick = function(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  
  }



}
///////////////////////////////////mobile-menu-btn//////////////////////////////////////

document.querySelector('.menu-icon-wrapper').onclick = function(){
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  setTimeout(()=>{
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
  if(screen.width <=425){
    document.querySelector('.mobile-menu-slider').style.top = window.scrollY+'px';  
    document.querySelector('.mobile-menu-slider').style.height = document.body.clientHeight+'px';  

    // document.querySelector('.active-mobile-menu-btns').style.top = (window.scrollY+15) + 'px';
    // document.body.classList.toggle('mobile-body-overflow')
    document.querySelector('.mobile-header-items').classList.toggle('active-mobile-menu-btns')
       document.querySelector('.mobile-menu-slider').classList.toggle('mobile-menu-slider-active');
       document.querySelector('.mobile-slider-logo').classList.toggle('mobile-slider-logo-active');
       document.querySelector('.mobile-slider-btns').classList.toggle('mobile-slider-btns-active');
       document.querySelector('.mobile-slider-pages').classList.toggle('mobile-slider-pages-active');
       document.querySelector('.mobile-search').classList.toggle('mobile-slider-search-hide')
  }
  },200)
  

}


/////////////////////mobile dark button./////////////////////

const mobileDarkBtn = document.querySelector('.mobile-theme-round-btn')
const btnInside = document.querySelector('.mobile-theme-main-btn')
if(mobileDarkBtn){
  mobileDarkBtn.addEventListener('click',()=>{
    mobileDarkBtn.classList.toggle('mobile-dark-btn-active')
    btnInside.classList.toggle('mobile-main-btn-active')
    document.body.classList.toggle('body-dark-mode-mobile')
    document.querySelector('.main-inner').classList.toggle('main-inner-dark-mobile')
    document.querySelector('.mobile-menu-slider').classList.toggle('slider-dark-active')
    document.querySelectorAll('.whiteText').forEach(item=>item.classList.toggle('dark-text-mobile'))
    document.querySelector('.section1__apply-naturalPerson').classList.toggle('dark-mobile-btns')
    document.querySelector('.section1__apply-legalPerson').classList.toggle('dark-mobile-btns')
    document.querySelectorAll('.test-dark-input').forEach(item=>item.classList.toggle('mobile-inputs-dark-active'))
    document.querySelector('.free-advice-inner').classList.toggle('main-inner-dark-mobile')


    
    })
}


//////////////////////////mobile lang////////////////

const mobLangField = document.querySelector('.mobile-lang-wrapper');
const mobLangBtn = document.querySelector('.mobile-lang-change');
const mobLangRotate = document.getElementById('mobile-lang-rotate')
const mobArmFlag = document.getElementById('mobile-arm-flag');
const mobRusFlag = document.getElementById('mobile-rus-flag');
const mobEngFlag = document.getElementById('mobile-eng-flag');

mobArmFlag.addEventListener('click',()=>{
mobArmFlag.style.order = '1';
mobRusFlag.style.order = '2';
mobEngFlag.style.order = '3';
})

mobRusFlag.addEventListener('click',()=>{
mobRusFlag.style.order = '1';
mobArmFlag.style.order = '2';
mobEngFlag.style.order = '3';
})

mobEngFlag.addEventListener('click',()=>{
mobEngFlag.style.order = '1';
mobArmFlag.style.order = '2';
mobRusFlag.style.order = '3';
})


let mobLangBool = true;

mobLangBtn.addEventListener('click',()=>{
mobLangAnim(mobLangField);

})


function mobLangAnim(item){
  if(  item.style.height=='5rem'){
  item.style.height='18rem';
  mobLangBool = false;
  mobLangRotate.style.transform='rotate(180deg)'

}else{
  item.style.height='5rem';
  mobLangBool = true;
  mobLangRotate.style.transform='rotate(360deg)'
}

}

//   window.addEventListener('click',(ev)=>{
//     if(  langField.style.height=='6rem'){
//      langField.style.height='1.6rem';

//     langRotate.style.transform='rotate(360deg)'
// }
//   })


$(document).mouseup(function (e)
{
  let container = $('#mobile-lang-changer');



  if (!container.is(e.target) &&container.has(e.target).length === 0)
  {
      mobLangField.style.height='5rem';
      if( mobLangRotate.style.transform==='rotate(180deg)'){
        mobLangRotate.style.transform='rotate(360deg)'
      }

  }
});










///////////////////////new 
const dropdownPartner = document.querySelector('.sign-partner-job-type-dropdown')
const dropdownInputBtn = document.querySelector('.partner-job-type-drop')

dropdownInputBtn.addEventListener('click',()=>{
  dropdownPartner.classList.toggle('sign-partner-job-type-dropdown-active')
})

const infoTech = document.querySelector('#info-tech')
const touristComp = document.querySelector('#tourist-comp')
const cultureComp = document.querySelector('#culture-comp')
const publicComp = document.querySelector('#public-comp')
const sales = document.querySelector('#sales')

const fieldsArray = [infoTech,touristComp,cultureComp,publicComp,sales]

fieldsArray.map((item)=>{
  item.addEventListener('click',()=>{
    dropdownInputBtn.value = '';
    dropdownInputBtn.value = item.innerHTML;
    dropdownPartner.classList.remove('sign-partner-job-type-dropdown-active')

  })
})

//////////drop 2
const dropdownPartnertype = document.querySelector('.sign-partner-service-type-dropdown')
const dropdownInputBtnPartnership = document.querySelector('.partner-partnership')

dropdownInputBtnPartnership.addEventListener('click',()=>{
  dropdownPartnertype.classList.toggle('sign-partner-service-type-dropdown-active')
})

const practice = document.querySelector('#practice-change')
const jobOffer = document.querySelector('#job-offer')
const serviceOrder = document.querySelector('#service-order')
const advert = document.querySelector('#advertisement')
const otherOffer = document.querySelector('#other-offer')

const fieldsArraydDrop2 = [practice,jobOffer,serviceOrder,advert]

fieldsArraydDrop2.map((item)=>{
  item.addEventListener('click',()=>{
    dropdownInputBtnPartnership.value = '';
    dropdownInputBtnPartnership.value = item.innerHTML;
    dropdownPartnertype.classList.remove('sign-partner-service-type-dropdown-active')
    document.querySelector('.appear-partner-input').style.display='none'

  })
})
otherOffer.addEventListener('click',()=>{
  dropdownInputBtnPartnership.value = '';
  dropdownInputBtnPartnership.value = otherOffer.innerHTML;
  dropdownPartnertype.classList.remove('sign-partner-service-type-dropdown-active')
  document.querySelector('.appear-partner-input').style.display='block'

})


//////////drop chool//////////
const dropdownSchool = document.querySelector('.school-type-dropdown')
const dropdownSchoolBtn = document.querySelector('.school-drop-btn')

dropdownSchoolBtn.addEventListener('click',()=>{
  dropdownSchool.classList.toggle('school-type-dropdown-active')
})

const shoolTeach = document.querySelector('#school-teaching')
const schoolPractice = document.querySelector('#school-practice')
const schoolJob = document.querySelector('#school-job')
const schoolOrder = document.querySelector('#school-services-order')
const schoolAd = document.querySelector('#school-advertisement')
const schoolOther = document.querySelector('#school-other') 

const schoolDropArr = [shoolTeach,schoolPractice,schoolJob,schoolOrder,schoolAd]

schoolDropArr.map((item)=>{
  item.addEventListener('click',()=>{
    dropdownSchoolBtn.value = '';
    dropdownSchoolBtn.value = item.innerHTML;
    dropdownSchool.classList.remove('school-type-dropdown-active')
    document.querySelector('.appear-school-input').style.display='none'

  })
})
schoolOther.addEventListener('click',()=>{
  dropdownSchoolBtn.value = '';
  dropdownSchoolBtn.value = schoolOther.innerHTML;
  dropdownSchool.classList.remove('school-type-dropdown-active')
  document.querySelector('.appear-school-input').style.display='block'

})

//////////drop freelancer//////////
const dropdownFreelancer = document.querySelector('.freelance-dropdown')
const dropdownFreelancerBtn = document.querySelector('.freelance-drop-btn')

dropdownFreelancerBtn.addEventListener('click',()=>{
  dropdownFreelancer.classList.toggle('freelance-dropdown-active')
})

const text1free = document.querySelector('#text1-free')
const text2free = document.querySelector('#text2-free')
const text3free = document.querySelector('#text3-free')
const text4free = document.querySelector('#text4-free')


const freelanceDropArr = [text1free,text2free,text3free]

freelanceDropArr.map((item)=>{
  item.addEventListener('click',()=>{
    dropdownFreelancerBtn.value = '';
    dropdownFreelancerBtn.value = item.innerHTML;
    dropdownFreelancer.classList.remove('freelance-dropdown-active')
    document.querySelector('.freelance-appear-input').style.display='none'
  })
})


text4free.addEventListener('click',()=>{
  dropdownFreelancerBtn.value = text4free.innerHTML;
    dropdownFreelancer.classList.remove('freelance-dropdown-active')
  document.querySelector('.freelance-appear-input').style.display='block'
})
///////////pick section


const student = document.querySelector('#student')
const school = document.querySelector('#school')
const teacher = document.querySelector('#teacher')
const freelancer = document.querySelector('#freelancer')
const partner = document.querySelector('#partner')
const guest = document.querySelector('#guest')

student.addEventListener('click',()=>{
  student.classList.add('pick-type-picked')
  school.classList.remove('pick-type-picked')
  teacher.classList.remove('pick-type-picked')
  freelancer.classList.remove('pick-type-picked')
  partner.classList.remove('pick-type-picked')
  guest.classList.remove('pick-type-picked')


})

school.addEventListener('click',()=>{
  school.classList.add('pick-type-picked')
  student.classList.remove('pick-type-picked')
  teacher.classList.remove('pick-type-picked')
  freelancer.classList.remove('pick-type-picked')
  partner.classList.remove('pick-type-picked')
  guest.classList.remove('pick-type-picked')


})
teacher.addEventListener('click',()=>{
  teacher.classList.add('pick-type-picked')
  school.classList.remove('pick-type-picked')
  student.classList.remove('pick-type-picked')
  freelancer.classList.remove('pick-type-picked')
  partner.classList.remove('pick-type-picked')
  guest.classList.remove('pick-type-picked')


})
freelancer.addEventListener('click',()=>{
  freelancer.classList.add('pick-type-picked')
  school.classList.remove('pick-type-picked')
  teacher.classList.remove('pick-type-picked')
  student.classList.remove('pick-type-picked')
  partner.classList.remove('pick-type-picked')
  guest.classList.remove('pick-type-picked')


})
partner.addEventListener('click',()=>{
  partner.classList.add('pick-type-picked')
  school.classList.remove('pick-type-picked')
  teacher.classList.remove('pick-type-picked')
  freelancer.classList.remove('pick-type-picked')
  student.classList.remove('pick-type-picked')
  guest.classList.remove('pick-type-picked')


})
guest.addEventListener('click',()=>{
  guest.classList.add('pick-type-picked')
  school.classList.remove('pick-type-picked')
  teacher.classList.remove('pick-type-picked')
  freelancer.classList.remove('pick-type-picked')
  partner.classList.remove('pick-type-picked')
  student.classList.remove('pick-type-picked')


})


const signAsBtn = document.querySelector('#sign-as')

const fieldSignAs = document.querySelector('.sign-type')
const fieldSignStudent = document.querySelector('#sign-student')
const fieldTeacher = document.querySelector('#sign-teacher')
const fieldPartner = document.querySelector('#sign-partner')
const fieldShool = document.querySelector('#sign-school')
const fieldFreelance = document.querySelector('#sign-freelancer')
const fieldGuest =  document.querySelector('#sign-guest')

signAsBtn.addEventListener('click',()=>{
  if(student.classList.contains('pick-type-picked')){
    fieldSignAs.style.display='none';
    fieldSignStudent.style.display='flex';
  }else if(teacher.classList.contains('pick-type-picked')){
    fieldSignAs.style.display='none';
    fieldTeacher.style.display='flex'

  }else if(partner.classList.contains('pick-type-picked')){
    fieldSignAs.style.display='none';
    fieldPartner.style.display='flex'

  }else if(school.classList.contains('pick-type-picked')){
    fieldSignAs.style.display='none';
    fieldShool.style.display='flex'

  }else if(freelancer.classList.contains('pick-type-picked')){
    fieldSignAs.style.display='none';
    fieldFreelance.style.display='flex'

  }else if(guest.classList.contains('pick-type-picked')){
    fieldSignAs.style.display='none';
    fieldGuest.style.display='flex'

  }
  
})









//////////////////radios options
const radio1 = document.querySelector('.fake-radio1')
const radio2 = document.querySelector('.fake-radio2')

radio1.addEventListener('click',()=>{
  radio1.classList.add('fake-radio-active')
  radio2.classList.remove('fake-radio-active')
})
radio2.addEventListener('click',()=>{
  radio2.classList.add('fake-radio-active')
  radio1.classList.remove('fake-radio-active')
})




document.querySelector('#cancel-global').addEventListener('click',()=>{
  loginFormHide(loginForm)
})
document.querySelector('#cancel-student').addEventListener('click',()=>{
  student.classList.remove('pick-type-picked');
  fieldSignStudent.style.display='none';
  loginFormHide(loginForm)

})
document.querySelector('#cancel-teacher').addEventListener('click',()=>{
  teacher.classList.remove('pick-type-picked');
  fieldTeacher.style.display='none';
  loginFormHide(loginForm)
})
document.querySelector('#cancel-partner').addEventListener('click',()=>{
  partner.classList.remove('pick-type-picked');
  fieldPartner.style.display='none';
  loginFormHide(loginForm)
})
document.querySelector('#cancel-school').addEventListener('click',()=>{
  school.classList.remove('pick-type-picked');
  fieldShool.style.display='none';
  loginFormHide(loginForm)
})
document.querySelector('#cancel-freelancer').addEventListener('click',()=>{
  freelancer.classList.remove('pick-type-picked');
  fieldFreelance.style.display='none';
  loginFormHide(loginForm)
})
document.querySelector('#cancel-guest').addEventListener('click',()=>{
  guest.classList.remove('pick-type-picked');
  fieldGuest.style.display='none';
  loginFormHide(loginForm)
})



const enterToAccBtn = document.querySelector('#enter-to-acc')
const signAcc = document.querySelector('#sign-acc')
const fieldEnter = document.querySelector('#enter-user')

enterToAccBtn.addEventListener('click',()=>{
  enterToAccBtn.classList.add('ent-active');
  signAcc.classList.remove('ent-active');

  student.classList.remove('pick-type-picked');
  fieldSignStudent.style.display='none';

  teacher.classList.remove('pick-type-picked');
  fieldTeacher.style.display='none';

  partner.classList.remove('pick-type-picked');
  fieldPartner.style.display='none';

  school.classList.remove('pick-type-picked');
  fieldShool.style.display='none';

  freelancer.classList.remove('pick-type-picked');
  fieldFreelance.style.display='none';

  guest.classList.remove('pick-type-picked');
  fieldGuest.style.display='none';

  fieldSignAs.style.display='none';

  fieldEnter.style.display='flex';

})


signAcc.addEventListener('click',()=>{
  enterToAccBtn.classList.remove('ent-active');
  signAcc.classList.add('ent-active');

  student.classList.remove('pick-type-picked');
  fieldSignStudent.style.display='none';

  teacher.classList.remove('pick-type-picked');
  fieldTeacher.style.display='none';

  partner.classList.remove('pick-type-picked');
  fieldPartner.style.display='none';

  school.classList.remove('pick-type-picked');
  fieldShool.style.display='none';

  freelancer.classList.remove('pick-type-picked');
  fieldFreelance.style.display='none';

  guest.classList.remove('pick-type-picked');
  fieldGuest.style.display='none';


  
  fieldEnter.style.display='none';
  fieldSignAs.style.display='flex';


})

function loginFormHide(item){
  student.classList.remove('pick-type-picked');
  fieldSignStudent.style.display='none';

  teacher.classList.remove('pick-type-picked');
  fieldTeacher.style.display='none';

  partner.classList.remove('pick-type-picked');
  fieldPartner.style.display='none';

  school.classList.remove('pick-type-picked');
  fieldShool.style.display='none';

  freelancer.classList.remove('pick-type-picked');
  fieldFreelance.style.display='none';

  guest.classList.remove('pick-type-picked');
  fieldGuest.style.display='none';
  

  fieldEnter.style.display='none';
  enterToAccBtn.classList.remove('ent-active');
  signAcc.classList.add('ent-active');

  item.style.display = 'none';
  //  document.body.style.overflowY = 'visible'
}



////////////////////////////////////phone inputs/////////////////////////////////////////////////////
$("#student-phone").intlTelInput({
  allowDropdown:true,
  excludeCountries: ['az','tr'],
  preferredCountries: ["am","ru" ],
  separateDialCode:true,
  });
  

$("#teacher-phone").intlTelInput({
  allowDropdown:true,
  excludeCountries: ['az','tr'],
  preferredCountries: ["am","ru" ],
  separateDialCode:true,
  });

$("#boss-phone").intlTelInput({
  allowDropdown:true,
  excludeCountries: ['az','tr'],
  preferredCountries: ["am","ru" ],
  separateDialCode:true,
  });

 $("#company-phone").intlTelInput({
  allowDropdown:true,
  excludeCountries: ['az','tr'],
  preferredCountries: ["am","ru" ],
  separateDialCode:true,
  });
  
$("#principal-phone").intlTelInput({
  allowDropdown:true,
  excludeCountries: ['az','tr'],
  preferredCountries: ["am","ru" ],
  separateDialCode:true,
  });
  
  $("#school-phone").intlTelInput({
    allowDropdown:true,
    excludeCountries: ['az','tr'],
    preferredCountries: ["am","ru" ],
    separateDialCode:true,
    });  
  

  $("#freelancer-phone").intlTelInput({
    allowDropdown:true,
    excludeCountries: ['az','tr'],
    preferredCountries: ["am","ru" ],
    separateDialCode:true,
    }); 

    $("#guest-phone").intlTelInput({
      allowDropdown:true,
      excludeCountries: ['az','tr'],
      preferredCountries: ["am","ru" ],
      separateDialCode:true,
      }); 












if(document.querySelector('.header-user')){
  document.querySelector('#header-user-dropdown').addEventListener('click',()=>{
    document.querySelector('.header-user-drop').classList.toggle('header-user-drop-active')
  })
  $(document).mouseup(function (e) {
    var userContainer = $('.header-user-drop');
    var userBtn = $('#header-user-dropdown');
  
    if (!userContainer.is(e.target) && !userBtn.is(e.target)) {
      userContainer[0].classList.remove('header-user-drop-active')
    }
  });
}

document.querySelector('#slide-up').disabled=true

let downIndex = 0;
document.querySelector('#slide-down').addEventListener('click',()=>{
  document.querySelector('#slide-up').disabled=false

  if( document.querySelector('.last-slider-item').getBoundingClientRect().top<=document.querySelector('#slide-down').getBoundingClientRect().top){
    document.querySelector('#slide-down').disabled=true

  }
downIndex-=3;
  document.querySelector('.main-menu-slider').style.transform=`translateY(${downIndex}rem)`;


})

document.querySelector('#slide-up').addEventListener('click',()=>{
  document.querySelector('#slide-down').disabled=false

    if( document.querySelector('.first-slider-item').getBoundingClientRect().top>=document.querySelector('#slide-up').getBoundingClientRect().top){
      document.querySelector('#slide-up').disabled=true

    }
    downIndex+=3;
    document.querySelector('.main-menu-slider').style.transform=`translateY(${downIndex}rem)`
  })

  $(function() {
    $('input[name="datetimes"]').daterangepicker({
      timePicker: true,
      startDate: moment().startOf('hour'),
      endDate: moment().startOf('hour').add(32, 'hour'),
      locale: {
        format: 'M/DD hh:mm A'
      }
    });
  });