if (document.querySelector('#sign-btn')) {
  document.querySelector('#sign-btn').onclick = function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
}

// const bodyBg = document.querySelector('.body-bg')

// bodyBg.style.height=`100vh`;

// const rectArr=[];
// for(let i=0;i<5;i++){
//   let elem = document.createElement('span');

//   rectArr.push(elem)
//   rectArr[i].innerHTML ="<img src='./imgs/body-bg/rect.png' alt='' style='width:100%; height:100%;'>"
//   rectArr[i].style.position='absolute';
//    rectArr[i].style.top=`${bgRandom()+30}px`;
//    rectArr[i].style.left=`${bgRandomW()+30}px`;
//    rectArr[i].style.zIndex='-1'
//     rectArr[i].style.width='1.3rem'
//    rectArr[i].style.height='1.3rem'
//    rectArr[i].style.filter=' blur(3px)'
//    bodyBg.appendChild(rectArr[i])
// }
// const circleArr=[];
// for(let i=0;i<5;i++){
//   let elem = document.createElement('span');

//   circleArr.push(elem)
//   circleArr[i].innerHTML ="<img src='./imgs/body-bg/circle.png' alt='' style='width:100%; height:100%;'>"
//   circleArr[i].style.position='absolute';
//    circleArr[i].style.top=`${bgRandom()+30}px`;
//    circleArr[i].style.left=`${bgRandomW()+30}px`;
//    circleArr[i].style.zIndex='-1'
//     circleArr[i].style.width='1.1rem'
//    circleArr[i].style.height='1.1rem'
//     circleArr[i].style.filter=' blur(3px)'
//    bodyBg.appendChild(circleArr[i])
// }
// const xArr=[];
// for(let i=0;i<5;i++){
//   let elem = document.createElement('span');

//   xArr.push(elem)
//   xArr[i].innerHTML ="<img src='./imgs/body-bg/x.png' alt='' style='width:100%; height:100%;'>"
//   xArr[i].style.position='absolute';
//    xArr[i].style.top=`${bgRandom()+30}px`;
//    xArr[i].style.left=`${bgRandomW()+30}px`;
//    xArr[i].style.zIndex='-1'
//     xArr[i].style.width='1.3rem'
//    xArr[i].style.height='1.3rem'
//     xArr[i].style.filter=' blur(3px)'
//    bodyBg.appendChild(xArr[i])
// }
// function bgRandomW(){
//     return (Math.random()*bodyBg.clientWidth);
// }
// function bgRandom(){
//     return 70 + (Math.random()*(bodyBg.clientHeight-70));
// }

// const callBg = document.querySelector('.call-window-inner');
// const callBgArrX=[];

// for(let i=0;i<2;i++){
//   let elem = document.createElement('span');

//   callBgArrX.push(elem)
//   callBgArrX[i].innerHTML ="<img src='./imgs/body-bg/x.png' alt='' style='width:100%; height:100%;'>"
//   callBgArrX[i].style.position='absolute';
//    callBgArrX[i].style.top=`${callBgRandomH()}rem`;
//    callBgArrX[i].style.left=`${callBgRandomW()}rem`;
//    callBgArrX[i].style.zIndex='-1'
//     callBgArrX[i].style.width='1rem'
//    callBgArrX[i].style.height='1rem'
//    callBg.appendChild(callBgArrX[i])
// }

// const callBgArrRect=[];

// for(let i=0;i<2;i++){
//   let elem = document.createElement('span');

//   callBgArrRect.push(elem)
//   callBgArrRect[i].innerHTML ="<img src='./imgs/body-bg/rect.png' alt='' style='width:100%; height:100%;'>"
//   callBgArrRect[i].style.position='absolute';
//    callBgArrRect[i].style.top=`${callBgRandomH()}rem`;
//    callBgArrRect[i].style.left=`${callBgRandomW()}rem`;
//    callBgArrRect[i].style.zIndex='-1'
//    callBgArrRect[i].style.width='1rem'
//    callBgArrRect[i].style.height='1rem'

//    callBg.appendChild(callBgArrRect[i])
// }
// const callBgArrCircle=[];

// for(let i=0;i<2;i++){
//   let elem = document.createElement('span');

