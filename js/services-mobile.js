////////////search field///////////////////////

let button = document.getElementById('search-ico');
let input = document.getElementById('search-field');
let srchpanel = document.querySelector('.search-panel');
let bool = true;
function anim(input) {
  if (bool) {
    input.style.width = '18rem';
    input.style.opacity = '1';
    button.style.paddingLeft = '.5rem';
    input.style.paddingLeft = '.4rem';
    input.style.paddingRight = '.4rem';
    srchpanel.style.width = '18rem';
    srchpanel.style.color = '#bfbfbf';
    srchpanel.style.background = '#fff';
    input.focus();
    bool = false;
  } else {
    input.style.width = '0';
    input.style.opacity = '0';
    button.style.paddingLeft = '0';
    input.style.paddingLeft = '0';
    srchpanel.style.width = '1.4rem';
    input.style.paddingRight = '0';
    srchpanel.style.color = '#fff';
    srchpanel.style.background = 'none';
    input.blur();
    bool = true;
  }
}
if (button) {
  button.addEventListener('click', function () {
    anim(input);
  });
}
function inputAnimOff(input) {
  input.style.width = '0';
  input.style.opacity = '0';
  button.style.paddingLeft = '0';
  input.style.paddingLeft = '0';
  srchpanel.style.width = '1.4rem';
  input.style.paddingRight = '0';
  srchpanel.style.color = '#fff';
  srchpanel.style.background = 'none';
  input.blur();
  bool = true;
}

$(document).mouseup(function (e) {
  var container = $('#search-field');
  var btn = $('#search-ico');

  if (!container.is(e.target) && !btn.is(e.target)) {
    inputAnimOff(input);
  }
});

///////////////lang change section/////////////////////////////////////

const langField = document.querySelector('.lang-wrapper');
const langBtn = document.querySelector('.header-lang-change');
const langRotate = document.getElementById('lang-rotate');
const armFlag = document.getElementById('arm-flag');
const rusFlag = document.getElementById('rus-flag');
const engFlag = document.getElementById('eng-flag');

armFlag.addEventListener('click', () => {
  armFlag.style.order = '1';
  rusFlag.style.order = '2';
  engFlag.style.order = '3';
});

rusFlag.addEventListener('click', () => {
  rusFlag.style.order = '1';
  armFlag.style.order = '2';
  engFlag.style.order = '3';
});

engFlag.addEventListener('click', () => {
  engFlag.style.order = '1';
  armFlag.style.order = '2';
  rusFlag.style.order = '3';
});

let langBool = true;

langBtn.addEventListener('click', () => {
  langAnim(langField);
});

function langAnim(item) {
  if (item.style.height == '1.6rem') {
    item.style.height = '6rem';
    item.style.background = '#2a0745';
    langBool = false;
    // langRotate.style.transform='rotate(180deg)'
  } else {
    item.style.height = '1.6rem';
    langBool = true;
    item.style.background = 'none';
    // langRotate.style.transform='rotate(360deg)'
  }
}

$(document).mouseup(function (e) {
  var container2 = $('#lang-changer');

  if (!container2.is(e.target) && container2.has(e.target).length === 0) {
    langField.style.background = 'none';
    langField.style.height = '1.6rem';
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
const servicesSliderText = document.querySelectorAll('.wrap-slide-text');

//section1
const whiteText = document.querySelectorAll('.whiteText');
const section1CartBg = document.querySelectorAll('.section1CartBg');
const section1InputBg = document.querySelectorAll('.section1InputBg');
const section1ButtonBg = document.querySelector('.section1ButtonBg');
const sec1InputBg = document.querySelectorAll('.sec1-input-bg');

//section 3
const section3_card3 = document.querySelector('.section3_card3');
const section3_leg3 = document.querySelector('#section3_leg3');
const darkcolor = document.querySelectorAll('.dark');
const darkbg = document.querySelectorAll('.darkbg');

//mobile header
const mobHead = document.querySelector('.mobile-header');
//section 2
const section2 = document.querySelector('.section2');
const section2Inputs = document.querySelectorAll('.section2-input');
const section2Nat = document.querySelector('.section2-nat');

let darkBool = false;

themeBtnRound.addEventListener('click', () => {
  section2.classList.toggle('dark-mode');
  document.querySelector('.section1__apply-naturalPerson').classList.toggle('dark-btn');
  document.querySelector('.section1__apply-legalPerson').classList.toggle('dark-btn');
  document.querySelector('.header-user-drop').classList.toggle('header-user-drop-active-dark');
  document.querySelector('.log-out').classList.toggle('user-exit-dark-btn');


  section2Nat.classList.toggle('dark-mode');
  sec1InputBg.forEach((item) => item.classList.toggle('dark-mode'));
  section2Inputs.forEach((item) => item.classList.toggle('dark-mode'));
  if (themeBtnRound.style.right === '') {
    darkBool = true;
    themeBtnRound.style.right = '1.45rem';
    themeBtnRound.style.background = '#fff';
    themeMainBtn.style.background = '#0A0935';
    themeMainBtn.style.color = '#fff';

    mainInner.style.background = '#110022';
    servicesSliderBg.style.background = '#000';
    servicesSliderBg.style.color = '#fff';
    facultiesSliderBg.style.background = '#000';
    facultiesSliderBg.style.color = '#fff';

    //section1
    whiteText.forEach((item) => (item.style.color = '#fff'));
    section1CartBg.forEach((item) => {
      item.style.backgroundColor = '#2A0054';
      item.style.color = '#fff';
    });

    section1InputBg.forEach((item) => {
      item.style.backgroundColor = '#110022';
      item.style.color = '#fff';
    });
    // section1ButtonBg.style.borderColor = "#fff";

    servicesSliderText.forEach((item) => {
      item.style.color = '#fff';
    });

    ///section 3
    darkcolor.forEach((item) => {
      item.style.color = '#fff';
    });
    darkbg.forEach((item) => {
      item.style.background = 'rgb(42, 0, 84)';
    });
    darkbg.forEach((item) => {
      item.style.color = '#fff';
    });
    section3_card3.style.background = '#2A0054';
    section3_leg3.style.background = '#2A0054';

    ///mobile header
    mobHead.style.background = '#110022';
    if (window.screen.width <= 450) {
      document.body.style.background = '#110022';
      section3_card3.style.background = '#110022';
      section3_leg3.style.background = '#110022';
      darkbg.forEach((item) => {
        item.style.background = '#110022';
      });
    }
  } else {
    themeBtnRound.style.right = '';
    darkBool = false;
    themeBtnRound.style.background = '#0A0935';
    themeMainBtn.style.background = '#fff';
    themeMainBtn.style.color = '#0A0935';

    mainInner.style.background = '#fff';
    servicesSliderBg.style.background = '#fff';
    servicesSliderBg.style.color = '#000';
    facultiesSliderBg.style.background = '#fff';
    facultiesSliderBg.style.color = '#000';

    //section1
    whiteText.forEach((item) => (item.style.color = '#000'));
    section1CartBg.forEach((item) => {
      item.style.backgroundColor = '#fff';
      item.style.color = '#000';
    });
    section1InputBg.forEach((item) => {
      item.style.backgroundColor = '#fff';
      item.style.color = '#000';
    });
    // section1ButtonBg.style.borderColor = "#000";

    servicesSliderText.forEach((item) => {
      item.style.color = '#000';
    });

    //section 3
    darkbg.forEach((item) => {
      item.style.background = '#fff';
    });
    darkcolor.forEach((item) => (item.style.color = '#000'));
    section3_card3.style.background = '#ffffff';
    section3_leg3.style.background = '#ffffff';
    darkbg.forEach((item) => {
      item.style.color = '#000';
    });

    ///mobile header
    mobHead.style.background = '#fff';
    if (window.screen.width <= 450) {
      document.body.style.background = '#fff';
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
const divBackgr3sec2leg = document.querySelector(
  '.section2_iput_typeofactivity_section3_input-leg',
);
const nameInput4sec2leg = document.querySelector('#input4-leg');
const divBackgr4sec2leg = document.querySelector(
  '.section2_iput_typeofactivity_i_have_a_website_input-leg',
);
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
  divBackgr1sec2leg.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)';
});
nameInput1sec2leg.addEventListener('blur', () => {
  divBackgr1sec2leg.style.background = 'gray';
});
nameInput2sec2leg.addEventListener('focus', () => {
  divBackgr2sec2leg.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)';
});
nameInput2sec2leg.addEventListener('blur', () => {
  divBackgr2sec2leg.style.background = 'gray';
});
// nameInput3sec2leg.addEventListener('focus', () => {
//   divBackgr3sec2leg.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

// })
// nameInput3sec2leg.addEventListener('blur', () => {
//   divBackgr3sec2leg.style.background = 'gray';
// })
// nameInput4sec2leg.addEventListener('focus', () => {
//   divBackgr4sec2leg.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

// })
// nameInput4sec2leg.addEventListener('blur', () => {
//   divBackgr4sec2leg.style.background = 'gray';
// })
/////////////////////////////////////
bossName.addEventListener('focus', () => {
  bossNameBg.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)';
});
bossName.addEventListener('blur', () => {
  bossNameBg.style.background = 'gray';
});
/////////////////////////////////////////
companyAdress.addEventListener('focus', () => {
  companyAdressBg.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)';
});
companyAdress.addEventListener('blur', () => {
  companyAdressBg.style.background = 'gray';
});
/////////////////////////////////////////
bossSurename.addEventListener('focus', () => {
  bossSurenameBg.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)';
});
bossSurename.addEventListener('blur', () => {
  bossSurenameBg.style.background = 'gray';
});
/////////////////////////////////////////
bossPhone.addEventListener('focus', () => {
  bossPhoneBg.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)';
});
bossPhone.addEventListener('blur', () => {
  bossPhoneBg.style.background = 'gray';
});
/////////////////////////////////////////
bossMail.addEventListener('focus', () => {
  bossMailBg.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)';
});
bossMail.addEventListener('blur', () => {
  bossMailBg.style.background = 'gray';
});
/////////////////////////////////////////

