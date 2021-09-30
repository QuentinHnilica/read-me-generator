// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');
const Choices = require('inquirer/lib/objects/choices');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Whats the title?'
    },
    {
        type: 'input',
        name: 'description',
        message: "Discribe your Project"
    },
    {
        type: 'input',
        name: 'install',
        message: "What do you need to install?",
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter the link to your demo'
    },
    {
        type: 'checkbox',
        name: 'technologies',
        message: 'What tech did you use? Check all that apply',
        choices: ['JavaScript', 'CSS', 'HTML', 'NodeJS', 'Python', 'C++', 'C#']
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose your license, Nave',
        choices: ['MIT', 'Apache 2.0', 'Creative Commons', 'GNU General Public', 'none']
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email adress'
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your Git Hub username?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers =>{
        console.log("generateReadMe")
        writeToFile("ReadMe.MD", generateMarkdown({...answers}))
        
    })
}

// Function call to initialize app
init();
