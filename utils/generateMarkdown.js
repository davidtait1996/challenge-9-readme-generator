// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return "  ";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return "  ";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return "  ";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description

  ${data.description}  

  ---

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)

  ---

  ### Installation

  ${data.install}  

  ---

  ### Usage

  ${data.usage}  

  ---

  ### Contribution

  ${data.contribution}

  ---

  ### License

  ${renderLicenseBadge()}
  ${renderLicenseLink()}
  ${renderLicenseSection()}

  ---

  ### Tests

  ${data.test}  

  ---

  ### Questions

  [Github Link](https://www.github.com/${data.github})  
  You can reach me here: ${data.email}

  ---
`;
}

module.exports = generateMarkdown;