//   callBgArrCircle.push(elem)
//   callBgArrCircle[i].innerHTML ="<img src='./imgs/body-bg/circle.png' alt='' style='width:100%; height:100%;'>"
//   callBgArrCircle[i].style.position='absolute';
//    callBgArrCircle[i].style.top=`${callBgRandomH()}rem`;
//    callBgArrCircle[i].style.left=`${callBgRandomW()}rem`;
//    callBgArrCircle[i].style.zIndex='-1'
//     callBgArrCircle[i].style.width='1rem'
//    callBgArrCircle[i].style.height='1rem'
//    callBg.appendChild(callBgArrCircle[i])
// }
// function callBgRandomW(){
//     return (Math.random()*30);
// }
// function callBgRandomH(){
//     return (Math.random()*25);
// }

$(document).ready(function () {
  let position = 0;
  let slidesToShow = 2;
  if (screen.width <= 425) {
    slidesToShow = 1;
  }
  const slidesToScroll = 1;
  const container = $('.slider-container');
  const track = $('.slider-track');
  const item = $('.slider-item');
  const prevBtn = $('#slide-left');
  const nextBtn = $('#slide-right');
  const itemWidth = container.width() / slidesToShow;
  const movePosition = slidesToScroll * itemWidth;
  const itemsCount = item.length;

  item.each((index, item) => {
    $(item).css({
      minWidth: itemWidth,
    });
  });

  prevBtn.click(() => {
    position += movePosition;
    setPosition();
    checkBtns();
  });
  nextBtn.click(() => {
    position -= movePosition;
    setPosition();
    checkBtns();
  });

  const setPosition = () => {
    track.css({
      transform: `translateX(${position}px)`,
    });
  };

  const checkBtns = () => {
    prevBtn.prop('disabled', position === 0);
    nextBtn.prop('disabled', position <= -(itemsCount - slidesToShow) * itemWidth);
  };
  checkBtns();
});

let chartIntervalId = setInterval(() => {
  chartTest();
}, 100);
function chartTest() {
  let testDiv = document.getElementById('test-offset');
  if (window.scrollY >= testDiv.offsetTop) {
    chartAnimation();
    clearInterval(chartIntervalId);
  }
}
const fontSize = $('#font-check').css('font-size');
const fontArr = fontSize.split('');
fontArr.splice(fontArr.length - 2, 2);
const responseLine = +fontArr.join('') / 2;

const chartStr = $('.chart').css('height');

let arr = chartStr.split('');
arr.splice(arr.length - 2, 2);
const chartSize = +arr.join('') - 50;

function chartAnimation() {
  $(function () {
    $('.projects').easyPieChart({
      barColor: '#604CDA',
      trackColor: '#e3e3e3',
      scaleColor: false,
      lineWidth: responseLine,
      size: chartSize,
    });
  });

  $(function () {
    $('.year').easyPieChart({
      barColor: '#604CDA',
      trackColor: '#e3e3e3',
      scaleColor: false,
      lineWidth: responseLine,
      size: chartSize,
    });
  });
  $(function () {
    $('.costumers').easyPieChart({
      barColor: '#604CDA',
      trackColor: '#e3e3e3',
      scaleColor: false,
      lineWidth: responseLine,
      size: chartSize,
    });
  });
  $(function () {
    $('.students').easyPieChart({
      barColor: '#604CDA',
      trackColor: '#e3e3e3',
      scaleColor: false,
      lineWidth: responseLine,
      size: chartSize,
    });
  });
}
////////////////////////////////////////////////////////////////////////////8888888888888888888888888888888888888

//  document.addEventListener('DOMContentLoaded', function () {
//      const callBtn = document.getElementById("phone-item");
//   const phoneAnim = document.getElementById('call-anim');
//   const phoneText = document.getElementById('phone-anim-text')
// function phoneAnimationOn(){
//   phoneAnim.style.paddingRight = '10rem';
//   phoneText.style.color='#fff'
// }
// function phoneAnimationOff(){
//   phoneAnim.style.paddingRight = '0';

// if(document.body.style.background!='#110022'){
//       phoneText.style.color='#000'

// }

// }
//   callBtn.addEventListener('mouseover',()=>{
//     phoneAnimationOn()
//   })

//    callBtn.addEventListener('mouseout',()=>{
//        phoneAnimationOff()
//   })
// });

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
    srchpanel.style.border = ' 1px solid rgb(0, 0, 0)';

    input.focus();
    bool = false;
  } else {
    input.style.width = '0';
    input.style.opacity = '0';
    button.style.paddingLeft = '0';
    input.style.paddingLeft = '0';
    srchpanel.style.width = '1.4rem';
    input.style.paddingRight = '0';
    // srchpanel.style.color='#29092E'
    srchpanel.style.background = 'none';
    setTimeout(() => {
      srchpanel.style.border = 'none';
    }, 500);

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
  // srchpanel.style.color='#29092E'
  srchpanel.style.background = 'none';
  setTimeout(() => {
    srchpanel.style.border = 'none';
  }, 500);

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

//////////////////////////////////////////responsive slider///////////////////////////////////////

if (screen.width <= 425) {
  $(document).ready(function () {
    $('.company-services-section-wrapper').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      adaptiveHeight: true,
    });
  });
} else {
  $(document).ready(function () {
    $('.company-services-section-wrapper').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      adaptiveHeight: true,
    });
  });
}

