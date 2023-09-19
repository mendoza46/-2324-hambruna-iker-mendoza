export const exercise2 = (result) => {
    console.log(``);
    console.log(`---------------------------------- Ejercicio 2: ----------------------------------`);
    console.log(``);
    donutCalories(result);
    console.log(``);
    donutCarbohydrate(result);
    console.log(``);
    carbohydrateAverage(result);
    console.log(``);
    saturatedFatSum(result);
    console.log(``);
    averageVitamine(result);
    console.log(``);
}

const donutCalories = (result) => {
    console.log("LISTAR TODOS LOS DONUTS Y SUS CALORIAS: ")

    result.items.item.forEach(element => {
        console.log(``);
        console.log(`${element.name} => Calories: ${element.nutrition_facts.nutrition.calories}`);
    });
}

const donutCarbohydrate = (result) => {
    console.log("LISTAR TODOS LOS DONUTS Y SUS CARBOHIDRATOS: ")

    result.items.item.forEach(element => {
        console.log(`${element.name} => Carbohydrates: `);
        console.log(element.nutrition_facts.nutrition.carbohydrate.carbs_detail);
    });
}

const carbohydrateAverage = (result) => {
    console.log("MOSTRAR LA MEDIA DE CALORÍAS DE TODOS LOS DONUTS: ");

    const calories = result.items.item.map(element => element.nutrition_facts.nutrition.calories );
    let total = calories.reduce((a, b) => a + b, 0);
    const average = total / calories.length;
    console.log(`La media de calorías de todos los donuts es: ${average}`);
}

const saturatedFatSum = (result) => {
    console.log("MOSTRAR LA SUMA DE LAS GRASAS SATURADAS DE TODOS LOS DONUTS: ")

    const saturatedFat = result.items.item.map(element => Number(element.nutrition_facts.nutrition.fat.fat_type.saturated.substring(0, element.nutrition_facts.nutrition.fat.fat_type.saturated.length - 1)));
    let total = saturatedFat.reduce((a, b) => a + b, 0);
    console.log(`La suma de las grasas saturadas de todos los donuts es: ${total}`);
}

const averageVitamine = (result) => {
    console.log("MOSTRAR EL PORCENTAJE MEDIO DE CADA VITAMINA: ");
    let vitaminASum = 0;
    let vitaminCSum = 0;
    let vitaminCalciumSum = 0;
    let vitaminIronSum = 0;
    const saturatedFat = result.items.item.map(element =>  {
        let totalVitamines = element.nutrition_facts.nutrition.vitamines.map(vitamine => {
            if(vitamine.type === "Vitamin A"){
                if(vitamine.percent.substring(vitamine.percent.length - 1, vitamine.percent.length) == '%'){
                vitaminASum = vitaminASum + Number(vitamine.percent.substring(0, vitamine.percent.length - 1))
                }
                else{
                    vitaminASum = vitaminASum + Number(vitamine.percent);
                }
                return vitaminASum;
            }
            else if(vitamine.type === "Vitamin C"){
                if(vitamine.percent.substring(vitamine.percent.length - 1, vitamine.percent.length) == '%'){
                vitaminCSum = vitaminCSum + Number(vitamine.percent.substring(0, vitamine.percent.length - 1))
                }
                else{
                    vitaminCSum = vitaminCSum + Number(vitamine.percent);
                }
                return vitaminCSum;
            }
            else if(vitamine.type === "Calcium"){
                if(vitamine.percent.substring(vitamine.percent.length - 1, vitamine.percent.length) == '%'){
                vitaminCalciumSum = vitaminCalciumSum + Number(vitamine.percent.substring(0, vitamine.percent.length - 1))
                }
                else{
                    vitaminCalciumSum = vitaminCalciumSum + Number(vitamine.percent);
                }
                return vitaminCalciumSum;
            }
            else if(vitamine.type === "Iron"){
                if(vitamine.percent.substring(vitamine.percent.length - 1, vitamine.percent.length) == '%'){
                vitaminIronSum = vitaminIronSum + Number(vitamine.percent.substring(0, vitamine.percent.length - 1))
                }
                else{
                    vitaminIronSum = vitaminIronSum + Number(vitamine.percent);
                }
                return vitaminIronSum;
            }
        })
       return totalVitamines;
    });



    let totalVitaminA = (saturatedFat[4][0] / 5);
    let totalVitaminC = (saturatedFat[4][1] / 5);
    let totalVitaminCalcium = (saturatedFat[4][2] / 5);
    let totalVitaminIron = (saturatedFat[4][3] / 5);
    console.log(`Porcentaje medio de la vitamina A es ${totalVitaminA}%`) 
    console.log(`Porcentaje medio de la vitamina C es ${totalVitaminC}%`) 
    console.log(`Porcentaje medio de la vitamina Calcium es ${totalVitaminCalcium}%`) 
    console.log(`Porcentaje medio de la vitamina Iron es ${totalVitaminIron}%`) 
}