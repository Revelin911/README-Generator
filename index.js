// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from ' fs';

// TODO: Create an array of questions for user input
const questions = ({ title, description, table-of-contents, installation, usage, license, contributing, tests, questions}) =>
    `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`;

inquirer
.prompt ([
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
     },
{
    type:'input',
    name: 'description, installation instructions, usage information, contribution guidelines, test instructions',
    message: 'Provide a short description of your project using questions such as, what, why, and how?',
},
{
    type: 'input',
    name: 'installation',
message: 'What steps are required to install?',
},
{
    type: 'input',
    name: 'usage',
    message: 'What are the instructions to follow for usage?',
},
{
    type: 'input',
    name: 'credits',
    message: 'Are the credits/ links to add?',
},
{
    type: 'list',
    name: 'license',
    message: 'What license is being used?',
    choices: ['MIT', 'GPLv2', 'Apache', 'Other']
},
{
    type: 'input',
    name: 'tests',
    message: 'What tests are available for the application to run?',
},
{
    type: 'input',
    name: 'Questions',
    message: 'What is your Guthub username',
},
{
type: 'input',
name: 'Questions',
message: 'What is your email address?',
},
]);    
    .then((answers) =>
    const 
    )
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
