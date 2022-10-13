//window.onload = function(){
    import {addToggle, addToggleFor} from './libs.js'
     

    const poltrona = document.querySelectorAll("#sala .poltrona");
    const tela = document.querySelector("#tela");
    const btnMenu = document.querySelector("#cursor");
    const displayMenu = document.querySelector('.menu')
  
    addToggle(btnMenu, displayMenu,'showMenu');
    addToggleFor(poltrona, 'reserva');

    const sala = document.querySelectorAll("#sala > div");
    const carrinho = document.querySelector("#carrinho");
    const total = document.querySelector("#total");

    let tl = 0;

    let numPoltronas = [];

    let idx = -1;

    sala.forEach(function(compra){
        compra.addEventListener('click', function(){
            if(compra.classList.contains("reserva")){
                numPoltronas.push(`${compra.textContent} `);
                carrinho.textContent = numPoltronas;
                tl += Number(compra.dataset.preco);
                total.value = tl;
            } else {
                idx = numPoltronas.indexOf(`${compra.textContent} `);
                numPoltronas.splice(idx, 1);
                carrinho.textContent = numPoltronas;
                tl -= Number(compra.dataset.preco);
                total.value = tl;
            }
        })
    })

    /*        compra.addEventListener('click', function(){
        if(compra.classList.contains("reserva")){
            carrinho.textContent += `${compra.textContent} `;
            tl += Number(compra.dataset.preco);
            total.value = tl;
        } else {
            carrinho.textContent -= `${compra.textContent} `;
            tl -= Number(compra.dataset.preco);
            total.value = tl;
        }*/