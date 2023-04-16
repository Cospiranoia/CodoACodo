const numero = prompt('Ingrese un numero:');

if(numero >= 0 && numero <= 1000){
    alert('Presupuesto bajo');
}
if(numero >= 1001 && numero <= 3000){
    alert('Presupuesto medio');
}
if(numero >= 3001){
    alert('Presupuesto alto');
};