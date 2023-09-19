export const exercise1 = (result) => {
    console.log(``);
    console.log(`---------------------------------- Ejercicio 1: ----------------------------------`);
    console.log(``);
    maxSugar(result);
    console.log(``);
    maxIron(result);
    console.log(``);
    maxProteine(result);
    console.log(``);
    minFibre(result);
    console.log(``);
}

const maxSugar = (result) => {

    console.log("SACAR EL DONUT CON MÁS AZUCAR: ");
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
    console.log("SACAR EL DONUT CON MÁS HIERRO: ");
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
    console.log("SACAR EL DONUT CON MÁS PROTEÍNA: ")
    const proteineNum = result.items.item.map(element => {
        const proteinNumber = element.nutrition_facts.nutrition.proteine.substring(0, element.nutrition_facts.nutrition.proteine.length - 1)
        return Number(proteinNumber);
    })
    const proteineMax = Math.max(...proteineNum);

    const findNumber = result.items.item.filter(element => proteineMax == element.nutrition_facts.nutrition.proteine.substring(0, element.nutrition_facts.nutrition.proteine.length - 1));

    console.log(`El donut con mas proteina es ${findNumber[0].name}`);
}

const minFibre = (result) => {
    console.log("SACAR EL DONUT CON MENOS FIBRA: ")
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