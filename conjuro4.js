export const exercise4 = (result) => {
    console.log(``);
    console.log(`---------------------------------- Ejercicio 4: ----------------------------------`);
    console.log(``);
    donutBuy(result);
    console.log(``);
}

const donutBuy = (result) => {
    console.log("MOSTRAR CUÁNTOS DONUTS DE CADA TIPO PODEMOS COMPRAR Y LAS MONEDAS SOBRANTES: ")

    const donut = result.items.item.map(element => element.ppu);
    let cont = 1;
    donut.map(element => {
        let times = Math.floor(4/element);
        let usedMoney = times * element;
        let result = 4 - usedMoney;
        console.log(`donut ${cont}: puedes comprar ${times} donuts y las monedas restantes son ${result.toFixed(2)}`)
        cont++;
    })
}