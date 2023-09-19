export const exercise3 = (result) => {
    console.log(``);
    console.log(`---------------------------------- Ejercicio 3: ----------------------------------`);
    console.log(``);
    batterList(result);
    console.log(``);
    toppingList(result);
    console.log(``);
}

const batterList = (result) => {
    console.log("LISTAR CADA DONUT CON SUS POSIBLES MASAS, BUTTER: ")

    result.items.item.map(element => {
        const butterType = element.batters.batter.map(butter => butter.type)
        console.log(`--------`)
        console.log(element.name)
        console.log("butter: " + butterType )
    });
}

const toppingList = (result) => {
    console.log("LISTAR CADA DONUT CON SUS POSIBLES EXTRAS TOPPING: ")

    result.items.item.map(element => {
        const toppingType = element.topping.map(topping => topping.type)
        console.log(`--------`)
        console.log(element.name)
        console.log("butter: " + toppingType )
    });
}