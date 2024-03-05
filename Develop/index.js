// TODO: Include packages needed for this application
let inquirer = require("inquirer");
let fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of the README?',
    name: 'title',
},
{
    type: 'input',
    message: 'Write a brief description of the application:',
    name: 'description',
},
{
    type: 'input',
    message: 'Are there any installation instructions?',
    name: 'installation',
},
{
    type: 'input',
    message: 'Explain the usage of the application:',
    name: 'usage',
},
{
    type: 'input',
    message: 'What license are you using?',
    name: 'license',
},
{
    type: 'input',
    message: 'Who contributed to the application?',
    name: 'credits',
},
{
    type: 'input',
    message: 'Does the application have any badges?',
    name: 'badges',
}, {
    type: 'input',
    message: 'Are there any special features?',
    name: 'features',
},
{
    type: 'input',
    message: 'Are there any tests for the application?',
    name: 'tests',
}];
//no need to add questions like "what was your motivation"

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => (err ? console.error(err) : console.log("README.md created successfully!")));
  }
  
  // TODO: Create a function to initialize app
  function init() {
    inquirer.prompt(questions)
      .then((response) => {
        // Call generateMarkdown to get the content
        const markdownContent = generateMarkdown(response);
  
        // Pass the content to writeToFile
        writeToFile('README.md', markdownContent);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
  // Function call to initialize app
  init();