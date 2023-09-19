export const exercise5 = (result) => {
    console.log(``);
    console.log(`---------------------------------- Ejercicio 5: ----------------------------------`);
    console.log(``);
    modifyFatTrans(result);
    console.log(``);
    modifyMoreThan50Sugar(result);
    console.log(``);
    createNewVitamine(result);
    console.log(``);
    modifyDailyValue(result);
    console.log(``);
    createNewAlergenAttribute(result);
}

const modifyFatTrans = (result) => {
    console.log("LOS DONUTS CON EL COLESTEROL > 12 MODIFICAR LAS GRASAS TRANS A 3.2GR: ")

    result.items.item.forEach(element => {
        let cholesterolNumber = Number(element.nutrition_facts.nutrition.cholesterol.daily_value.substring(0, element.nutrition_facts.nutrition.cholesterol.daily_value.length - 1))
        if(cholesterolNumber  > 12){
            element.nutrition_facts.nutrition.fat.fat_type.trans = "3.2g";
        }
        console.log(`${element.name}: ${element.nutrition_facts.nutrition.fat.fat_type.trans}`)
    })
}

const modifyMoreThan50Sugar = (result) => {
    console.log("DONUTS CON AZÚCAR > 50 MODIFICAR EL AMOUNT DE LOS DETALLES DE CARBOHIDRATOS A 42GR: ")

    result.items.item.forEach(element => {
        let sugarNumber = Number(element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars.substring(0, element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars.length - 1))
        if(sugarNumber  > 50){
            element.nutrition_facts.nutrition.carbohydrate.carbs_detail.amount = "42g";
        }
        console.log(`${element.name}: ${element.nutrition_facts.nutrition.carbohydrate.carbs_detail.amount}`)
    })
}

const createNewVitamine = (result) => {
    console.log("AÑADIR UNA VITAMINA LLAMADA 'NITACINA' AL DONUT CON EL NOMBRE 'MAGIC FUSION': ");
    result.items.item.filter(element => {
        if(element.name.substring(6, element.name.length) === "Fusion"){
            let newVitamine = {type: "Nitacina", percent: '0%'}
            element.nutrition_facts.nutrition.vitamines.push(newVitamine);
            console.log(element.nutrition_facts.nutrition.vitamines);
        }
    })
}

const modifyDailyValue = (result) => {
    console.log("EL DAILY VALUE DE LOS CARBOHIDRATOS DE TODOS LOS DONUTS VA A SER DE 53%: ");
    result.items.item.map(element => {
        element.nutrition_facts.nutrition.carbohydrate.daily_value = "53%"
        console.log(`name: ${element.name},     daily_value: ${element.nutrition_facts.nutrition.carbohydrate.daily_value}`)
    })
}

const createNewAlergenAttribute = (result) => {
    console.log("CREARLE UN NUEVO ATRIBUTO 'ALERGEN' AL DONUT LLAMADO 'RELAXING' Y QUE DENTRO DE EL PONGA 'GLUTEN FREE': ");
    result.items.item.map(element => {
        let nameArray = element.name.split(' ');
        if(nameArray[0] === 'Relaxing'){
            element.alergen = "Gluten Free";
            console.log(element)
        }
    })
}