// let boolean = true;
// const testItems = document.querySelectorAll('.test-item');
// let left = 100;

// function positionMove(left){
// 	testItems.forEach(function(currentValue, currentIndex, listObj) {
//     currentValue.style.transition=`.5s`

//     setTimeout(()=>{
//         currentValue.style.left=`${left}%`;
//     },1000)

//   })
// }

// let timerId = setInterval(()=>{

// 	if(left===0){
// 		boolean=true;
// 	}
// 	if(left===-200){
// 		boolean=false;
// 	}
// 	if(boolean){
// 	 left-=100;
// 	}else{
// 		left+=100;
// 	}

// 	positionMove(left)
// },5000)

// let boolPartner = true;
// const partnerItems = document.querySelectorAll('.partner-cards');
// let partnerLeft = 100;

// function partnerPositionMove(left){
//   partnerItems.forEach(function(currentValue, currentIndex, listObj) {
//     currentValue.style.left=`${partnerLeft}%`;
//   })
// }

// let timerIdPartner = setInterval(()=>{

//   if(partnerLeft===0){
//     boolPartner=true;
//   }
//   if(partnerLeft===-200){
//     boolPartner=false;
//   }
//   if(boolPartner){
//    partnerLeft-=100;
//   }else{
//     partnerLeft+=100;
//   }

//   partnerPositionMove(partnerLeft)
// },5000)

// const lessonSliderBtn = document.querySelector('.lessons-slider');
// const lessonSection = document.querySelector('.lessons-wrapper');
// const lessonBtn = document.getElementById('lesson-rotate')
// let lessonBool=true;

// lessonSliderBtn.addEventListener('click',()=>{
//    lessonAnim(lessonSection);
// })

// function lessonAnim(item){
//  if(lessonBool){
//    item.style.height='120rem';
//    lessonBool = false;
//    lessonBtn.style.transform='rotate(180deg)'
//  }else{
//    item.style.height='36rem';
//    lessonBool = true;
//    lessonBtn.style.transform='rotate(360deg)'
//  }

// }

// const serviceBtn = document.getElementById('services-slide-btn');
// const serviceSection = document.querySelector('.services-slide-wrap');
// const serviceRotate = document.getElementById('service-btn-rotate');
// let serviceBool = true;

// serviceBtn.addEventListener('click',()=>{
//   serviceAnim(serviceSection);
// })

// function serviceAnim(item){
//     if(serviceBool){
//     item.style.height='50rem';
//     serviceBool = false;
//     serviceRotate.style.transform='rotate(180deg)'
//   }else{
//     item.style.height='33rem';
//     serviceBool = true;
//     serviceRotate.style.transform='rotate(360deg)'
//   }

// }

const langField = document.querySelector('.lang-wrapper');
const langBtn = document.querySelector('.lang-change');
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
    item.style.color = '#fff';
    document.querySelectorAll('.lang-name').forEach((item) => (item.style.color = '#fff'));

    langBool = false;
    // langRotate.style.transform='rotate(180deg)'
  } else {
    item.style.height = '1.6rem';
    langBool = true;
    item.style.background = 'none';
    item.style.color = '#29092E';

    if (darkBool === false && window.scrollY <= 0) {
      document.querySelectorAll('.lang-name').forEach((item) => (item.style.color = '#000'));
    }

    // langRotate.style.transform='rotate(360deg)'
  }
}

//   window.addEventListener('click',(ev)=>{
//     if(  langField.style.height=='6rem'){
//      langField.style.height='1.6rem';

//     langRotate.style.transform='rotate(360deg)'
// }
//   })

$(document).mouseup(function (e) {
  var container2 = $('#lang-changer');

  if (!container2.is(e.target) && container2.has(e.target).length === 0) {
    langField.style.background = 'none';
    langField.style.height = '1.6rem';
    if (darkBool === false && window.scrollY <= 0) {
      document.querySelectorAll('.lang-name').forEach((item) => (item.style.color = '#000'));
    }
    // if( langRotate.style.transform==='rotate(180deg)'){
    //   langRotate.style.transform='rotate(360deg)'
    // }
  }
});

