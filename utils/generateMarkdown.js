// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
  if(license !== 'none'){
    switch (license) {
      case 'MIT':
        return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
      case 'Apache 2.0':
        return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
      case 'Creative Commons': 
        return `![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)`
      case 'GNU General Public':
        return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    }
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none'){
    switch (license) {
      case 'MIT':
        return `(https://opensource.org/licenses/MIT)`
      case 'Apache 2.0':
        return `(https://opensource.org/licenses/Apache-2.0)`
      case 'Creative Commons':
        return `(http://creativecommons.org/publicdomain/zero/1.0/)`
      case 'GNU General Public':
        return `(https://www.gnu.org/licenses/gpl-3.0)`
    }
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none'){
    switch (license) {
      case 'MIT':
        return `## License ${renderLicenseBadge(license)} ${renderLicenseLink(license)}`
      case 'Apache 2.0':
        return `## License ${renderLicenseBadge(license)} ${renderLicenseLink(license)}`
      case 'Creative Commons':
        return `## License ${renderLicenseBadge(license)} ${renderLicenseLink(license)}`
      case 'GNU General Public':
        return `## License ${renderLicenseBadge(license)} ${renderLicenseLink(license)}`
    }
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  # Table of Contents
 [Installation](#install)
 [Description](#description)
 [Test](#test)
 [Fourth Example](#fourth-examplehttpwwwfourthexamplecom)

  ## Installation
  ${data.install}
  
  ## Description
  ${data.description}

  ${renderLicenseSection(data.license)}
  
  
  ## Test
  ${data.test}
  
`;
}

module.exports = generateMarkdown;
