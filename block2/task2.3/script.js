let body = document.querySelector('body');
body.style.backgroundColor = 'lightblue';

let h1text = body.querySelector('h1');
h1text.innerText = 'Tim';

let pelement = document.querySelector('p');
pelement.classList.add('large');

let newlielement = document.createElement('li');
newlielement.textContent = 'Item 3';
let ul = document.querySelector('ul');
ul.appendChild(newlielement);

ul.getElementsByTagName('li')[1].remove();


let img = document.createElement('img');
img.src = 'https://picsum.photos/600/300';
img.alt = 'Platzhalter Bild';
img.classList.add('bild');
h1text.insertAdjacentElement('afterend', img);
