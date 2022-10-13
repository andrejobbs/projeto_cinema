const addToggle = function(comp, el, style){
    comp.addEventListener('click', function(){
        el.classList.toggle(style);
    })
}

const addToggleFor = function(comp, style){
    comp.forEach(function(p){
        p.addEventListener('click', ()=>{
              p.classList.toggle(style)    
        } );
    })
}
 
export {addToggle, addToggleFor}