const nameInput1sec2 = document.querySelector('#input1');
const divBackgr1sec2 = document.querySelector('.section2_iput_typeofactivity_input');
const nameInput2sec2 = document.querySelector('#input2');
const divBackgr2sec2 = document.querySelector('.section2_iput_typeofactivity_secton2_input');
const nameInput3sec2 = document.querySelector('#input3');
const divBackgr3sec2 = document.querySelector('.section2_iput_typeofactivity_section3_input');
const nameInput4sec2 = document.querySelector('#input4');
const divBackgr4sec2 = document.querySelector(
  '.section2_iput_typeofactivity_i_have_a_website_input',
);

nameInput1sec2.addEventListener('focus', () => {
  divBackgr1sec2.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)';
});
nameInput1sec2.addEventListener('blur', () => {
  divBackgr1sec2.style.background = 'gray';
});
nameInput2sec2.addEventListener('focus', () => {
  divBackgr2sec2.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)';
});
nameInput2sec2.addEventListener('blur', () => {
  divBackgr2sec2.style.background = 'gray';
});
// nameInput3sec2.addEventListener('focus', () => {
//   divBackgr3sec2.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

// })
// nameInput3sec2.addEventListener('blur', () => {
//   divBackgr3sec2.style.background = 'gray';
// })
// nameInput4sec2.addEventListener('focus', () => {
//   divBackgr4sec2.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

// })
// nameInput4sec2.addEventListener('blur', () => {
//   divBackgr4sec2.style.background = 'gray';
// })

// const nameInput = document.querySelector('.name-input');
// const phoneInput = document.querySelector('.phone-input');
// const nameInputBg = document.querySelector('.section1__freeAdvice-yourName');
// const phoneInputbg = document.querySelector('.section1__freeAdvice-yourPhone');
const formInput1 = document.querySelector('.section1CartBg-one');
const formInput2 = document.querySelector('.section1CartBg-two');
const formInput3 = document.querySelector('.section1CartBg-three');
const formInput4 = document.querySelector('.section1CartBg-four');
const formInputsBg1 = document.querySelector('.section1__apply-input_one');
const formInputsBg2 = document.querySelector('.section1__apply-input_two');
const formInputsBg3 = document.querySelector('.section1__apply-input_three');
const formInputsBg4 = document.querySelector('.section1__apply-input_four');

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

formInput1.addEventListener('focus', () => {
  formInputsBg1.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)';
});
formInput1.addEventListener('blur', () => {
  formInputsBg1.style.background = '#939393';
});

formInput2.addEventListener('focus', () => {
  formInputsBg2.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)';
});
formInput2.addEventListener('blur', () => {
  formInputsBg2.style.background = '#939393';
});

formInput3.addEventListener('focus', () => {
  formInputsBg3.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)';
});
formInput3.addEventListener('blur', () => {
  formInputsBg3.style.background = '#939393';
});

formInput4.addEventListener('focus', () => {
  formInputsBg4.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)';
});
formInput4.addEventListener('blur', () => {
  formInputsBg4.style.background = '#939393';
});

const formInput1Nat = document.querySelector('.section1CartBg-nat-one');
const formInput2Nat = document.querySelector('.section1CartBg-nat-two');
const formInput3Nat = document.querySelector('.section1CartBg-nat-three');
const formInput4Nat = document.querySelector('.section1CartBg-nat-four');
const formInputsBg1Nat = document.querySelector('.section1__apply-input_nat-one');
const formInputsBg2Nat = document.querySelector('.section1__apply-input_nat-two');
const formInputsBg3Nat = document.querySelector('.section1__apply-input_nat-three');
const formInputsBg4Nat = document.querySelector('.section1__apply-input_nat-four');

formInput1Nat.addEventListener('focus', () => {
  formInputsBg1Nat.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)';
});
formInput1Nat.addEventListener('blur', () => {
  formInputsBg1Nat.style.background = '#939393';
});

formInput2Nat.addEventListener('focus', () => {
  formInputsBg2Nat.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)';
});
formInput2Nat.addEventListener('blur', () => {
  formInputsBg2Nat.style.background = '#939393';
});

formInput3Nat.addEventListener('focus', () => {
  formInputsBg3Nat.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)';
});
formInput3Nat.addEventListener('blur', () => {
  formInputsBg3Nat.style.background = '#939393';
});

formInput4Nat.addEventListener('focus', () => {
  formInputsBg4Nat.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)';
});
formInput4Nat.addEventListener('blur', () => {
  formInputsBg4Nat.style.background = '#939393';
});
///////////////////////////////////////////card profile change/////////////////////////////////

