let robarPlanos = (numeroSerie, despegar) => {
    if (numeroSerie <= 10) {
        let mensaje = `Tenemos el plano de la estrella numero ${numeroSerie}`;
        despegar(null, mensaje);

    } else {
        let mensaje = "Tienen un plano equivocado";
        despegar(mensaje, null);

    }
}

robarPlanos(15, (error, mensaje) => {

    if (error) {
        console.log(error);
    } else {
        console.log(mensaje);
        console.log("estamos despegando la nave");
    }


});