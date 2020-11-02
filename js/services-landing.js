



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
  if(  item.style.height=='2.6rem'){
  item.style.height='8rem';
  item.style.background='#2a0745';
  langBool = false;
  // langRotate.style.transform='rotate(180deg)'

}else{
  item.style.height='2.6rem';
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
        langField.style.height='2.6rem';
        // if( langRotate.style.transform==='rotate(180deg)'){
        //   langRotate.style.transform='rotate(360deg)'
        // }

    }
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

$("#telephone").intlTelInput({
  allowDropdown: true,
  excludeCountries: ['az', 'tr'],
  preferredCountries: ["am", "ru"],
  separateDialCode: true,


});
////////////////dark mode/////////////////////

const themeBtnRound = document.querySelector('.theme-round-btn');
const themeMainBtn = document.querySelector('.theme-main-btn');
themeBtnRound.addEventListener('click', () => {
  document.body.classList.toggle('body-dark-active');
document.querySelector('.faculties-wrap-slide').classList.toggle('wrap-slide-dark')
document.querySelector('.services-wrap-slide').classList.toggle('wrap-slide-dark')
document.querySelector('.log-out').classList.toggle('user-exit-dark-btn');
document.querySelector('.header-user-drop').classList.toggle('user-drop-dark-btn');


  if (themeBtnRound.style.right === '') {
    themeBtnRound.style.right = '1.45rem';
    themeBtnRound.style.background = '#fff';
    themeMainBtn.style.background = '#0A0935';
    themeMainBtn.style.color = '#fff';
  } else {
    themeBtnRound.style.right = '';
    themeBtnRound.style.background = '#0A0935';
    themeMainBtn.style.background = '#fff';
    themeMainBtn.style.color = '#0A0935';
  }
});

////login

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

///////////mobile search btn
let mobileButton = document.getElementById('mobile-search-ico');
let mobileInput = document.getElementById('mobile-search-field');
let mobileSrchpanel = document.querySelector('.mobile-search-panel');
let mobileBool = true;
function mobileAnim(input) {
  if (mobileBool) {
    input.style.width = '40rem';
    input.style.opacity = '1';
    mobileButton.style.paddingLeft = '.5rem';
    input.style.paddingLeft = '.4rem';
    input.style.paddingRight = '.4rem';
    mobileSrchpanel.style.width = '50rem';
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

///////////////////////////////////mobile-menu-btn//////////////////////////////////////
if (document.querySelector('.menu-icon-wrapper')) {
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
        document
          .querySelector('.mobile-slider-pages')
          .classList.toggle('mobile-slider-pages-active');
        document.querySelector('.mobile-search').classList.toggle('mobile-slider-search-hide');
      }
    }, 200);
  };
}

/////////////////////mobile dark button./////////////////////

const mobileDarkBtn = document.querySelector('.mobile-theme-round-btn');
const btnInside = document.querySelector('.mobile-theme-main-btn');
if (mobileDarkBtn) {
  mobileDarkBtn.addEventListener('click', () => {
    mobileDarkBtn.classList.toggle('mobile-dark-btn-active');
    btnInside.classList.toggle('mobile-main-btn-active');

    document
      .querySelector('.mobile-menu-slider-active')
      .classList.toggle('mobile-menu-slider-dark');

    document.body.classList.toggle('body-dark-active');
  });
}

//////////////////////////mobile lang////////////////

const mobLangField = document.querySelector('.mobile-lang-wrapper');
const mobLangBtn = document.querySelector('.mobile-lang-change');
const mobLangRotate = document.getElementById('mobile-lang-rotate');
const mobArmFlag = document.getElementById('mobile-arm-flag');
const mobRusFlag = document.getElementById('mobile-rus-flag');
const mobEngFlag = document.getElementById('mobile-eng-flag');
if (mobLangField) {
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

  $(document).mouseup(function (e) {
    let container = $('#mobile-lang-changer');

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      mobLangField.style.height = '5rem';
      if (mobLangRotate.style.transform === 'rotate(180deg)') {
        mobLangRotate.style.transform = 'rotate(360deg)';
      }
    }
  });
}

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