const naturalPersonBtn = document.querySelector('#naturalPersonBtn');
const legalPersonBtn = document.querySelector('#legalPersonBtn');
const natPerson = document.getElementById('naturalPersonCart');
const legPerson = document.getElementById('legalPersonCart');

naturalPersonBtn.addEventListener('click', () => {
  natPerson.style.display = 'block';
  legPerson.style.display = 'none';
  naturalPersonBtn.classList.add('active-btn');
  legalPersonBtn.classList.remove('active-btn');

  if (!darkBool) {
    //       legalPersonBtn.style.backgroundColor = "#efefef";
    // legalPersonBtn.style.color = "#000";
    // legalPersonBtn.style.border = "1px solid #000";
  } else {
    //           legalPersonBtn.style.backgroundColor = "#110022";
    // legalPersonBtn.style.color = "#ffffff";
    // legalPersonBtn.style.border = "1px solid #ffffff";
  }
  page2.style.display = 'none';
  page2leg.style.display = 'none';
  page3.style.display = 'none';
  page3leg.style.display = 'none';
});

legalPersonBtn.addEventListener('click', () => {
  natPerson.style.display = 'none';
  legPerson.style.display = 'block';
  legalPersonBtn.classList.add('active-btn');
  naturalPersonBtn.classList.remove('active-btn');

  if (!darkBool) {
    //  naturalPersonBtn.style.backgroundColor = "#efefef";
    //  naturalPersonBtn.style.color = "#000";
    //  naturalPersonBtn.style.border = "1px solid #000";
  } else {
    //           naturalPersonBtn.style.backgroundColor = "#110022";
    // naturalPersonBtn.style.color = "#ffffff";
    // naturalPersonBtn.style.border = "1px solid #ffffff";
  }
  page2.style.display = 'none';
  page2leg.style.display = 'none';
  page3.style.display = 'none';
  page3leg.style.display = 'none';
});

////////////////////////////////////////////mobile search field////////////////////////////////
let mobileButton = document.getElementById('mobile-search-ico');
let mobileInput = document.getElementById('mobile-search-field');
let mobileSrchpanel = document.querySelector('.mobile-search-panel');
let mobileBool = true;
function mobileAnim(input) {
  if (mobileBool) {
    input.style.width = '25rem';
    input.style.opacity = '1';
    mobileButton.style.paddingLeft = '.5rem';
    input.style.paddingLeft = '.4rem';
    input.style.paddingRight = '.4rem';
    mobileSrchpanel.style.width = '30rem';
    mobileSrchpanel.style.color = '#bfbfbf';
    mobileSrchpanel.style.background = '#fff';
    input.focus();
    mobileBool = false;
  } else {
    input.style.width = '0';
    input.style.opacity = '0';
    mobileButton.style.paddingLeft = '0';
    input.style.paddingLeft = '0';
    mobileSrchpanel.style.width = '4.5rem';
    input.style.paddingRight = '0';
    mobileSrchpanel.style.color = '#fff';
    mobileSrchpanel.style.background = 'none';
    input.blur();
    mobileBool = true;
  }
}
if (mobileButton) {
  mobileButton.addEventListener('click', function () {
    mobileAnim(mobileInput);
  });
}
function mobileInputAnimOff(input) {
  input.style.width = '0';
  input.style.opacity = '0';
  mobileButton.style.paddingLeft = '0';
  input.style.paddingLeft = '0';
  mobileSrchpanel.style.width = '4.5rem';
  input.style.paddingRight = '0';
  mobileSrchpanel.style.color = '#fff';
  mobileSrchpanel.style.background = 'none';
  input.blur();
  mobileBool = true;
}

$(document).mouseup(function (e) {
  var mobContainer = $('#mobile-search-field');
  var mobBtn = $('#mobile-search-ico');

  if (!mobContainer.is(e.target) && !mobBtn.is(e.target)) {
    mobileInputAnimOff(mobileInput);
  }
});

/////////////////////////section 3 //////////////////////////////////////////

const nameInput4 = document.querySelector('#input_name4');
const divBackgr4 = document.querySelector('.section3_mobail_input');
const nameInput4_1 = document.querySelector('#input_name4-1');
const divBackgr4_1 = document.querySelector('.section3_mobail_input-1');
const nameInput6 = document.querySelector('#input_name6');
const divBackgr6 = document.querySelector('.section3_preferred_design_input_1');
const nameInput6_1 = document.querySelector('#input_name6-1');
const divBackgr6_1 = document.querySelector('.section3_preferred_design_input_1-1');
const nameInput7 = document.querySelector('#input_name7');
const divBackgr7 = document.querySelector('.section3_preferred_design_input_2');

const nameInput7_1 = document.querySelector('#input_name7-1');
const divBackgr7_1 = document.querySelector('.section3_preferred_design_input_2-1');
nameInput4.addEventListener('focus', () => {
  divBackgr4.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)';
});
nameInput4_1.addEventListener('focus', () => {
  divBackgr4_1.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)';
});
nameInput4.addEventListener('blur', () => {
  divBackgr4.style.background = 'gray';
});
nameInput4_1.addEventListener('blur', () => {
  divBackgr4_1.style.background = 'gray';
});

nameInput6.addEventListener('focus', () => {
  divBackgr6.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)';
});
nameInput6.addEventListener('blur', () => {
  divBackgr6.style.background = 'gray';
});
nameInput6_1.addEventListener('focus', () => {
  divBackgr6_1.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)';
});
nameInput6_1.addEventListener('blur', () => {
  divBackgr6_1.style.background = 'gray';
});

nameInput7.addEventListener('focus', () => {
  divBackgr7.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)';
});
nameInput7.addEventListener('blur', () => {
  divBackgr7.style.background = 'gray';
});
nameInput7_1.addEventListener('focus', () => {
  divBackgr7_1.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)';
});
nameInput7_1.addEventListener('blur', () => {
  divBackgr7_1.style.background = 'gray';
});

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
const sec1_nat_name = document.getElementById('section1_nat_name');
const sec1_nat_surename = document.getElementById('section1_nat_surename');
const sec1_nat_phone = document.getElementById('section1_nat_phone');
const sec1_nat_mail = document.getElementById('section1_nat_mail');
const sec1_leg_name = document.getElementById('section1_leg_name');
const sec1_leg_phone = document.getElementById('section1_leg_phone');
const sec1_leg_mail = document.getElementById('section1_leg_mail');
const sec1_leg_comp = document.getElementById('section1_leg_comp');

//section 2 inputs ////////////

const sec2_name = document.getElementById('input1');
const sec2_brandName = document.getElementById('input1');

const sec2_leg_name = document.getElementById('input1-leg');
const sec2_leg_brandName = document.getElementById('input2-leg');
const sec2_leg_adress = document.getElementById('section2-input9');
const sec2_leg_bossName = document.getElementById('section2-input10-name');
const sec2_leg_bossSureName = document.getElementById('section2-input10-surename');
const sec2_leg_bossPhone = document.getElementById('section2-input10-phone');
const sec2_leg_bossMail = document.getElementById('section2-input10-mail');

let changeble1 = document.querySelector('.changebleText1');

let changeble3 = document.querySelector('.changebleText3');
let changeble4 = document.querySelector('.changebleText4');
let changeble6 = document.querySelector('.changebleText6');

///prev buttons

