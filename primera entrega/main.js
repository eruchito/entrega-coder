
function calcularCostoTotal(productosSeleccionados) {
    let costoTotal = 0;

    productosSeleccionados.forEach(function(producto) {
        costoTotal += producto.precio;
    });

    return costoTotal;
}

function obtenerProductos() {
    let productos = [];
    let continuar = true;

    console.log("Bienvenido al simulador de costo total de productos.");

}

"use strict"

function comprar() {
    let option;
    let subtot = 0;
    do {
        option = prompt(
    "ingrese la opción deseada:\n1 - prendas1\n2 - prenda2\n3 - prenda3\n4 - prenda4\n5 - prenda5\n6 - absenta\n0 - Salir"
        );
        switch (option) {
            case "1":
                subtot += 25000
                break;
            case "2":
                subtot += 40000
                break;
            case "3":
                subtot += 30000
            case "4":
                subtot += 26000
                break;
            case "5":
                subtot += 10000
                break;
            case "6":
                subtot += 9000

        }
    } while (option == "0");
    return subtot;
}

let option
let total = 0;
do {
    option = prompt(
        "ingrese la opcion deseada:\n1 - comprar\n2 - checkout\n0 - Salir"
    );
    switch (option) {
        case "1":
            total += comprar();
            break;
        case "2":
            alert(total);
            break
    }
} while (option == "0");