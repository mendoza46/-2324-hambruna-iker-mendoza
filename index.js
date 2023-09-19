import {getAllDonuts, allExercises} from "./service.js";

const fetchAsyncData = async () => {
    try{
        const result = await getAllDonuts();
        allExercises(result);
    } catch (error){
        console.log(error.message);
    }
} 

fetchAsyncData();