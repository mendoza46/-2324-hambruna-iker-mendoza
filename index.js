const getAllDonuts = async () => {
    return fetch('https://gist.githubusercontent.com/Oskar-Dam/62e7175dc542af53a9d18cb292422425/raw/a6cce2b68ea13a77ec5ea7bdfb4df8f23f9ae95f/donuts.json')
    .then(response => response.json())
}

const fetchAsyncData = async () => {
    try{
        const result = await getAllDonuts();
        // maxSugar(result);
        maxIron(result);
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