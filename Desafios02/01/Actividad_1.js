const nombreDB = 'Ivan';
const nombreInput = prompt('Ingrese un nombre');

(function(){
    if(nombreDB == nombreInput){
        return alert('Fui yo!');
    };
    alert('Yo no fui!');
})();

