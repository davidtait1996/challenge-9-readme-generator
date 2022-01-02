// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
  "What is the title of your project?",
  "What is a description of your project?",
  "What are the installation instructions?",
  "What is the usage information?",
  "What are the contribution guidelines?",
  "What are the test instructions?",
  "What is your email?",
  "What is your github username?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./${fileName}.md`, data, err => {
      if(err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'README created!'
      });
    });
  });
}

// TODO: Create a function to initialize app
function init()  {
  console.log(`
  =================
  Add a New READ ME
  =================
  `);

  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: questions[0],
      validate: title => {
        if(title) {
          return true;
        } else {
          console.log("Please enter your project name.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: questions[1],
      validate: description => {
        if(description) {
          return true;
        } else {
          console.log("Please enter your project description.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'install',
      message: questions[2],
      validate: install => {
        if(install) {
          return true;
        } else {
          console.log("Please enter your project installation instructions.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: questions[3],
      validate: usage => {
        if(usage) {
          return true;
        } else {
          console.log("Please enter your project usage info.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'contribution',
      message: questions[4],
      validate: contribution => {
        if(contribution) {
          return true;
        } else {
          console.log("Please enter your project contribution guidelines.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'test',
      message: questions[5],
      validate: test => {
        if(test) {
          return true;
        } else {
          console.log("Please enter your project test instructions.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: questions[6],
      validate: email => {
        if(email) {
          return true;
        } else {
          console.log("Please enter your email.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: questions[7],
      validate: github => {
        if(github) {
          return true;
        } else {
          console.log("Please enter your github username.");
          return false;
        }
      }
    }
  ])
  .then(projectData => {
    return generateMarkdown(projectData)
  })
  .then(markdownData => {
    return writeToFile("some project", markdownData);
  })
}

// Function call to initialize app
init();
