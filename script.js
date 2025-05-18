function showQuestion(questionNumber){
    //hide the current question by selecting it by id and setting display to none
    document.getElementById('question' + (questionNumber - 1)).style.display = 'none';

    //show the next question by selecting it by id and setting display to block
    if(questionNumber < 6){
        const nextQuestion = document.getElementById('question' + questionNumber);
        nextQuestion.style.display = 'block';
        setTimeout(() => {
            nextQuestion.style.opacity = 1;
            nextQuestion.style.transform = 'translateY(0)';
        }, 100);
    } else{
        const ending = document.getElementById('ending');
        ending.style.display = 'block';

        setTimeout(() => {
            ending.style.opacity = 1;
            ending.style.transform = 'translateY(0)';
        }, 100);
    }

    hasClickedNo = false;
    idx = 0;
}

let hasClickedNo = false; // Flag to track if the "No" button has been clicked,, make sure to update properly
let idx = 0; // generic index counter for arrays,, make sure to update properly
function greetNoButton(){
    const phrases = [
        'wow',
        'i know you are busy but cmon',
        'really?',
        'last chance'
    ];

    if(!hasClickedNo){
        document.getElementById('question0-text').textContent = 'Nuh uh... try again pooks';
        document.getElementById('question0-img').src = 'https://cdn3.emoji.gg/stickers/2612-side-eye.png';
        hasClickedNo = true;
    }
    else{
        console.log('No button clicked again');
        if (idx < phrases.length){
            document.getElementById('question0-text').textContent = phrases[idx];
            idx++;
        }
        else{
            alert('Missiles incoming....');
        }
    }
}

function q1NoButton(){
    const phrases = [
        'wdym...',
        'dont lie',
        'not even enhypen???',
        'all women do i lie T^T',
        'do you even like me',
        'FINE!! FOREGET IT!!'
    ];

    if(!hasClickedNo){
        document.getElementById('question1-text').textContent = 'Haha very funny...';
        document.getElementById('question1-img').src = 'https://ih1.redbubble.net/image.5393482188.2856/st,small,507x507-pad,600x600,f8f8f8.jpg';
        hasClickedNo = true;
    }
    else{
        console.log('No button clicked again');
        if (idx < phrases.length){
            document.getElementById('question1-text').textContent = phrases[idx];
            idx++;
        }
        else{
            alert('do u want to tell me something..');
        }
    }
}

function q2NoButton(){
    const flashImage = document.getElementById('flashing-image');

    flashImage.style.display = 'block';

    flashImage.classList.add('flash');

    setTimeout(() => {
        flashImage.classList.remove('flash');
        flashImage.style.display = 'none';
    }, 1000);
}

let scale = 1;
function q3NoButton(){
    const yesButton = document.querySelector('#question3 .yes-button');

    scale += 0.2;

    yesButton.style.transform = `scale(${scale})`;
}

//for question 4 the no button will turn into a yes button when hovered
function q4NoHover(button){
    button.textContent = 'Yes';
    button.style.backgroundColor = rgb(43, 237, 127);
}

function q4NoUnhover(button){
    button.textContent = 'No';
    button.style.backgroundColor = rgb(237, 43, 43);
}
//for question 5 the no button will move to a random position when hovered
function q5NoHover(button){
    const container = document.getElementById('question5');
    const containerRect = container.getBoundingClientRect();

    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const maxX = containerRect.width - buttonWidth;
    const maxY = containerRect.height - buttonHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.transform = `translate(${randomX}px, ${randomY}px)`;

}

window.onload = function() {
    document.getElementById('question0').style.display = 'block';
    document.getElementById('question0').style.opacity = 1;
};