const prev1leg = document.querySelector('#button-prev_1-leg');
const prev2leg = document.querySelector('#button-prev_2-leg');
const prev1 = document.querySelector('#button-prev_1');
const prev2 = document.querySelector('#button-prev_2');

///////////////////////////////////////////////////////////////////

const nextButton1 = document.getElementById('button-next_1-nat');
const nextButton1leg = document.getElementById('button-next_1-legal');
const nextButton2 = document.getElementById('button-next_2');
const nextButton2leg = document.getElementById('button-next_2-leg');

const page1 = document.querySelector('#naturalPersonCart');
const page1leg = document.querySelector('#legalPersonCart');
const page2 = document.querySelector('.section2-nat');
const page2leg = document.querySelector('.section2');
const page3 = document.querySelector('.section3_card3');
const page3leg = document.querySelector('#section3_leg3');

prev1.addEventListener('click', () => {
  page1.style.display = 'block';
  page1leg.style.display = 'none';
  page2.style.display = 'none';
  page2leg.style.display = 'none';
  page3.style.display = 'none';
  page3leg.style.display = 'none';
});

prev1leg.addEventListener('click', () => {
  page1.style.display = 'none'; //
  page1leg.style.display = 'block';
  page2.style.display = 'none';
  page2leg.style.display = 'none';
  page3.style.display = 'none';
  page3leg.style.display = 'none';
});

prev2.addEventListener('click', () => {
  if (sec2_leg_bossName.value.length > 0) {
    page1.style.display = 'none'; //
    page1leg.style.display = 'none';
    page3.style.display = 'none';
    page3leg.style.display = 'none';
    page2.style.display = 'flex';
    page2leg.style.display = 'none';
  } else {
    page1.style.display = 'none'; //
    page1leg.style.display = 'none';
    page2.style.display = 'flex';
    page2leg.style.display = 'none';
    page3.style.display = 'none';
    page3leg.style.display = 'none';
  }
});
prev2leg.addEventListener('click', () => {
  if (sec2_leg_bossName.value.length > 0) {
    page3.style.display = 'none';
    page3leg.style.display = 'none';
    page2leg.style.display = 'flex';
    page2.style.display = 'none';
  } else {
    page2leg.style.display = 'flex';
    page2.style.display = 'none';
    page3.style.display = 'none';
    page3leg.style.display = 'none';
  }
});

nextButton1.addEventListener('click', () => {
  // if(sec1_nat_name.value.length>0 && sec1_nat_surename.value.length>0  && sec1_nat_phone.value.length>0  && sec1_nat_mail.value.length>0 ){
  page1.style.display = 'none';
  page2.style.display = 'flex';
  page3.style.display = 'none';
  // }
});

nextButton1leg.addEventListener('click', () => {
  // if(sec1_leg_name.value.length>0  && sec1_leg_phone.value.length>0 && sec1_leg_mail.value.length>0 && sec1_leg_comp.value.length>0 ){
  page1leg.style.display = 'none';
  page2.style.display = 'none';
  page2leg.style.display = 'flex';
  page3.style.display = 'none';
  page3leg.style.display = 'none';
  //  }
});

nextButton2.addEventListener('click', () => {
  // if(sec2_name.value.length>0 && sec2_brandName.value.length>0){
  page1.style.display = 'none';
  page2.style.display = 'none';
  page3.style.display = 'block';
  // }
});
nextButton2.addEventListener('click', () => {
  // if(sec2_leg_name.value.length>0  && sec2_leg_brandName.value.length>0 && sec2_leg_adress.value.length>0 && sec2_leg_bossName.value.length>0
  //  && sec2_leg_bossSureName.value.length>0 && sec2_leg_bossPhone.value.length>0 && sec2_leg_bossMail.value.length>0 ){

  page1.style.display = 'none';
  page2leg.style.display = 'none';
  page3leg.style.display = 'none';
  page3.style.display = 'block';

  changeble1.innerHTML = '9․ Օպերացիոն համակարգ (պլատֆորմ)';
  changeble3.innerHTML = '10․ Լեզուների քանակը';
  changeble4.innerHTML = '11․ Հավելվածի նպատակը';
  changeble6.innerHTML =
    '12․ Նախնտրելի դիզայնի տարբերակ (Չունենալու դեպքում<br> կարող եք պատվիրել)';
  // }
});
nextButton2leg.addEventListener('click', () => {
  // if(sec2_name.value.length>0 && sec2_brandName.value.length>0){
  page1.style.display = 'none';
  page2.style.display = 'none';
  page3.style.display = 'none';
  page3leg.style.display = 'block';
  // }
});
nextButton2leg.addEventListener('click', () => {
  // if(sec2_leg_name.value.length>0  && sec2_leg_brandName.value.length>0 && sec2_leg_adress.value.length>0 && sec2_leg_bossName.value.length>0
  //  && sec2_leg_bossSureName.value.length>0 && sec2_leg_bossPhone.value.length>0 && sec2_leg_bossMail.value.length>0 ){

  page1.style.display = 'none';
  page2leg.style.display = 'none';
  page3.style.display = 'none';
  page3leg.style.display = 'block';

  changeble1.innerHTML = '11․ Օպերացիոն համակարգ (պլատֆորմ)';
  changeble3.innerHTML = '12․ Լեզուների քանակը';
  changeble4.innerHTML = '13․ Հավելվածի նպատակը';
  changeble6.innerHTML =
    '14․ Նախնտրելի դիզայնի տարբերակ (Չունենալու դեպքում<br> կարող եք պատվիրել)';
  // }
});

///////////////////////lang dropdown
const langChooseBtn = document.querySelector('.section3_language_choice');
const langChooseBtn1 = document.querySelector('.section3_language_choice1');
const langDropdown = document.querySelector('.laguage-dropdown');
const langDropdown1 = document.querySelector('.laguage-dropdown1');
const counter = document.querySelector('.counter');
const counter1 = document.querySelector('.counter1');
const langContainer = document.querySelector('.selected-languages-container');
const langContainer1 = document.querySelector('.selected-languages-container1');

langChooseBtn.addEventListener('click', () => {
  langDropdown.classList.toggle('lang-dropdown-active');
});
langChooseBtn1.addEventListener('click', () => {
  langDropdown1.classList.toggle('lang-dropdown-active');
});
const arm = document.getElementById('arm');
const rus = document.getElementById('rus');
const eng = document.getElementById('eng');
const fra = document.getElementById('fra');
const germ = document.getElementById('germ');
const dutch = document.getElementById('dutch');
const spain = document.getElementById('spain');
const ital = document.getElementById('ital');
const arab = document.getElementById('arab');
const slav = document.getElementById('slav');
const czech = document.getElementById('czech');
const arm1 = document.getElementById('arm1');
const rus1 = document.getElementById('rus1');
const eng1 = document.getElementById('eng1');
const fra1 = document.getElementById('fra1');
const germ1 = document.getElementById('germ1');
const dutch1 = document.getElementById('dutch1');
const spain1 = document.getElementById('spain1');
const ital1 = document.getElementById('ital1');
const arab1 = document.getElementById('arab1');
const slav1 = document.getElementById('slav1');
const czech1 = document.getElementById('czech1');

const hiddenInputLang = document.querySelector('.selected-languages-hidden-input');
let testInputArray = [];

const hiddenInputLang1 = document.querySelector('.selected-languages-hidden-input1');
let testInputArray1 = [];

