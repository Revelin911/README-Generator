// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
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
        name: 'contributions',
        message: 'Can you contribute?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests are available for the application to run?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is being used?',
        choices: ['MIT', 'GPLv2', 'Apache', 'Other']
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Guthub username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

const generateReadMe = (answers) => {
    const licenseBadge = `![badge](https://img.shields.io/badge/LICENSE-${answers.license}-blue)` //enter badge info here
        
    
   return `
${licenseBadge}
# ${answers.title}

## Description
${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributions}

## Tests
${answers.tests} 

## License
${answers.license} //add text where license is coming from

## Questions
For any questions, please reference the information below:
- Github:
[${answers.username}](https://github.com/${answers.username})
- Email:
${answers.email}
`
}



// TODO: Create a function to write README file
function writeToFile(fileName, readmeContent) {
    fs.writeFile(fileName, readmeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README file!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions).then((answers) => {
            const readmeContent = generateReadMe(answers);
            writeToFile('SREADME.md', readmeContent);
        });
}

// Function call to initialize app
init();
