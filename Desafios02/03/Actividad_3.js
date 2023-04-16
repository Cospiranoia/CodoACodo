const numero = prompt('Ingrese un numero');

switch(Number(numero)){
    case 1:
        alert('Elegiste a Homero');
        break;
    case 2:
        alert('Elegiste a Marge');
        break;
    case 3:
        alert('Elegiste a Bart');
        break;
    case 4:
        alert('Elegiste a Lisa');
        break;
    default:
        alert('Opcion no valida');
    break;
};