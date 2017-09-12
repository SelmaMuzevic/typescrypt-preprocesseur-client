import { Compteur } from './example';

const compteur = new Compteur();
const para = document.querySelector('#para');


let button = document.querySelector('#button');
button.addEventListener('click', (event) => {

    compteur.increment();
    para.textContent = compteur.showCount().toString();
});

compteur.increment();
compteur.increment();
compteur.increment();

console.log(compteur.showCount());


