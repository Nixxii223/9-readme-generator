// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case "MIT":
            return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
            break;
        case "Apache 2.0":
            return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
            break;
        case "GPL 3.0":
            return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
            break;
        case "BSD 3":
            return "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)"
            break;
        default:
            return ""
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "MIT") {
        return "https://opensource.org/licenses/MIT"
    }
    else if (license === "Apache 2.0") {
        return "https://opensource.org/licenses/Apache-2.0"
    }
    else if (license === "GPL 3.0") {
        return "https://www.gnu.org/licenses/gpl-3.0"
    }
    else if (license === "BSD 3") {
        return "https://opensource.org/licenses/BSD-3-Clause"
    }
    else {
        return ""
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    const badge = renderLicenseBadge(license);
    const link = renderLicenseLink(license);

    // Return the formatted license section
    return `
## License
${badge}

This project is licensed under the [${license}](${link}) license.
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const licenseSection = renderLicenseSection(data.license);

    return `# ${data.title}
  
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Credits](#credits)
  * [Badges](#badges)
  * [Features](#features)
  * [Tests](#tests)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${licenseSection}

  ## Credits
  ${data.credits}


  ## Badges 
  ${data.badges}

  ## Features
  ${data.features}

  ## Tests
  ${data.tests}

  `


}

module.exports = generateMarkdown;
