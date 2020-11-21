var inquirer = require('inquirer');
// array of questions for user

const questions = [{
        type: 'input',
        message: 'What is your project title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is the Description of your Project?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'How would a user install your Project?',
        name: 'install'
    },
    {
        type: 'input',
        message: 'How would someone use this application?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'How would someone contribute to this project?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'How would someone test this application?',
        name: 'test'
    }];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init () {
    inquirer
    .prompt(questions)}
// function call to initialize program
init();