// langBtn.addEventListener('mouseover',()=>{
//   langField.style.height='6rem';
//     langBool = false;
//     langRotate.style.transform='rotate(180deg)'

// })

// langBtn.addEventListener('mouseout',()=>{
//   langField.style.height='1.6rem';
//     langBool = true;
//     langRotate.style.transform='rotate(360deg)'
// })
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

const login = document.querySelector('.sign');
// const enter = document.querySelector('.enter');
const loginSection = document.querySelector('.login-section');

const loginChange = document.querySelector('.login-changer');
const enterChange = document.querySelector('.enter-changer');

function showLogin() {
  // enterChange.style.display = 'none';
  loginChange.style.display = 'flex';
  loginSection.style.height = '34rem';
  enter.style.color = 'rgba(0, 0, 0, 0.25)';
  login.style.color = '#000';
}
// function showEnter(){
//   // loginChange.style.display = 'none';
//   enterChange.style.display = 'flex';
//   loginSection.style.height = '25rem';
//     login.style.color='rgba(0, 0, 0, 0.25)';
//   enter.style.color='#000';
// }

const randomDigit = function (num) {
  return (Math.random() * num).toFixed(2);
};

const bgItemsLeft = document.querySelectorAll('.login-bg-item-left');
const bgItemsTop = document.querySelectorAll('.login-bg-item-top');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////////////////////////////////
// login.addEventListener('click',()=>{

// bgItemsLeft.forEach((item)=>{

//   item.style.left = `${randomDigit(5)}rem`
//   item.style.top = `${randomDigit(34)}rem`

// })

// bgItemsTop.forEach((item)=>{

//   item.style.left = `${randomDigit(35)}rem`
//   item.style.top = `${randomDigit(3)}rem`

// })

//   showLogin()

// })

// enter.addEventListener('click',()=>{

// bgItemsLeft.forEach((item)=>{

//   item.style.left = `${randomDigit(5)}rem`
//   item.style.top = `${randomDigit(34)}rem`

// })

// bgItemsTop.forEach((item)=>{

//   item.style.left = `${randomDigit(35)}rem`
//   item.style.top = `${randomDigit(3)}rem`

// })

//   showEnter()

// })

var Partnerslider = document.getElementById('partner-slider'),
  PartnersliderItems = document.getElementById('partner-slides');

