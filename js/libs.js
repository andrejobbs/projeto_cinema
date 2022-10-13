const addToggle = function(comp, el, style){
    comp.addEventListener('click', function(){
        el.classList.toggle(style);
    })
}

export {addToggle}