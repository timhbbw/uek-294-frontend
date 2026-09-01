let button = document.querySelector('#button');
button.addEventListener('click', countup);

let counter = 0;
let counterdisplay = document.querySelector('#counter');

let counter1 = 0;
let counterdisplay1 = document.querySelector('#counter1');
let button2 = document.querySelector('#button1');
button2.addEventListener('click', countup1);

function countup() {
    counter++;
    counterdisplay.textContent = counter;
}

function countup1() {
    counter1++;
    counterdisplay1.textContent = counter1;
}