function Partnerslide(wrapper, items) {
  var posX1 = 0,
    posX2 = 0,
    posInitial,
    posFinal,
    threshold = 100,
    slides = items.getElementsByClassName('partner-slide'),
    slidesLength = slides.length,
    slideSize = items.getElementsByClassName('partner-slide')[0].offsetWidth,
    firstSlide = slides[0],
    lastSlide = slides[slidesLength - 1],
    cloneFirst = firstSlide.cloneNode(true),
    cloneLast = lastSlide.cloneNode(true),
    index = 0,
    allowShift = true;

  // Clone first and last slide
  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstSlide);
  wrapper.classList.add('loaded');

  // Mouse events
  items.onmousedown = dragStart;

  // Touch events
  items.addEventListener('touchstart', dragStart);
  items.addEventListener('touchend', dragEnd);
  items.addEventListener('touchmove', dragAction);

  // Click events
  // prev.addEventListener('click', function () { shiftSlide(-1) });
  // next.addEventListener('click', function () { shiftSlide(1) });

  // Transition events
  items.addEventListener('transitionend', checkIndex);

  function dragStart(e) {
    e = e || window.event;
    e.preventDefault();
    posInitial = items.offsetLeft;

    if (e.type == 'touchstart') {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }

  function dragAction(e) {
    e = e || window.event;

    if (e.type == 'touchmove') {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }
    items.style.left = items.offsetLeft - posX2 + 'px';
  }

  function dragEnd(e) {
    posFinal = items.offsetLeft;
    if (posFinal - posInitial < -threshold) {
      shiftSlide(1, 'drag');
    } else if (posFinal - posInitial > threshold) {
      shiftSlide(-1, 'drag');
    } else {
      items.style.left = posInitial + 'px';
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }

  function shiftSlide(dir, action) {
    items.classList.add('shifting');

    if (allowShift) {
      if (!action) {
        posInitial = items.offsetLeft;
      }

      if (dir == 1) {
        items.style.left = posInitial - slideSize + 'px';
        index++;
      } else if (dir == -1) {
        items.style.left = posInitial + slideSize + 'px';
        index--;
      }
    }

    allowShift = false;
  }

  function checkIndex() {
    items.classList.remove('shifting');

    if (index == -1) {
      items.style.left = -(slidesLength * slideSize) + 'px';
      index = slidesLength - 1;
    }

    if (index == slidesLength) {
      items.style.left = -(1 * slideSize) + 'px';
      index = 0;
    }

    allowShift = true;
  }
}

Partnerslide(Partnerslider, PartnersliderItems);

const phone = document.getElementById('phone-item');
const callWindow = document.querySelector('.call-window');
const callClose = document.querySelector('.call-window-bg');
const callCloseBtn = document.querySelector('.call-close-btn');

phone.addEventListener('click', () => {
  callWindow.style.display = 'block';
  callWindow.style.height = document.body.clientHeight + 'px';
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  // document.body.style.overflowY = 'hidden'
});
callClose.addEventListener('click', () => {
  callWindow.style.display = 'none';
  // document.body.style.overflowY = 'visible'
});
callCloseBtn.addEventListener('click', () => {
  callWindow.style.display = 'none';
  // document.body.style.overflowY = 'visible'
});

if (document.querySelector('.rating-front')) {
  let ratingFront = document.querySelector('.rating-front'),
    ratingItemFront = document.querySelectorAll('.rating-item-front');

  ratingFront.onclick = function (e) {
    let target = e.target;
    if (target.classList.contains('rating-item-front')) {
      removeClassFront(ratingItemFront, 'current-active-front');
      target.classList.add('active-rate-front', 'current-active-front');
    }
  };

  ratingFront.onmouseover = function (e) {
    let target = e.target;
    if (target.classList.contains('rating-item-front')) {
      removeClassFront(ratingItemFront, 'active-rate-front');
      target.classList.add('active-rate-front');
      mouseOverActiveClassFront(ratingItemFront);
    }
  };
  ratingFront.onmouseout = function () {
    addClass(ratingItemFront, 'active-rate-front');
    mouseOutActiveClasFront(ratingItemFront);
  };

  function removeClassFront(arr) {
    for (let i = 0, iLen = arr.length; i < iLen; i++) {
      for (let j = 1; j < arguments.length; j++) {
        ratingItemFront[i].classList.remove(arguments[j]);
      }
    }
  }
  function addClassFront(arr) {
    for (let i = 0, iLen = arr.length; i < iLen; i++) {
      for (let j = 1; j < arguments.length; j++) {
        ratingItemFront[i].classList.add(arguments[j]);
      }
    }
  }

  function mouseOverActiveClassFront(arr) {
    for (let i = 0, iLen = arr.length; i < iLen; i++) {
      if (arr[i].classList.contains('active-rate-front')) {
        break;
      } else {
        arr[i].classList.add('active-rate-front');
      }
    }
  }

  function mouseOutActiveClasFront(arr) {
    for (let i = arr.length - 1; i >= 1; i--) {
      if (arr[i].classList.contains('current-active-front')) {
        break;
      } else {
        arr[i].classList.remove('active-rate-front');
      }
    }
  }
}

if (document.querySelector('.rating-back')) {
  let ratingBack = document.querySelector('.rating-back'),
    ratingItemBack = document.querySelectorAll('.rating-item-back');

  ratingBack.onclick = function (e) {
    let target = e.target;
    if (target.classList.contains('rating-item-back')) {
      removeClass(ratingItemBack, 'current-active-back');
      target.classList.add('active-rate-back', 'current-active-back');
    }
  };

  ratingBack.onmouseover = function (e) {
    let target = e.target;
    if (target.classList.contains('rating-item-back')) {
      removeClass(ratingItemBack, 'active-rate-back');
      target.classList.add('active-rate-back');
      mouseOverActiveClass(ratingItemBack);
    }
  };
  ratingBack.onmouseout = function () {
    addClass(ratingItemBack, 'active-rate-back');
    mouseOutActiveClas(ratingItemBack);
  };

  function removeClass(arr) {
    for (let i = 0, iLen = arr.length; i < iLen; i++) {
      for (let j = 1; j < arguments.length; j++) {
        ratingItemBack[i].classList.remove(arguments[j]);
      }
    }
  }
  function addClass(arr) {
    for (let i = 0, iLen = arr.length; i < iLen; i++) {
      for (let j = 1; j < arguments.length; j++) {
        ratingItemBack[i].classList.add(arguments[j]);
      }
    }
  }

  function mouseOverActiveClass(arr) {
    for (let i = 0, iLen = arr.length; i < iLen; i++) {
      if (arr[i].classList.contains('active-rate-back')) {
        break;
      } else {
        arr[i].classList.add('active-rate-back');
      }
    }
  }

  function mouseOutActiveClas(arr) {
    for (let i = arr.length - 1; i >= 1; i--) {
      if (arr[i].classList.contains('current-active-back')) {
        break;
      } else {
        arr[i].classList.remove('active-rate-back');
      }
    }
  }
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

$('#telephone').intlTelInput({
  allowDropdown: true,
  excludeCountries: ['az', 'tr'],
  preferredCountries: ['am', 'ru'],
  separateDialCode: true,
});

let phbtn = $('#phone-test');
phbtn.click(() => {
  let intlNumber = document.querySelectorAll('.iti__selected-flag');
  let callNum = document.querySelector('#telephone').value;

  console.log(intlNumber[0].title + ' ' + callNum);
});

/////////////////////dark mode/////////////////////////////////////////////////////////////////////////////////////////

const servicesSliderBg = document.querySelector('.services-wrap-slide');
const servicesSliderText = document.querySelectorAll('.wrap-slide-text');
const facultiesSliderBg = document.querySelector('.faculties-wrap-slide');
const head = document.querySelector('.header');
const themeBtnRound = document.querySelector('.theme-round-btn');
const themeMainBtn = document.querySelector('.theme-main-btn');
const darkThemeText = document.querySelectorAll('.dark-theme-text');
const serv = document.getElementById('services-slide-btn');

const ourJobsR = document.querySelector('#slide-right');
const ourJobsL = document.querySelector('#slide-left');
const vidWrap = document.querySelector('.video-player-wrapper');
const chartBg = document.querySelector('.company-info-section');
const callPhoneText = document.getElementById('phone-anim-text');
// const textBg = document.querySelectorAll('.text-bg')
let darkBool = false;

if (themeBtnRound) {
  themeBtnRound.addEventListener('click', () => {
    if (themeBtnRound.style.right === '') {
      darkBool = true;
      themeBtnRound.style.right = '1.45rem';
      themeBtnRound.style.background = '#fff';
      document.querySelector('.body-bg').style.background = '#1C0037';
      document
        .querySelectorAll('.company-service')
        .forEach((item) => (item.style.background = '#17062E'));
      document
        .querySelectorAll('.company-service-text')
        .forEach((item) => (item.style.color = '#fff'));
      document
        .querySelectorAll('.partner-card')
        .forEach((item) => (item.style.background = '#17062E'));
      document.querySelector('.sl-it-small-text').style.color = '#fff';
      document.querySelectorAll('.lang-name').forEach((item) => (item.style.color = '#fff'));
      document
        .querySelectorAll('.faculty-card')
        .forEach((item) => (item.style.background = '#17062E'));
      document
        .querySelectorAll('.card-text-field')
        .forEach((item) => (item.style.background = '#230848'));
      document.querySelectorAll('.card-text-field').forEach((item) => (item.style.color = '#fff'));
      document.querySelector('.log-out').style.color = '#fff';

      window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
          document.querySelectorAll('.lang-name').forEach((item) => (item.style.color = '#fff'));
        }
      });
      themeMainBtn.style.background = '#0A0935';
      themeMainBtn.style.color = '#fff';
      document.body.style.background = '#110022';
      //  document.querySelector('.call-option-wrap').style.background='#110022'

      document.querySelector('.logo-heading').style.color = '#fff';
      otherLinks.forEach((item) => (item.style.color = '#fff'));

      darkThemeText.forEach((item) => {
        item.style.color = '#fff';
      });
      document.querySelectorAll('.fac-wr-txt').forEach((item) => {
        item.style.color = '#fff';
      });
      // serv.style.color='#fff'
      document.querySelector('.header-user-drop').classList.add('header-user-drop-active-dark');

      ourJobsR.style.color = '#fff';
      ourJobsL.style.color = '#fff';
      trackClr = '#6e6e6e';
      vidWrap.style.background = 'rgb(17, 0, 34)';
      chartBg.style.background = 'rgb(17, 0, 34)';
      callPhoneText.style.color = '#fff';
      servicesSliderBg.style.background = '#000';
      servicesSliderText.forEach((item) => {
        item.style.color = '#fff';
      });
      // textBg.forEach((item)=>{
      //     item.style.background='#110022'
      //   })
      facultiesSliderBg.style.background = '#000';
      facultiesSliderBg.style.color = '#fff';
      if (window.scrollY > 0) {
        head.style.background = 'linear-gradient(136.18deg, #0E0927 0%, #200138 100%)';
      }
    } else {
      themeBtnRound.style.right = '';
      darkBool = false;
      themeBtnRound.style.background = '#0A0935';
      themeMainBtn.style.background = '#efefef';
      themeMainBtn.style.color = '#0A0935';
      document.querySelector('.body-bg').style.background = '#F8F8F8';
      document
        .querySelectorAll('.company-service')
        .forEach((item) => (item.style.background = '#fff'));
      document
        .querySelectorAll('.company-service-text')
        .forEach((item) => (item.style.color = '#000'));
      document
        .querySelectorAll('.partner-card ')
        .forEach((item) => (item.style.background = '#fff'));
      document.querySelector('.sl-it-small-text').style.color = '#000';
      document.querySelectorAll('.lang-name').forEach((item) => (item.style.color = '#000'));
      document
        .querySelectorAll('.faculty-card')
        .forEach((item) => (item.style.background = '#fff'));
      document
        .querySelectorAll('.card-text-field')
        .forEach((item) => (item.style.background = '#f8f8f8'));
      document.querySelectorAll('.card-text-field').forEach((item) => (item.style.color = '#000'));
      document.querySelector('.log-out').style.color = '#444444';

      if (window.scrollY > 0) {
        document.querySelectorAll('.lang-name').forEach((item) => (item.style.color = '#fff'));
      }
      window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
          document.querySelectorAll('.lang-name').forEach((item) => (item.style.color = '#fff'));
        }
      });

      document.body.style.background = '#fff';
      darkThemeText.forEach((item) => {
        item.style.color = '#000';
      });
      // serv.style.color='#000'
      if (window.scrollY <= 0) {
        document.querySelector('.logo-heading').style.color = '#000';
        otherLinks.forEach((item) => (item.style.color = '#29092E'));
        document.querySelectorAll('.lang-name').forEach((item) => (item.style.color = '#000'));
        if (darkBool === true) {
          document.querySelectorAll('.lang-name').forEach((item) => (item.style.color = '#fff'));
        }
      }
      $(window).scroll(function () {
        if (window.scrollY > 0) {
          document.querySelector('.logo-heading').style.color = '#fff';
          otherLinks.forEach((item) => (item.style.color = '#fff'));
        }
      });

      document.querySelectorAll('.fac-wr-txt').forEach((item) => {
        item.style.color = '#000';
      });
      ourJobsR.style.color = '#000';
      ourJobsL.style.color = '#000';
      trackClr = '#ebebeb';
      //  document.querySelector('.call-option-wrap').style.background='#fff'
      vidWrap.style.background = '#fff';
      chartBg.style.background = '#fff';
      document.querySelector('.header-user-drop').classList.remove('header-user-drop-active-dark');

      callPhoneText.style.color = '#000';
      servicesSliderBg.style.background = '#fff';
      servicesSliderText.forEach((item) => {
        item.style.color = '#000';
      });
      // textBg.forEach((item)=>{
      //     item.style.background='#fff'
      //   })
      facultiesSliderBg.style.background = '#fff';
      facultiesSliderBg.style.color = '#000';
      if (window.scrollY > 0) {
        head.style.background =
          'linear-gradient(246.48deg, rgb(62 34 107) 0.49%, rgb(35 24 58) 101.31%)';
      }
    }
  });
}

