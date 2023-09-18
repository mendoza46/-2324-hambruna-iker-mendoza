const getAllDonuts = async () => {
    return fetch('https://gist.githubusercontent.com/Oskar-Dam/62e7175dc542af53a9d18cb292422425/raw/a6cce2b68ea13a77ec5ea7bdfb4df8f23f9ae95f/donuts.json')
    .then(response => response.json())
}

const fetchAsyncData = async () => {
    try{
        const result = await getAllDonuts();
        maxSugar(result);
    } catch (error){
        console.log(error.message)
    }
} 

fetchAsyncData();

const maxSugar = (result) => {
    const resultado = result.items.item.map(element => {
        const sugarNumber = element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars.substring(0, 2)
        const stringNumber = Number(sugarNumber);
        return stringNumber;
    })

    const sugarMax = Math.max(...resultado);

    const findNumber = result.items.item.filter(element => sugarMax == element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars.substring(0, 2));
    
    console.log(`El donut con mas azúcar es ${findNumber[0].name}`);
    
}