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
// Add smooth transition to the No button
wrapper.style.position = 'relative';  // Ensure wrapper is the positioning context
noBtn.style.transition = 'all 0.3s ease-in-out';
noBtn.style.position = 'absolute';  // Position relative to wrapper

noBtn.addEventListener('mouseover', () => {
    // Calculate random position within wrapper boundaries
    const i = Math.floor(Math.random() * (wrapper.offsetWidth - noBtn.offsetWidth));
    const j = Math.floor(Math.random() * (wrapper.offsetHeight - noBtn.offsetHeight));
    
    // Add transform for smoother animation, keeping button within wrapper
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
    noBtn.style.transform = 'translate(0, 0)';  // Reset transform
});