import { exercise1 } from "./conjuro1.js";
import { exercise2 } from "./conjuro2.js";
import { exercise3 } from "./conjuro3.js";
import { exercise4 } from "./conjuro4.js";
import { exercise5 } from "./conjuro5.js";

export const getAllDonuts = async () => {
    return fetch('https://gist.githubusercontent.com/Oskar-Dam/62e7175dc542af53a9d18cb292422425/raw/a6cce2b68ea13a77ec5ea7bdfb4df8f23f9ae95f/donuts.json')
    .then(response => response.json())
}

export const allExercises = (result) => {
    exercise1(result);
    exercise2(result);
    exercise3(result);
    exercise4(result);
    exercise5(result);
}