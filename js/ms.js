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
    langBool = false;
    langRotate.style.transform='rotate(180deg)'

  }else{
    item.style.height='1.6rem';
    langBool = true;
    langRotate.style.transform='rotate(360deg)'
  }

}



$(document).mouseup(function (e)
{
    var container2 = $('#lang-changer');



    if (!container2.is(e.target) &&container2.has(e.target).length === 0)
    {
        langField.style.height='1.6rem';
        if( langRotate.style.transform==='rotate(180deg)'){
          langRotate.style.transform='rotate(360deg)'
        }

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
section2.classList.toggle('dark-mode');


section2Nat.classList.toggle('dark-mode');
sec1InputBg.forEach((item)=>item.classList.toggle('dark-mode'))
section2Inputs.forEach((item)=>item.classList.toggle('dark-mode'))
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
      section1ButtonBg.style.borderColor = "#fff";

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
    section3_card3.style.background = '#2A0054';
    section3_leg3.style.background = '#2A0054';

    ///mobile header
    mobHead.style.background='#110022'
    if (window.screen.width <= 450) {
    document.body.style.background = '#110022'
    section3_card3.style.background = '#110022'
    section3_leg3.style.background = '#110022'
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
      section1ButtonBg.style.borderColor = "#000";

      servicesSliderText.forEach((item)=>{
        item.style.color='#000'
      })

      //section 3
      darkbg.forEach((item) => {
      item.style.background = '#fff'
       })
      darkcolor.forEach(item => item.style.color = "#000");
      section3_card3.style.background = '#ffffff';
      section3_leg3.style.background = '#ffffff';
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







//////////////////////////mobile dark button
//   const testItem = document.getElementById('mobile-test-btn')
//   const mobileMenutest = document.querySelector('.mobile-header')
//   const headerT = document.querySelector('.header')
// if(screen.width<=450){
// headerT.removeChild(testItem)
//   mobileMenutest.appendChild(testItem)
// }else{

// headerT.appendChild(testItem)
// }








//natural & legal Person


//////////////////////////inputs border gradient//////////////////////////////
const nameInput1sec2leg = document.querySelector('#input1-leg');
const divBackgr1sec2leg = document.querySelector('.section2_iput_typeofactivity_input-leg');
const nameInput2sec2leg = document.querySelector('#input2-leg');
const divBackgr2sec2leg = document.querySelector('.section2_iput_typeofactivity_secton2_input-leg');
const nameInput3sec2leg = document.querySelector('#input3-leg');
const divBackgr3sec2leg = document.querySelector('.section2_iput_typeofactivity_section3_input-leg');
const nameInput4sec2leg = document.querySelector('#input4-leg');
const divBackgr4sec2leg = document.querySelector('.section2_iput_typeofactivity_i_have_a_website_input-leg');
const companyAdress = document.querySelector('#section2-input9');
const companyAdressBg = document.querySelector('#section2-input9-bg');
const bossName = document.querySelector('#section2-input10-name');
const bossNameBg = document.querySelector('#section2-input10-name-bg');
const bossSurename = document.querySelector('#section2-input10-surename');
const bossSurenameBg = document.querySelector('#section2-input10-surename-bg');
const bossPhone = document.querySelector('#section2-input10-phone');
const bossPhoneBg = document.querySelector('#section2-input10-phone-bg');
const bossMail = document.querySelector('#section2-input10-mail');
const bossMailBg = document.querySelector('#section2-input10-mail-bg');

nameInput1sec2leg.addEventListener('focus', () => {
  divBackgr1sec2leg.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

})
nameInput1sec2leg.addEventListener('blur', () => {
  divBackgr1sec2leg.style.background = 'gray';
})
nameInput2sec2leg.addEventListener('focus', () => {
  divBackgr2sec2leg.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

})
nameInput2sec2leg.addEventListener('blur', () => {
  divBackgr2sec2leg.style.background = 'gray';
})
nameInput3sec2leg.addEventListener('focus', () => {
  divBackgr3sec2leg.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

})
nameInput3sec2leg.addEventListener('blur', () => {
  divBackgr3sec2leg.style.background = 'gray';
})
nameInput4sec2leg.addEventListener('focus', () => {
  divBackgr4sec2leg.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

})
nameInput4sec2leg.addEventListener('blur', () => {
  divBackgr4sec2leg.style.background = 'gray';
})
/////////////////////////////////////
bossName.addEventListener('focus', () => {
  bossNameBg.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

})
bossName.addEventListener('blur', () => {
  bossNameBg.style.background = 'gray';
})
/////////////////////////////////////////
companyAdress.addEventListener('focus', () => {
  companyAdressBg.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

})
companyAdress.addEventListener('blur', () => {
  companyAdressBg.style.background = 'gray';
})
/////////////////////////////////////////
bossSurename.addEventListener('focus', () => {
  bossSurenameBg.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

})
bossSurename.addEventListener('blur', () => {
  bossSurenameBg.style.background = 'gray';
})
/////////////////////////////////////////
bossPhone.addEventListener('focus', () => {
  bossPhoneBg.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

})
bossPhone.addEventListener('blur', () => {
  bossPhoneBg.style.background = 'gray';
})
/////////////////////////////////////////
bossMail.addEventListener('focus', () => {
  bossMailBg.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

})
bossMail.addEventListener('blur', () => {
  bossMailBg.style.background = 'gray';
})
/////////////////////////////////////////









  const nameInput1sec2 = document.querySelector('#input1');
  const divBackgr1sec2 = document.querySelector('.section2_iput_typeofactivity_input');
  const nameInput2sec2 = document.querySelector('#input2');
  const divBackgr2sec2 = document.querySelector('.section2_iput_typeofactivity_secton2_input');
  const nameInput3sec2 = document.querySelector('#input3');
  const divBackgr3sec2 = document.querySelector('.section2_iput_typeofactivity_section3_input');
  const nameInput4sec2 = document.querySelector('#input4');
  const divBackgr4sec2 = document.querySelector('.section2_iput_typeofactivity_i_have_a_website_input');


  nameInput1sec2.addEventListener('focus', () => {
    divBackgr1sec2.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

  })
  nameInput1sec2.addEventListener('blur', () => {
    divBackgr1sec2.style.background = 'gray';
  })
  nameInput2sec2.addEventListener('focus', () => {
    divBackgr2sec2.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

  })
  nameInput2sec2.addEventListener('blur', () => {
    divBackgr2sec2.style.background = 'gray';
  })
  nameInput3sec2.addEventListener('focus', () => {
    divBackgr3sec2.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

  })
  nameInput3sec2.addEventListener('blur', () => {
    divBackgr3sec2.style.background = 'gray';
  })
  nameInput4sec2.addEventListener('focus', () => {
    divBackgr4sec2.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

  })
  nameInput4sec2.addEventListener('blur', () => {
    divBackgr4sec2.style.background = 'gray';
  })


// const nameInput = document.querySelector('.name-input');
// const phoneInput = document.querySelector('.phone-input');
// const nameInputBg = document.querySelector('.section1__freeAdvice-yourName');
// const phoneInputbg = document.querySelector('.section1__freeAdvice-yourPhone');
const formInput1 = document.querySelector('.section1CartBg-one')
const formInput2= document.querySelector('.section1CartBg-two')
const formInput3 = document.querySelector('.section1CartBg-three')
const formInput4 = document.querySelector('.section1CartBg-four')
const formInputsBg1 = document.querySelector('.section1__apply-input_one')
const formInputsBg2 = document.querySelector('.section1__apply-input_two')
const formInputsBg3 = document.querySelector('.section1__apply-input_three')
const formInputsBg4 = document.querySelector('.section1__apply-input_four')

// nameInput.addEventListener('focus',()=>{
//   nameInputBg.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
// })
// nameInput.addEventListener('blur',()=>{
//   nameInputBg.style.background = '#939393'
// })
// phoneInput.addEventListener('focus',()=>{
//   phoneInputbg.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
// })
// phoneInput.addEventListener('blur',()=>{
//   phoneInputbg.style.background = '#939393'
// })


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
  naturalPersonBtn.style.backgroundColor = "#4200CE";
    naturalPersonBtn.style.color = "#fff";
    if(!darkBool){
          legalPersonBtn.style.backgroundColor = "#efefef";
    legalPersonBtn.style.color = "#000";
    legalPersonBtn.style.border = "1px solid #000";
  }else{
              legalPersonBtn.style.backgroundColor = "#110022";
    legalPersonBtn.style.color = "#ffffff";
    legalPersonBtn.style.border = "1px solid #ffffff";
  }
page2.style.display='none'
  page2leg.style.display='none'
  page3.style.display='none'
  page3leg.style.display='none'
});

legalPersonBtn.addEventListener('click',()=>{
  natPerson.style.display = 'none'
  legPerson.style.display = 'block'
  legalPersonBtn.style.backgroundColor = "#4200CE";
  legalPersonBtn.style.color = "#fff";
        if(!darkBool){
          naturalPersonBtn.style.backgroundColor = "#efefef";
    naturalPersonBtn.style.color = "#000";
    naturalPersonBtn.style.border = "1px solid #000";
  }else{
              naturalPersonBtn.style.backgroundColor = "#110022";
    naturalPersonBtn.style.color = "#ffffff";
    naturalPersonBtn.style.border = "1px solid #ffffff";
  }
  page2.style.display='none'
  page2leg.style.display='none'
  page3.style.display='none'
  page3leg.style.display='none'
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
    var mobContainer = $('#search-field');
    var mobBtn = $('#search-ico')


    if (!mobContainer.is(e.target) && !mobBtn.is(e.target))
    {
        mobileInputAnimOff(mobileInput);
    }
});

///////////////////////////////////mobile-menu-btn//////////////////////////////////////

document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    if(screen.width <=425){
         document.querySelector('.mobile-menu-slider').classList.toggle('mobile-menu-slider-active');
    }

}


/////////////////////////section 3 //////////////////////////////////////////

  const nameInput4 = document.querySelector('#input_name4');
  const divBackgr4 = document.querySelector('.section3_mobail_input');

  const nameInput6 = document.querySelector('#input_name6');
  const divBackgr6 = document.querySelector('.section3_preferred_design_input_1');
  const nameInput7 = document.querySelector('#input_name7');
  const divBackgr7 = document.querySelector('.section3_preferred_design_input_2');


  nameInput4.addEventListener('focus', () => {
    divBackgr4.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

  })
  nameInput4.addEventListener('blur', () => {
    divBackgr4.style.background = 'gray';
  })

  nameInput6.addEventListener('focus', () => {
    divBackgr6.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
  })
  nameInput6.addEventListener('blur', () => {
    divBackgr6.style.background = 'gray';
  })

  nameInput7.addEventListener('focus', () => {
    divBackgr7.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

  })
  nameInput7.addEventListener('blur', () => {
    divBackgr7.style.background = 'gray';
  })


//   $(document).ready(function(){
//     $(".section3_type_choice1").click(function(){
//       $(".section3_type_your_choice1").css("display","block");
//       $(".section3_type_your_choice2").css("display","none");
//       $(".section3_type_your_choice3").css("display","none");
//       $(".section3_type_your_choice4").css("display","none");
//       $(".section3_type_your_choice5").css("display","none");
//       $(".section3_type_your_choice6").css("display","none");
//   });
//   $(".section3_type_choice2").click(function(){
//     $(".section3_type_your_choice1").css("display","none");
//     $(".section3_type_your_choice2").css("display","block");
//     $(".section3_type_your_choice3").css("display","none");
//     $(".section3_type_your_choice4").css("display","none");
//     $(".section3_type_your_choice5").css("display","none");
//     $(".section3_type_your_choice6").css("display","none");
// });
// $(".section3_type_choice3").click(function(){
//   $(".section3_type_your_choice1").css("display","none");
//   $(".section3_type_your_choice2").css("display","none");
//   $(".section3_type_your_choice3").css("display","block");
//   $(".section3_type_your_choice4").css("display","none");
//   $(".section3_type_your_choice5").css("display","none");
//   $(".section3_type_your_choice6").css("display","none");
// });
// $(".section3_type_choice4").click(function(){
//   $(".section3_type_your_choice1").css("display","none");
//   $(".section3_type_your_choice2").css("display","none");
//   $(".section3_type_your_choice3").css("display","none");
//   $(".section3_type_your_choice4").css("display","block");
//   $(".section3_type_your_choice5").css("display","none");
//   $(".section3_type_your_choice6").css("display","none");
// });
// $(".section3_type_choice5").click(function(){
//   $(".section3_type_your_choice1").css("display","none");
//   $(".section3_type_your_choice2").css("display","none");
//   $(".section3_type_your_choice3").css("display","none");
//   $(".section3_type_your_choice4").css("display","none");
//   $(".section3_type_your_choice5").css("display","block");
//   $(".section3_type_your_choice6").css("display","none");
// });
// $(".section3_type_choice6").click(function(){
//   $(".section3_type_your_choice1").css("display","none");
//   $(".section3_type_your_choice2").css("display","none");
//   $(".section3_type_your_choice3").css("display","none");
//   $(".section3_type_your_choice4").css("display","none");
//   $(".section3_type_your_choice5").css("display","none");
//   $(".section3_type_your_choice6").css("display","block");
// });
// $(".apply_as_buttone1").click(function(){
//   $(".apply_as_buttone1").css("background","#4200CF");
//   $(".apply_as_buttone1").css("color","#ffffff");
//   $(".apply_as_buttone2").css("background","#ffffff");
//   $(".apply_as_buttone2").css("color","#000000");
// });
// $(".apply_as_buttone2").click(function(){
//   $(".apply_as_buttone2").css("background","#4200CF");
//   $(".apply_as_buttone2").css("color","#ffffff");
//   $(".apply_as_buttone1").css("background","#ffffff");
//   $(".apply_as_buttone1").css("color","#000000");
// });
// $(".section3_language_choice").click(function(){
//   $(".dropdawn_lengvich").toggle();
// })
//  });


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


///prev buttons

const prev1leg = document.querySelector('#button-prev_1-leg')
const prev2leg = document.querySelector('#button-prev_2-leg')
const prev1 = document.querySelector('#button-prev_1')
const prev2 = document.querySelector('#button-prev_2')

///////////////////////////////////////////////////////////////////


const nextButton1 = document.getElementById('button-next_1-nat')
const nextButton1leg = document.getElementById('button-next_1-legal')
const nextButton2 = document.getElementById('button-next_2')
const nextButton2leg = document.getElementById('button-next_2-leg')

const page1 = document.querySelector('#naturalPersonCart')
const page1leg = document.querySelector('#legalPersonCart')
const page2 = document.querySelector('.section2-nat')
const page2leg = document.querySelector('.section2')
const page3 = document.querySelector('.section3_card3')
const page3leg = document.querySelector('#section3_leg3')





prev1.addEventListener('click',()=>{
  page1.style.display='block'
  page1leg.style.display = 'none'
    page2.style.display = 'none'
    page2leg.style.display = 'none'
    page3.style.display='none'
    page3leg.style.display='none'
})

prev1leg.addEventListener('click',()=>{
  page1.style.display='none'//
  page1leg.style.display='block'
    page2.style.display = 'none'
    page2leg.style.display = 'none'
    page3.style.display='none'
    page3leg.style.display='none'
})

prev2.addEventListener('click',()=>{
    if(sec2_leg_bossName.value.length>0){
       page1.style.display='none'//
  page1leg.style.display='none'
      page3.style.display='none'
      page3leg.style.display='none'
      page2.style.display = 'flex'
      page2leg.style.display = 'none'
    }else{
       page1.style.display='none'//
  page1leg.style.display='none'
      page2.style.display = 'flex'
      page2leg.style.display = 'none'
      page3.style.display='none'
      page3leg.style.display='none'
    }
  
})
prev2leg.addEventListener('click',()=>{
    if(sec2_leg_bossName.value.length>0){
      page3.style.display='none'
      page3leg.style.display='none'
      page2leg.style.display = 'flex'
      page2.style.display = 'none'
    }else{
      page2leg.style.display = 'flex'
      page2.style.display = 'none'
      page3.style.display='none'
      page3leg.style.display='none'
    }
  
})

  nextButton1.addEventListener('click',()=>{
    // if(sec1_nat_name.value.length>0 && sec1_nat_surename.value.length>0  && sec1_nat_phone.value.length>0  && sec1_nat_mail.value.length>0 ){
    page1.style.display='none'
    page2.style.display = 'flex'
    page3.style.display='none'
  // }
  })


nextButton1leg.addEventListener('click',()=>{
// if(sec1_leg_name.value.length>0  && sec1_leg_phone.value.length>0 && sec1_leg_mail.value.length>0 && sec1_leg_comp.value.length>0 ){
  page1leg.style.display='none'
  page2.style.display='none'
  page2leg.style.display = 'flex'
  page3.style.display='none'
  page3leg.style.display='none'
//  }
})


nextButton2.addEventListener('click',()=>{
  // if(sec2_name.value.length>0 && sec2_brandName.value.length>0){
  page1.style.display='none'
  page2.style.display = 'none'
  page3.style.display='block'
// }
})
nextButton2.addEventListener('click',()=>{
  // if(sec2_leg_name.value.length>0  && sec2_leg_brandName.value.length>0 && sec2_leg_adress.value.length>0 && sec2_leg_bossName.value.length>0
  //  && sec2_leg_bossSureName.value.length>0 && sec2_leg_bossPhone.value.length>0 && sec2_leg_bossMail.value.length>0 ){

  page1.style.display='none'
  page2leg.style.display = 'none'
  page3leg.style.display = 'none'
  page3.style.display='block'

  changeble1.innerHTML='9․ Օպերացիոն համակարգ (պլատֆորմ)'
  changeble3.innerHTML='10․ Լեզուների քանակը'
  changeble4.innerHTML='11․ Հավելվածի նպատակը'
  changeble6.innerHTML='12․ Նախնտրելի դիզայնի տարբերակ (Չունենալու դեպքում<br> կարող եք պատվիրել)'
// }
})
nextButton2leg.addEventListener('click',()=>{
  // if(sec2_name.value.length>0 && sec2_brandName.value.length>0){
  page1.style.display='none'
  page2.style.display = 'none'
  page3.style.display = 'none'
  page3leg.style.display='block'
// }
})
nextButton2leg.addEventListener('click',()=>{
  // if(sec2_leg_name.value.length>0  && sec2_leg_brandName.value.length>0 && sec2_leg_adress.value.length>0 && sec2_leg_bossName.value.length>0
  //  && sec2_leg_bossSureName.value.length>0 && sec2_leg_bossPhone.value.length>0 && sec2_leg_bossMail.value.length>0 ){

  page1.style.display='none'
  page2leg.style.display = 'none'
  page3.style.display = 'none'
  page3leg.style.display='block'

  changeble1.innerHTML='11․ Օպերացիոն համակարգ (պլատֆորմ)'
  changeble3.innerHTML='12․ Լեզուների քանակը'
  changeble4.innerHTML='13․ Հավելվածի նպատակը'
  changeble6.innerHTML='14․ Նախնտրելի դիզայնի տարբերակ (Չունենալու դեպքում<br> կարող եք պատվիրել)'
// }
})





///////////////////////lang dropdown
const langChooseBtn = document.querySelector('.section3_language_choice');
const langDropdown = document.querySelector('.laguage-dropdown');
const counter = document.querySelector('.counter')
const langContainer = document.querySelector('.selected-languages-container')

langChooseBtn.addEventListener('click',()=>{
  langDropdown.classList.toggle('lang-dropdown-active')
})

const arm = document.getElementById('arm')
const rus = document.getElementById('rus')
const eng = document.getElementById('eng')
const fra = document.getElementById('fra')
const germ = document.getElementById('germ')
const dutch = document.getElementById('dutch')
const spain = document.getElementById('spain')
const ital = document.getElementById('ital')
const arab = document.getElementById('arab')
const slav = document.getElementById('slav')
const czech = document.getElementById('czech')



let idGenerator = 0;
const langArr = [arm,rus,eng,fra,germ,dutch,spain,ital,arab,slav,czech]
const choosedArr = new Set();
const checkArrLang = []
langArr.map((item,i)=>{

  item.addEventListener('click',()=>{

    choosedArr.add(item)
    counter.innerHTML = choosedArr.size.toString()
    let newElem = document.createElement('div')
    newElem.classList.add('selected-language')
    newElem.innerHTML =`${item.innerHTML}` + `<i class='fa fa-times' aria-hidden='true'></i>`
    if(checkArrLang.length<choosedArr.size){
      newElem.id = `lang${idGenerator++}`

      checkArrLang.push(newElem)
      langContainer.appendChild(newElem)
      counter.innerHTML = checkArrLang.length

      newElem.addEventListener('click',()=>{
        console.log('click')
        newElem.style.display='none'
        let index= checkArrLang.indexOf(newElem)
        checkArrLang.splice(index,1)
        console.log(checkArrLang)
        counter.innerHTML = checkArrLang.length

      })

    }
  })
})

//
// let testElement = document.getElementById('lang0')
// if(testElement){
//   testElement.addEventListener('click',()=>{
//     console.log('cklick')
//     testElement.style.display='none'
//   })
// }
////////////////////////os langDropdown



///////////////////////lang dropdown
const osChooseBtn = document.querySelector('.section3_os_choice');
const osDropdown = document.querySelector('.os-dropdown');
const counterOs = document.querySelector('.counter-OS')
const osContainer = document.querySelector('.selected-os-container')

osChooseBtn.addEventListener('click',()=>{
  osDropdown.classList.toggle('os-dropdown-active')
})

const android = document.getElementById('android')
const ios = document.getElementById('ios')
const windows = document.getElementById('windows')




let idGeneratorOs = 0;
const osArr = [android,ios,windows]
const choosedOsArr = new Set();
const checkArrOs = []
osArr.map((item,i)=>{

  item.addEventListener('click',()=>{

    choosedOsArr.add(item)
    counterOs.innerHTML = choosedArr.size.toString()
    let newOsElem = document.createElement('div')
    newOsElem.classList.add('selected-os')
    newOsElem.innerHTML =`${item.innerHTML}` + `<i class='fa fa-times' aria-hidden='true'></i>`
    if(checkArrOs.length<choosedOsArr.size){
      newOsElem.id = `os${idGeneratorOs++}`

      checkArrOs.push(newOsElem)
      osContainer.appendChild(newOsElem)
      counterOs.innerHTML = checkArrOs.length

      newOsElem.addEventListener('click',()=>{
        console.log('click')
        newOsElem.style.display='none'
        let index= checkArrLang.indexOf(newOsElem)
        checkArrOs.splice(index,1)
        console.log(checkArrOs)
        counterOs.innerHTML = checkArrOs.length

      })

    }
  })
})


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
    document.body.style.overflowY = 'hidden'
  })
  closeBtn.addEventListener('click',()=>{
    freeAdvice.style.display = 'none';
    document.body.style.overflowY = 'visible'

  })