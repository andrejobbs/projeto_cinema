import {addToggle} from './libs.js'


window.onload = () => {

    const poltrona = document.querySelectorAll('#sala .poltrona');
    const tela = document.querySelector('#tela');
    const btnMenu = document.querySelector('.cursor');
    const displayMenu = document.querySelector('.menu');

    const poltronaSelecionada = document.querySelector('#poltronaSelecionada');
    const total = document.querySelector('#total');

    let tl = 0;

    
    let reserva = [];

    addToggle(btnMenu, displayMenu, 'showMenu');


    poltrona.forEach(function(item){
        item.addEventListener('click', () => {
            item.classList.toggle('reserva')

            if (item.classList.contains('reserva')){
                reserva.push(item.textContent);

                poltronaSelecionada.textContent = `${reserva} `;

                tl += Number(item.dataset.preco);
                total.value = `R$ ${tl.toFixed(2)}`;
            } else {

                if (reserva.indexOf(item.textContent))

                poltronaSelecionada.textContent = " ";

                tl -= Number(item.dataset.preco);
                total.value = `R$ ${tl.toFixed(2)}`; 
            }
        })
    })

    for(let p in poltrona) {
        
    }

    poltrona.addEventListener('click', () => {
    	alert('poltrona reservada');
    });
}