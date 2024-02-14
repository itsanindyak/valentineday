const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
const questionMark = document.querySelector('.questionMark')
const loveMark = document.querySelector('.loveMark')
var a = new Audio('ddlj.mp3');

loveMark.style.display ='none';
yesBtn.addEventListener('click', () => {
    a.oncanplaythrough = function(){
        a.play();
        }
    question.innerHTML = 'I Love You :)';
    question.style.position = "relative"; 
    question.style.top = "50px";   
    noBtn.style.display ='none';
    yesBtn.style.display ='none';
    loveMark.style.display ='block';
    questionMark.style.display ='none';
    
});
noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});