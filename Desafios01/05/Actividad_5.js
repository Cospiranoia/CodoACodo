const precio = prompt('Ingrese un precio');
const porcentaje = prompt('Ingrese cantidad de descuento');
function realizarDescuento (valor, porcentaje) {
    const descuento = valor * porcentaje / 100;
    return valor - descuento;
};

alert(`El valor con descuento es ${realizarDescuento(precio, porcentaje)}`);