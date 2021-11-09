const cantidadE = document.getElementById('cantidad');
const calcular = document.getElementById('btnresumen');
const categoria = document.getElementById('categoria');
const total = document.getElementById('totalCompra');
const botonborrar = document.getElementById('btnborrar');

function resumen(){

    console.log(cantidadE.value);
    if(categoria.value == "estudiante"){
        total.innerHTML = "Total a Pagar: $" + " " + ((cantidadE.value)* (200-(200/100*80)));
     }else if(categoria.value == "trainee"){
        total.innerHTML = "Total a Pagar: $" + " " + ((cantidadE.value)* (200-(200/100*50)));
     }else if(categoria.value == "junior"){
        total.innerHTML = "Total a Pagar: $" + " " + ((cantidadE.value)* (200-(200/100*15)));
     }else{
        total.innerHTML = "Total a Pagar: $" + " " + ((cantidad.value) * 200);
     }
}
function borrar(){
    total.innerHTML = "Total a Pagar: $";
}