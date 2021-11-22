    
    const precio = 200;
    
    


    function resumen(){

        const cantidadEntrada = document.getElementById('cantidadEntrada');
        const categoriaEntrada = document.getElementById('categoriaEntrada');

        console.log(cantidadEntrada.value);
        console.log(categoriaEntrada.value);

        precioSinDescuento = cantidadEntrada.value * precio;
        console.log(precioSinDescuento);

        preciofinal = precioSinDescuento * categoriaEntrada.value / 100 ;

        console.log(preciofinal)

        totalCompra.innerHTML = "Total a pagar: " + preciofinal;
        
    }