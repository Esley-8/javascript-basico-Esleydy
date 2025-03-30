function tablaMultiplicar(numero) {
    console.log("Tabla de multiplicar de " + numero + ":");
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}

// Ejemplo de uso  
const numero = 5; 
tablaMultiplicar(numero);

