// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");


// TODO: Create an array of questions for user input
// Title, Table of Contents, Description, Installation, Usage, License, Contributing, Tests, and Questions
//Description, Installation, Usage, Contributing, and Tests
const questions = [
    {
        type: "input",
        message: "Enter Project Title",
        name: "title",
    },

    {
        type: "input",
        message: "Enter Description",
        name: "description",
    },

    {
        type: "input",
        message: "Enter Installation Instructions",
        name: "installation",
    },

    {
        type: "input",
        message: "Enter Usage Information",
        name: "usage",
    },

    { // Lists:
        //Apache - [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
        //Eclipse - [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)
        // ISC - [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
        // MIT - [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
        // The Unlicense - [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
        //Fuck - [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)

        type: "list",
        message: "Select License",
        name: "license",
        choices: [
            "Apache 2.0",
            "Eclipse Public License 1.0",
            "ISC",
            "MIT",
            "The Unlicense",
            "The Do What the Fuck You Want to Public License",
        ]
    },

    {
        type: "input",
        message: "Enter Contribution Guidelines",
        name: "contributing",
    },

    {
        type: "input",
        message: "Enter Test Instructions",
        name: "tests",
    },

    {
        type: "input",
        message: "Enter Github Username",
        name: "username",
    },

    {
        type: "input",
        message: "Enter Email Address",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
