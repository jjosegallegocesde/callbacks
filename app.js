let nombre = "PEDRO EL ESCAMOSO";
console.log(`Iniciando el programa`);


function saludar(nombre) {
    let mensaje = `Hola te saludo desde la función ${nombre}`;
    return (mensaje);
}
console.log(saludar("JUAN"));


let saludar2 = (nombre) => {
    let mensaje = `Hola te saludo desde la función ${nombre}`;
    return (mensaje);
}
console.log(saludar2("CARLOS"));


setTimeout(() => {
    console.log("Hola NODE JS ASINCRONICO");
}, 5000);


console.log(`Finalizando el programa`);