////////////////////////////////////dark mode end///////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
  const callBtn = document.getElementById('phone-item');
  const phoneAnim = document.getElementById('call-anim');
  const phoneText = document.getElementById('phone-anim-text');
  function phoneAnimationOn() {
    phoneAnim.style.paddingRight = '10rem';
    phoneText.style.color = '#fff';
  }
  function phoneAnimationOff() {
    phoneAnim.style.paddingRight = '0';

    if (!darkBool) {
      phoneText.style.color = '#000';
    }
  }
  callBtn.addEventListener('mouseover', () => {
    phoneAnimationOn();
  });

  callBtn.addEventListener('mouseout', () => {
    phoneAnimationOff();
  });
});

const logoHeading = document.querySelector('.logo-heading');
const otherLinks = document.querySelectorAll('.sec-item-link');

$(window).scroll(function () {
  if (window.scrollY > 0) {
    head.style.paddingTop = '.4rem';
    head.style.paddingBottom = '.4rem';
    logoHeading.style.color = '#fff';
    otherLinks.forEach((item) => (item.style.color = '#fff'));
    if (!darkBool) {
      head.style.background =
        'linear-gradient(246.48deg, rgb(62 34 107) 0.49%, rgb(35 24 58) 101.31%)';
      logoHeading.style.color = '#fff';
      otherLinks.forEach((item) => (item.style.color = '#fff'));
    } else {
      head.style.background = 'linear-gradient(136.18deg, #0E0927 0%, #200138 100%)';
    }
  }

  if (window.scrollY === 0) {
    head.style.paddingTop = '0';
    head.style.paddingBottom = '0';
    if (darkBool === false && window.scrollY === 0) {
      logoHeading.style.color = '#000';
      otherLinks.forEach((item) => (item.style.color = '#29092E'));
    }
    head.style.background = 'none';
  }
});

