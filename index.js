#! /usr/bin/env node
//This line is called a shebang, it tells the OS to run it with node.js
//import the 'inquirer' module, which is acommand line interface for Node.js
import inquirer from "inquirer";
//Declare a constant 'answers' and assign is to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
const words = answers.sentence.trim().split(" ");
//print the array of words to the console
console.log(words);
//print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