const langArr = [arm, rus, eng, fra, germ, dutch, spain, ital, arab, slav, czech];
const langArr1 = [arm1, rus1, eng1, fra1, germ1, dutch1, spain1, ital1, arab1, slav1, czech1];
let langChoosedArray = [];
let langRender = [];
let langChoosedArray1 = [];
let langRender1 = [];

// nat
langArr.map((item, i) => {
  item.addEventListener('click', () => {
    if (!langChoosedArray.includes(item)) {
      langChoosedArray.push(item);
      let newElem = document.createElement('div');
      newElem.classList.add('selected-language');
      ////////////////////////
      testInputArray.push(item.innerHTML);
      hiddenInputLang.value = testInputArray.join(',');
      ////////////////////////
      newElem.innerHTML = `${item.innerHTML}` + `<i class='fa fa-times' aria-hidden='true'></i>`;
      langRender.push(newElem);
      langRender.map((elem, index) => {
        langContainer.appendChild(elem);
        counter.innerHTML = langRender.length.toString();
        elem.addEventListener('click', () => {
          if (langRender.includes(elem)) {
            let a = langRender.indexOf(elem);
            langRender.splice(a, 1);
            langChoosedArray.splice(a, 1);
            counter.innerHTML = langRender.length.toString();
            ////////////////////////
            testInputArray.splice(a, 1);
            hiddenInputLang.value = testInputArray.join(',');
            ////////////////////////
          }
          if (langContainer.contains(elem)) {
            langContainer.removeChild(elem);
          }
        });
      });
    }
  });
});
// leg start
langArr1.map((item, i) => {
  item.addEventListener('click', () => {
    if (!langChoosedArray1.includes(item)) {
      langChoosedArray1.push(item);
      let newElem = document.createElement('div');
      newElem.classList.add('selected-language');
      ////////////////////////
      testInputArray1.push(item.innerHTML);
      hiddenInputLang1.value = testInputArray1.join(',');
      ////////////////////////
      newElem.innerHTML = `${item.innerHTML}` + `<i class='fa fa-times' aria-hidden='true'></i>`;
      langRender1.push(newElem);
      langRender1.map((elem, index) => {
        langContainer1.appendChild(elem);
        counter1.innerHTML = langRender1.length.toString();
        elem.addEventListener('click', () => {
          if (langRender1.includes(elem)) {
            let a = langRender1.indexOf(elem);
            langRender1.splice(a, 1);
            langChoosedArray1.splice(a, 1);
            counter1.innerHTML = langRender1.length.toString();
            ////////////////////////
            testInputArray1.splice(a, 1);
            hiddenInputLang1.value = testInputArray1.join(',');
            ////////////////////////
          }
          if (langContainer1.contains(elem)) {
            langContainer1.removeChild(elem);
          }
        });
      });
    }
  });
});
// leg end
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
const osChooseBtn1 = document.querySelector('.section3_os_choice1');
const osDropdown = document.querySelector('.os-dropdown');
const osDropdown1 = document.querySelector('.os-dropdown1');
const counterOs = document.querySelector('.counter-OS');
const counterOs1 = document.querySelector('.counter-OS1');
const osContainer = document.querySelector('.selected-os-container');
const osContainer1 = document.querySelector('.selected-os-container1');

osChooseBtn.addEventListener('click', () => {
  osDropdown.classList.toggle('os-dropdown-active');
});
osChooseBtn1.addEventListener('click', () => {
  osDropdown1.classList.toggle('os-dropdown-active1');
});

const android = document.getElementById('android');
const ios = document.getElementById('ios');
const windows = document.getElementById('windows');

const android1 = document.getElementById('android1');
const ios1 = document.getElementById('ios1');
const windows1 = document.getElementById('windows1');

const hiddenInputOs = document.querySelector('.selected-os-hidden-input');
let testOSInputArray = [];

const hiddenInputOs1 = document.querySelector('.selected-os-hidden-input1');
let testOSInputArray1 = [];

const osArr = [android, ios, windows];
const osArr1 = [android1, ios1, windows1];
let osChoosedArray = [];
let osRender = [];
let osChoosedArray1 = [];
let osRender1 = [];

osArr.map((item, i) => {
  item.addEventListener('click', () => {
    if (!osChoosedArray.includes(item)) {
      osChoosedArray.push(item);
      let newElem = document.createElement('div');
      newElem.classList.add('selected-os');
      ////////////////////////
      testOSInputArray.push(item.innerHTML);
      hiddenInputOs.value = testOSInputArray.join(',');
      ////////////////////////
      newElem.innerHTML = `${item.innerHTML}` + `<i class='fa fa-times' aria-hidden='true'></i>`;
      osRender.push(newElem);
      osRender.map((elem, index) => {
        osContainer.appendChild(elem);
        counterOs.innerHTML = osRender.length.toString();
        elem.addEventListener('click', () => {
          if (osRender.includes(elem)) {
            let a = osRender.indexOf(elem);
            osRender.splice(a, 1);
            osChoosedArray.splice(a, 1);
            counterOs.innerHTML = osRender.length.toString();
            ////////////////////////
            testOSInputArray.splice(a, 1);
            hiddenInputOs.value = testOSInputArray.join(',');
            ////////////////////////
          }
          if (osContainer.contains(elem)) {
            osContainer.removeChild(elem);
          }
        });
      });
    }
  });
});
osArr1.map((item, i) => {
  item.addEventListener('click', () => {
    if (!osChoosedArray1.includes(item)) {
      osChoosedArray1.push(item);
      let newElem = document.createElement('div');
      newElem.classList.add('selected-os');
      ////////////////////////
      testOSInputArray1.push(item.innerHTML);
      hiddenInputOs1.value = testOSInputArray1.join(',');
      ////////////////////////
      newElem.innerHTML = `${item.innerHTML}` + `<i class='fa fa-times' aria-hidden='true'></i>`;
      osRender1.push(newElem);
      osRender1.map((elem, index) => {
        osContainer1.appendChild(elem);
        counterOs1.innerHTML = osRender1.length.toString();
        elem.addEventListener('click', () => {
          if (osRender1.includes(elem)) {
            let a = osRender1.indexOf(elem);
            osRender1.splice(a, 1);
            osChoosedArray1.splice(a, 1);
            counterOs1.innerHTML = osRender1.length.toString();
            ////////////////////////
            testOSInputArray1.splice(a, 1);
            hiddenInputOs1.value = testOSInputArray1.join(',');
            ////////////////////////
          }
          if (osContainer1.contains(elem)) {
            osContainer1.removeChild(elem);
          }
        });
      });
    }
  });
});