const toTop = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    toTop.classList.add('to-top-active');
  } else {
    toTop.classList.remove('to-top-active');
  }
});

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
    document.body.classList.toggle('body-dark-active');
    document.querySelector('.company-info-section').classList.toggle('body-dark-active');
    document
      .querySelectorAll('.mobile-text-dark')
      .forEach((item) => item.classList.toggle('body-dark-active'));
    document.querySelector('.mobile-menu-slider').classList.toggle('slider-dark-active');
    document
      .querySelectorAll('.faculty-card')
      .forEach((item) => item.classList.toggle('faculty-card-dark-mobile'));
    document
      .querySelectorAll('.card-text-field')
      .forEach((item) => item.classList.toggle('card-text-field-dark'));
    document
      .querySelectorAll('.partner-card')
      .forEach((item) => item.classList.toggle('partner-card-dark-mobile'));
    document
      .querySelectorAll('.company-service-text')
      .forEach((item) => item.classList.toggle('company-service-text-mobile-dark'));
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

/////pick section dropdowns

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
setTimeout(() => {
  document.querySelector('.company-services-section').style.visibility = 'visible';
}, 1000);

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

const changeTextField = document.querySelector('.sl-it-big-text');
const changePic = document.getElementById('changePic');

const changeTextArr = [
  'Սովորիր Ծրագրավորում',
  'Դարձիր մոբայլ ծրագրավորող',
  'Սովորիր C# ծրագրավորում',
];
const imgUrls = ['imgs/main-page-pic.svg', 'imgs/mobile-pic-main.svg', 'imgs/Group-(3).svg'];

