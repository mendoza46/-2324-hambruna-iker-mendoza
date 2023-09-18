const getAllDonuts = async () => {
    return fetch('https://gist.githubusercontent.com/Oskar-Dam/62e7175dc542af53a9d18cb292422425/raw/a6cce2b68ea13a77ec5ea7bdfb4df8f23f9ae95f/donuts.json')
    .then(response => response.json())
}

const fetchAsyncData = async () => {
    try{
        const result = await getAllDonuts();
        // maxSugar(result);
        // maxIron(result);
        // maxProteine(result);
        // donutCalories(result);
        // donutCarbohydrate(result);
        // carbohydrateAverage(result);
        // saturatedFatSum(result);
        // averageVitamine(result);
        // batterList(result);
        toppingList(result);
    } catch (error){
        console.log(error.message)
    }
} 

fetchAsyncData();

const maxSugar = (result) => {
    const sugarNum = result.items.item.map(element => {
        const sugarNumber = element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars.substring(0, 2)
        const stringNumber = Number(sugarNumber);
        return stringNumber;
    })

    const sugarMax = Math.max(...sugarNum);

    const findNumber = result.items.item.filter(element => sugarMax == element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars.substring(0, 2));
    
    console.log(`El donut con mas azúcar es ${findNumber[0].name}`);
    
}

const maxIron = (result) => {
    const ironNum = result.items.item.map(element => {
        const typeIron = element.nutrition_facts.nutrition.vitamines.filter( vitamine => 'Iron' === vitamine.type)
        let ironPercent = typeIron[0].percent.substring(0, typeIron[0].percent.length - 1);
        const stringNumber = Number(ironPercent);
        return stringNumber;
    })

    const ironMax = Math.max(...ironNum);

    const findNumber = result.items.item.map(element => {
        let boolean = false;
        element.nutrition_facts.nutrition.vitamines.filter(iron => {
            if(iron.percent.substring(0, iron.percent.length - 1) == ironMax){
                return boolean = true;
            }
        });
        if(boolean === true){
            return element.name;
        }
    });
 
    console.log(`El donut con más hierro es ${findNumber[findNumber.length - 1]}`);
}

const maxProteine = (result) => {
    const proteineNum = result.items.item.map(element => {
        const proteinNumber = element.nutrition_facts.nutrition.proteine.substring(0, element.nutrition_facts.nutrition.proteine.length - 1)
        return Number(proteinNumber);
    })
    const proteineMax = Math.max(...proteineNum);

    const findNumber = result.items.item.filter(element => proteineMax == element.nutrition_facts.nutrition.proteine.substring(0, element.nutrition_facts.nutrition.proteine.length - 1));

    console.log(`El donut con mas proteina es ${findNumber[0].name}`);
}

const minFibre = (result) => {
    const fibreNum = result.items.item.map(element => {
        const sugarNumber = element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre.substring(0, element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre.length - 1)
        const stringNumber = Number(sugarNumber);
        return stringNumber;
    })

    const fibreMin = Math.min(...fibreNum);

    console.log("Los donut con menos fibra son:")
    result.items.item.filter(element => {
        if(fibreMin == element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre.substring(0, element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre.length - 1)){
            console.log("-"+element.name)
            return element.name;
        }
    });
}

const donutCalories = (result) => {

    result.items.item.forEach(element => {
        console.log(``);
        console.log(`${element.name} => Calories: ${element.nutrition_facts.nutrition.calories}`);
    });
}

const donutCarbohydrate = (result) => {

    result.items.item.forEach(element => {
        console.log(`${element.name} => Carbohydrates: `);
        console.log(element.nutrition_facts.nutrition.carbohydrate.carbs_detail);
    });
}

const carbohydrateAverage = (result) => {

    const calories = result.items.item.map(element => element.nutrition_facts.nutrition.calories );
    let total = calories.reduce((a, b) => a + b, 0);
    const average = total / calories.length;
    console.log(`La media de calorías de todos los donuts es: ${average}`);
}

const saturatedFatSum = (result) => {

    const saturatedFat = result.items.item.map(element => Number(element.nutrition_facts.nutrition.fat.fat_type.saturated.substring(0, element.nutrition_facts.nutrition.fat.fat_type.saturated.length - 1)));
    let total = saturatedFat.reduce((a, b) => a + b, 0);
    console.log(`La suma de las grasas saturadas de todos los donuts es: ${total}`);
}

const averageVitamine = (result) => {
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

const batterList = (result) => {

    const batter = result.items.item.map(element => {
        const butterType = element.batters.batter.map(butter => butter.type)
        console.log(`--------`)
        console.log(element.name)
        console.log("butter: " + butterType )
    });
    console.log(batter)
}

const toppingList = (result) => {

    const topping = result.items.item.map(element => {
        const toppingType = element.topping.map(topping => topping.type)
        console.log(`--------`)
        console.log(element.name)
        console.log("butter: " + toppingType )
    });
    console.log(topping)
}