$('#telephone').intlTelInput({
  allowDropdown: true,
  excludeCountries: ['az', 'tr'],
  preferredCountries: ['am', 'ru'],
  separateDialCode: true,
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

loginCloseBtn.addEventListener('click', () => {
  loginFormHide(loginForm);
});

loginHide.addEventListener('click', () => {
  loginFormHide(loginForm);
});
// function loginFormHide(item){

//   item.style.display = 'none';
//   //  document.body.style.overflowY = 'visible'
// }
function loginFormShow(item) {
  // loginForm.style.top = window.scrollY+'px'
  loginForm.style.height = document.body.clientHeight + 'px';
  item.style.display = 'block';
  document.querySelector('.sign-type').style = 'flex';
  // document.body.style.overflowY = 'hidden'
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const randomDigit = function (num) {
  return (Math.random() * num).toFixed(2);
};

const bgItemsLeft = document.querySelectorAll('.login-bg-item-left');
const bgItemsTop = document.querySelectorAll('.login-bg-item-top');

if (sign) {
  sign.addEventListener('click', () => {
    bgItemsLeft.forEach((item) => {
      item.style.left = `${randomDigit(5)}rem`;
      item.style.top = `${randomDigit(34)}rem`;
    });

    bgItemsTop.forEach((item) => {
      item.style.left = `${randomDigit(35)}rem`;
      item.style.top = `${randomDigit(3)}rem`;
    });

    loginFormShow(loginForm);
  });
}

///////////////////mobile login-show//////
const mobileSighnBtn = document.querySelector('#mobile-log-in');

if (mobileSighnBtn) {
  mobileSighnBtn.addEventListener('click', () => {
    // document.querySelector('.mobile-menu-slider').classList.remove('mobile-menu-slider-active');
    bgItemsLeft.forEach((item) => {
      item.style.left = `${randomDigit(5)}rem`;
      item.style.top = `${randomDigit(34)}rem`;
    });

    bgItemsTop.forEach((item) => {
      item.style.left = `${randomDigit(35)}rem`;
      item.style.top = `${randomDigit(3)}rem`;
    });

    loginFormShow(loginForm);
  });
}

///////////////////////////////////
if (document.querySelector('#sign-btn')) {
  document.querySelector('#sign-btn').onclick = function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
}
///////////////////////////////////mobile-menu-btn//////////////////////////////////////

document.querySelector('.menu-icon-wrapper').onclick = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  setTimeout(() => {
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    if (screen.width <= 425) {
      document.querySelector('.mobile-menu-slider').style.top = window.scrollY + 'px';
      document.querySelector('.mobile-menu-slider').style.height =
        document.body.clientHeight + 'px';

      // document.querySelector('.active-mobile-menu-btns').style.top = (window.scrollY+15) + 'px';
      // document.body.classList.toggle('mobile-body-overflow')
      document.querySelector('.mobile-header-items').classList.toggle('active-mobile-menu-btns');
      document.querySelector('.mobile-menu-slider').classList.toggle('mobile-menu-slider-active');
      document.querySelector('.mobile-slider-logo').classList.toggle('mobile-slider-logo-active');
      document.querySelector('.mobile-slider-btns').classList.toggle('mobile-slider-btns-active');
      document.querySelector('.mobile-slider-pages').classList.toggle('mobile-slider-pages-active');
      document.querySelector('.mobile-search').classList.toggle('mobile-slider-search-hide');
    }
  }, 200);
};

/////////////////////mobile dark button./////////////////////

const mobileDarkBtn = document.querySelector('.mobile-theme-round-btn');
const btnInside = document.querySelector('.mobile-theme-main-btn');
if (mobileDarkBtn) {
  mobileDarkBtn.addEventListener('click', () => {
    mobileDarkBtn.classList.toggle('mobile-dark-btn-active');
    btnInside.classList.toggle('mobile-main-btn-active');
    document.body.classList.toggle('body-dark-mode-mobile');
    document.querySelector('.main-inner').classList.toggle('main-inner-dark-mobile');
    document.querySelector('.mobile-menu-slider').classList.toggle('slider-dark-active');
    document
      .querySelectorAll('.whiteText')
      .forEach((item) => item.classList.toggle('dark-text-mobile'));
    document.querySelector('.section1__apply-naturalPerson').classList.toggle('dark-mobile-btns');
    document.querySelector('.section1__apply-legalPerson').classList.toggle('dark-mobile-btns');
    document
      .querySelectorAll('.test-dark-input')
      .forEach((item) => item.classList.toggle('mobile-inputs-dark-active'));
    document.querySelector('.free-advice-inner').classList.toggle('main-inner-dark-mobile');
  });
}

//////////////////////////mobile lang////////////////

const mobLangField = document.querySelector('.mobile-lang-wrapper');
const mobLangBtn = document.querySelector('.mobile-lang-change');
const mobLangRotate = document.getElementById('mobile-lang-rotate');
const mobArmFlag = document.getElementById('mobile-arm-flag');
const mobRusFlag = document.getElementById('mobile-rus-flag');
const mobEngFlag = document.getElementById('mobile-eng-flag');

mobArmFlag.addEventListener('click', () => {
  mobArmFlag.style.order = '1';
  mobRusFlag.style.order = '2';
  mobEngFlag.style.order = '3';
});

mobRusFlag.addEventListener('click', () => {
  mobRusFlag.style.order = '1';
  mobArmFlag.style.order = '2';
  mobEngFlag.style.order = '3';
});

mobEngFlag.addEventListener('click', () => {
  mobEngFlag.style.order = '1';
  mobArmFlag.style.order = '2';
  mobRusFlag.style.order = '3';
});

let mobLangBool = true;

mobLangBtn.addEventListener('click', () => {
  mobLangAnim(mobLangField);
});

function mobLangAnim(item) {
  if (item.style.height == '5rem') {
    item.style.height = '18rem';
    mobLangBool = false;
    mobLangRotate.style.transform = 'rotate(180deg)';
  } else {
    item.style.height = '5rem';
    mobLangBool = true;
    mobLangRotate.style.transform = 'rotate(360deg)';
  }
}

//   window.addEventListener('click',(ev)=>{
//     if(  langField.style.height=='6rem'){
//      langField.style.height='1.6rem';

//     langRotate.style.transform='rotate(360deg)'
// }
//   })

$(document).mouseup(function (e) {
  let container = $('#mobile-lang-changer');

  if (!container.is(e.target) && container.has(e.target).length === 0) {
    mobLangField.style.height = '5rem';
    if (mobLangRotate.style.transform === 'rotate(180deg)') {
      mobLangRotate.style.transform = 'rotate(360deg)';
    }
  }
});

///////////////////////new
const dropdownPartner = document.querySelector('.sign-partner-job-type-dropdown');
const dropdownInputBtn = document.querySelector('.partner-job-type-drop');

dropdownInputBtn.addEventListener('click', () => {
  dropdownPartner.classList.toggle('sign-partner-job-type-dropdown-active');
});

const infoTech = document.querySelector('#info-tech');
const touristComp = document.querySelector('#tourist-comp');
const cultureComp = document.querySelector('#culture-comp');
const publicComp = document.querySelector('#public-comp');
const sales = document.querySelector('#sales');

const fieldsArray = [infoTech, touristComp, cultureComp, publicComp, sales];

fieldsArray.map((item) => {
  item.addEventListener('click', () => {
    dropdownInputBtn.value = '';
    dropdownInputBtn.value = item.innerHTML;
    dropdownPartner.classList.remove('sign-partner-job-type-dropdown-active');
  });
});

//////////drop 2
const dropdownPartnertype = document.querySelector('.sign-partner-service-type-dropdown');
const dropdownInputBtnPartnership = document.querySelector('.partner-partnership');

dropdownInputBtnPartnership.addEventListener('click', () => {
  dropdownPartnertype.classList.toggle('sign-partner-service-type-dropdown-active');
});

const practice = document.querySelector('#practice-change');
const jobOffer = document.querySelector('#job-offer');
const serviceOrder = document.querySelector('#service-order');
const advert = document.querySelector('#advertisement');
const otherOffer = document.querySelector('#other-offer');

const fieldsArraydDrop2 = [practice, jobOffer, serviceOrder, advert];

fieldsArraydDrop2.map((item) => {
  item.addEventListener('click', () => {
    dropdownInputBtnPartnership.value = '';
    dropdownInputBtnPartnership.value = item.innerHTML;
    dropdownPartnertype.classList.remove('sign-partner-service-type-dropdown-active');
    document.querySelector('.appear-partner-input').style.display = 'none';
  });
});
otherOffer.addEventListener('click', () => {
  dropdownInputBtnPartnership.value = '';
  dropdownInputBtnPartnership.value = otherOffer.innerHTML;
  dropdownPartnertype.classList.remove('sign-partner-service-type-dropdown-active');
  document.querySelector('.appear-partner-input').style.display = 'block';
});

//////////drop chool//////////
const dropdownSchool = document.querySelector('.school-type-dropdown');
const dropdownSchoolBtn = document.querySelector('.school-drop-btn');

dropdownSchoolBtn.addEventListener('click', () => {
  dropdownSchool.classList.toggle('school-type-dropdown-active');
});

const shoolTeach = document.querySelector('#school-teaching');
const schoolPractice = document.querySelector('#school-practice');
const schoolJob = document.querySelector('#school-job');
const schoolOrder = document.querySelector('#school-services-order');
const schoolAd = document.querySelector('#school-advertisement');
const schoolOther = document.querySelector('#school-other');

const schoolDropArr = [shoolTeach, schoolPractice, schoolJob, schoolOrder, schoolAd];

schoolDropArr.map((item) => {
  item.addEventListener('click', () => {
    dropdownSchoolBtn.value = '';
    dropdownSchoolBtn.value = item.innerHTML;
    dropdownSchool.classList.remove('school-type-dropdown-active');
    document.querySelector('.appear-school-input').style.display = 'none';
  });
});
schoolOther.addEventListener('click', () => {
  dropdownSchoolBtn.value = '';
  dropdownSchoolBtn.value = schoolOther.innerHTML;
  dropdownSchool.classList.remove('school-type-dropdown-active');
  document.querySelector('.appear-school-input').style.display = 'block';
});

//////////drop freelancer//////////
const dropdownFreelancer = document.querySelector('.freelance-dropdown');
const dropdownFreelancerBtn = document.querySelector('.freelance-drop-btn');

dropdownFreelancerBtn.addEventListener('click', () => {
  dropdownFreelancer.classList.toggle('freelance-dropdown-active');
});

const text1free = document.querySelector('#text1-free');
const text2free = document.querySelector('#text2-free');
const text3free = document.querySelector('#text3-free');
const text4free = document.querySelector('#text4-free');

const freelanceDropArr = [text1free, text2free, text3free];

freelanceDropArr.map((item) => {
  item.addEventListener('click', () => {
    dropdownFreelancerBtn.value = '';
    dropdownFreelancerBtn.value = item.innerHTML;
    dropdownFreelancer.classList.remove('freelance-dropdown-active');
    document.querySelector('.freelance-appear-input').style.display = 'none';
  });
});

text4free.addEventListener('click', () => {
  dropdownFreelancerBtn.value = text4free.innerHTML;
  dropdownFreelancer.classList.remove('freelance-dropdown-active');
  document.querySelector('.freelance-appear-input').style.display = 'block';
});
///////////pick section

const student = document.querySelector('#student');
const school = document.querySelector('#school');
const teacher = document.querySelector('#teacher');
const freelancer = document.querySelector('#freelancer');
const partner = document.querySelector('#partner');
const guest = document.querySelector('#guest');

student.addEventListener('click', () => {
  student.classList.add('pick-type-picked');
  school.classList.remove('pick-type-picked');
  teacher.classList.remove('pick-type-picked');
  freelancer.classList.remove('pick-type-picked');
  partner.classList.remove('pick-type-picked');
  guest.classList.remove('pick-type-picked');
});

school.addEventListener('click', () => {
  school.classList.add('pick-type-picked');
  student.classList.remove('pick-type-picked');
  teacher.classList.remove('pick-type-picked');
  freelancer.classList.remove('pick-type-picked');
  partner.classList.remove('pick-type-picked');
  guest.classList.remove('pick-type-picked');
});
teacher.addEventListener('click', () => {
  teacher.classList.add('pick-type-picked');
  school.classList.remove('pick-type-picked');
  student.classList.remove('pick-type-picked');
  freelancer.classList.remove('pick-type-picked');
  partner.classList.remove('pick-type-picked');
  guest.classList.remove('pick-type-picked');
});
freelancer.addEventListener('click', () => {
  freelancer.classList.add('pick-type-picked');
  school.classList.remove('pick-type-picked');
  teacher.classList.remove('pick-type-picked');
  student.classList.remove('pick-type-picked');
  partner.classList.remove('pick-type-picked');
  guest.classList.remove('pick-type-picked');
});
partner.addEventListener('click', () => {
  partner.classList.add('pick-type-picked');
  school.classList.remove('pick-type-picked');
  teacher.classList.remove('pick-type-picked');
  freelancer.classList.remove('pick-type-picked');
  student.classList.remove('pick-type-picked');
  guest.classList.remove('pick-type-picked');
});
guest.addEventListener('click', () => {
  guest.classList.add('pick-type-picked');
  school.classList.remove('pick-type-picked');
  teacher.classList.remove('pick-type-picked');
  freelancer.classList.remove('pick-type-picked');
  partner.classList.remove('pick-type-picked');
  student.classList.remove('pick-type-picked');
});

const signAsBtn = document.querySelector('#sign-as');

const fieldSignAs = document.querySelector('.sign-type');
const fieldSignStudent = document.querySelector('#sign-student');
const fieldTeacher = document.querySelector('#sign-teacher');
const fieldPartner = document.querySelector('#sign-partner');
const fieldShool = document.querySelector('#sign-school');
const fieldFreelance = document.querySelector('#sign-freelancer');
const fieldGuest = document.querySelector('#sign-guest');

signAsBtn.addEventListener('click', () => {
  if (student.classList.contains('pick-type-picked')) {
    fieldSignAs.style.display = 'none';
    fieldSignStudent.style.display = 'flex';
  } else if (teacher.classList.contains('pick-type-picked')) {
    fieldSignAs.style.display = 'none';
    fieldTeacher.style.display = 'flex';
  } else if (partner.classList.contains('pick-type-picked')) {
    fieldSignAs.style.display = 'none';
    fieldPartner.style.display = 'flex';
  } else if (school.classList.contains('pick-type-picked')) {
    fieldSignAs.style.display = 'none';
    fieldShool.style.display = 'flex';
  } else if (freelancer.classList.contains('pick-type-picked')) {
    fieldSignAs.style.display = 'none';
    fieldFreelance.style.display = 'flex';
  } else if (guest.classList.contains('pick-type-picked')) {
    fieldSignAs.style.display = 'none';
    fieldGuest.style.display = 'flex';
  }
});

//////////////////radios options
const radio1 = document.querySelector('.fake-radio1');
const radio2 = document.querySelector('.fake-radio2');

radio1.addEventListener('click', () => {
  radio1.classList.add('fake-radio-active');
  radio2.classList.remove('fake-radio-active');
});
radio2.addEventListener('click', () => {
  radio2.classList.add('fake-radio-active');
  radio1.classList.remove('fake-radio-active');
});

document.querySelector('#cancel-global').addEventListener('click', () => {
  loginFormHide(loginForm);
});
document.querySelector('#cancel-student').addEventListener('click', () => {
  student.classList.remove('pick-type-picked');
  fieldSignStudent.style.display = 'none';
  loginFormHide(loginForm);
});
document.querySelector('#cancel-teacher').addEventListener('click', () => {
  teacher.classList.remove('pick-type-picked');
  fieldTeacher.style.display = 'none';
  loginFormHide(loginForm);
});
document.querySelector('#cancel-partner').addEventListener('click', () => {
  partner.classList.remove('pick-type-picked');
  fieldPartner.style.display = 'none';
  loginFormHide(loginForm);
});
document.querySelector('#cancel-school').addEventListener('click', () => {
  school.classList.remove('pick-type-picked');
  fieldShool.style.display = 'none';
  loginFormHide(loginForm);
});
document.querySelector('#cancel-freelancer').addEventListener('click', () => {
  freelancer.classList.remove('pick-type-picked');
  fieldFreelance.style.display = 'none';
  loginFormHide(loginForm);
});
document.querySelector('#cancel-guest').addEventListener('click', () => {
  guest.classList.remove('pick-type-picked');
  fieldGuest.style.display = 'none';
  loginFormHide(loginForm);
});

const enterToAccBtn = document.querySelector('#enter-to-acc');
const signAcc = document.querySelector('#sign-acc');
const fieldEnter = document.querySelector('#enter-user');

enterToAccBtn.addEventListener('click', () => {
  enterToAccBtn.classList.add('ent-active');
  signAcc.classList.remove('ent-active');

  student.classList.remove('pick-type-picked');
  fieldSignStudent.style.display = 'none';

  teacher.classList.remove('pick-type-picked');
  fieldTeacher.style.display = 'none';

  partner.classList.remove('pick-type-picked');
  fieldPartner.style.display = 'none';

  school.classList.remove('pick-type-picked');
  fieldShool.style.display = 'none';

  freelancer.classList.remove('pick-type-picked');
  fieldFreelance.style.display = 'none';

  guest.classList.remove('pick-type-picked');
  fieldGuest.style.display = 'none';

  fieldSignAs.style.display = 'none';

  fieldEnter.style.display = 'flex';
});

signAcc.addEventListener('click', () => {
  enterToAccBtn.classList.remove('ent-active');
  signAcc.classList.add('ent-active');

  student.classList.remove('pick-type-picked');
  fieldSignStudent.style.display = 'none';

  teacher.classList.remove('pick-type-picked');
  fieldTeacher.style.display = 'none';

  partner.classList.remove('pick-type-picked');
  fieldPartner.style.display = 'none';

  school.classList.remove('pick-type-picked');
  fieldShool.style.display = 'none';

  freelancer.classList.remove('pick-type-picked');
  fieldFreelance.style.display = 'none';

  guest.classList.remove('pick-type-picked');
  fieldGuest.style.display = 'none';

  fieldEnter.style.display = 'none';
  fieldSignAs.style.display = 'flex';
});

function loginFormHide(item) {
  student.classList.remove('pick-type-picked');
  fieldSignStudent.style.display = 'none';

  teacher.classList.remove('pick-type-picked');
  fieldTeacher.style.display = 'none';

  partner.classList.remove('pick-type-picked');
  fieldPartner.style.display = 'none';

  school.classList.remove('pick-type-picked');
  fieldShool.style.display = 'none';

  freelancer.classList.remove('pick-type-picked');
  fieldFreelance.style.display = 'none';

  guest.classList.remove('pick-type-picked');
  fieldGuest.style.display = 'none';

  fieldEnter.style.display = 'none';
  enterToAccBtn.classList.remove('ent-active');
  signAcc.classList.add('ent-active');

  item.style.display = 'none';
  //  document.body.style.overflowY = 'visible'
}

////////////////////////////////////phone inputs/////////////////////////////////////////////////////
$('#student-phone').intlTelInput({
  allowDropdown: true,
  excludeCountries: ['az', 'tr'],
  preferredCountries: ['am', 'ru'],
  separateDialCode: true,
});

$('#teacher-phone').intlTelInput({
  allowDropdown: true,
  excludeCountries: ['az', 'tr'],
  preferredCountries: ['am', 'ru'],
  separateDialCode: true,
});

$('#boss-phone').intlTelInput({
  allowDropdown: true,
  excludeCountries: ['az', 'tr'],
  preferredCountries: ['am', 'ru'],
  separateDialCode: true,
});

$('#company-phone').intlTelInput({
  allowDropdown: true,
  excludeCountries: ['az', 'tr'],
  preferredCountries: ['am', 'ru'],
  separateDialCode: true,
});

$('#principal-phone').intlTelInput({
  allowDropdown: true,
  excludeCountries: ['az', 'tr'],
  preferredCountries: ['am', 'ru'],
  separateDialCode: true,
});

$('#school-phone').intlTelInput({
  allowDropdown: true,
  excludeCountries: ['az', 'tr'],
  preferredCountries: ['am', 'ru'],
  separateDialCode: true,
});

$('#freelancer-phone').intlTelInput({
  allowDropdown: true,
  excludeCountries: ['az', 'tr'],
  preferredCountries: ['am', 'ru'],
  separateDialCode: true,
});

$('#guest-phone').intlTelInput({
  allowDropdown: true,
  excludeCountries: ['az', 'tr'],
  preferredCountries: ['am', 'ru'],
  separateDialCode: true,
});

const dropdownApp = document.querySelector('.app-dropdown');
const dropdownAppBtn = document.querySelector('.app-type-input');

dropdownAppBtn.addEventListener('click', () => {
  dropdownApp.classList.toggle('app-dropdown-active');
});

const appGame = document.querySelector('#app-game');
const appComp = document.querySelector('#app-comp');
const appSales = document.querySelector('#app-sales');

const appDropArr = [appGame, appComp, appSales];

appDropArr.map((item) => {
  item.addEventListener('click', () => {
    dropdownAppBtn.value = '';
    dropdownAppBtn.value = item.innerHTML;
    dropdownApp.classList.remove('app-dropdown-active');
  });
});

const dropdownApp2 = document.querySelector('.app-dropdown2');
const dropdownAppBtn2 = document.querySelector('.app-type-input2');

dropdownAppBtn2.addEventListener('click', () => {
  dropdownApp2.classList.toggle('app-dropdown-active');
});

const appGame2 = document.querySelector('#app-game2');
const appComp2 = document.querySelector('#app-comp2');
const appSales2 = document.querySelector('#app-sales2');

const appDropArr2 = [appGame2, appComp2, appSales2];

appDropArr2.map((item) => {
  item.addEventListener('click', () => {
    dropdownAppBtn2.value = '';
    dropdownAppBtn2.value = item.innerHTML;
    dropdownApp2.classList.remove('app-dropdown-active');
  });
});

if (document.querySelector('.header-user')) {
  document.querySelector('#header-user-dropdown').addEventListener('click', () => {
    document.querySelector('.header-user-drop').classList.toggle('header-user-drop-active');
  });
  $(document).mouseup(function (e) {
    var userContainer = $('.header-user-drop');
    var userBtn = $('#header-user-dropdown');

    if (!userContainer.is(e.target) && !userBtn.is(e.target)) {
      userContainer[0].classList.remove('header-user-drop-active');
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