function delayInner(i, value) {
  setTimeout(() => {
    changeTextField.innerHTML += value;
  }, i * 100);
}

function delay(i, value) {
  setTimeout(() => {
    changeTextField.innerHTML = '';
    let current = value.split('');
    for (let j = 0; j < current.length; j++) {
      delayInner(j, current[j]);
    }
    changePic.style.opacity = '0';

    // changePic.style.width='0%'
    //     changePic.style.height='0%'

    setTimeout(() => {
      changePic.src = imgUrls[i];
      // changePic.style.width='130%'
      //         changePic.style.height='130%'
      changePic.style.opacity = '1';
    }, 500);
  }, i * 10000);
}

function homeAnim() {
  for (let i = 0; i < changeTextArr.length; i++) {
    delay(i, changeTextArr[i]);
  }
}

homeAnim();

setInterval(() => {
  homeAnim();
}, 30000);

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    document.querySelectorAll('.lang-name').forEach((item) => (item.style.color = '#fff'));
  }
  if (window.scrollY <= 0) {
    if (darkBool === false) {
      document.querySelectorAll('.lang-name').forEach((item) => (item.style.color = '#000'));
    } else {
      document.querySelectorAll('.lang-name').forEach((item) => (item.style.color = '#fff'));
    }
  }
});

const textAboutUs = document.querySelectorAll('.company-service-text');

textAboutUs.forEach((item) => {
  let curr = item.innerHTML;
  if (curr.length > 250) {
    // let currArr =  curr.split('');
    // console.log(currArr)
    // let sliced = currArr.splice(0,250)
    // let str = spliced.join('')
    // str = str.replace(/\s+\S*$/, "...")
    let str = curr.substr(0, 250);
    for (let i = str.length - 1; i > 0; i--) {
      if (str[i] === ' ') {
        let result = str.substr(0, i);
        item.innerHTML = result + '...';
        break;
      }
    }
  }
});

$(function () {
  $('input[name="datetimes"]').daterangepicker({
    timePicker: true,
    startDate: moment().startOf('hour'),
    endDate: moment().startOf('hour').add(32, 'hour'),
    locale: {
      format: 'M/DD hh:mm A',
    },
  });
});

document.querySelector('.video-play-btn').addEventListener('click', () => {
  document.querySelector('.iframe-container').style.display = 'flex';
});

document.querySelector('.iframe-close-btn').addEventListener('click', () => {
  document.querySelector('.iframe-container').style.display = 'none';
  pauseVideo();
});

var tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('ytplayer', {
    height: '100%',
    with: '100%',

    videoId: '6Mo5Iom-uI8',
  });
}

//Functions to stop-pause Video

function pauseVideo() {
  player.pauseVideo();
}
