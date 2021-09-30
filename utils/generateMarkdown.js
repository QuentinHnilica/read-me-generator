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
  let mytech // To create a list of the tech used incase you use many
  for (let i = 0; i < data.technologies.length; i++){
    if (i === 0){
      mytech = '- ' + data.technologies[i] 
    }
    else{
      mytech = mytech + '\n- ' + data.technologies[i] 
    }
  }
  const link = data.link
  let Deployment = ''
  if (link != ''){
    Deployment = 'Deployment'
  }
  let myLicense = ''
  if (data.license != 'none'){
    myLicense = 'License'
  }
  return `# ${data.title}

  ## Description
  ${data.description}

  # Table of Contents
 [Installation](#install)
 [Test](#test)
 [Usage](#usage)
 [Tech](#tech)
 [${Deployment}](#deployment)
 [${myLicense}](#license)
 [Contributions](#contributions)
 [Contact](#contact)

  ## Installation
  ${data.install}
  
  ## Test
  ${data.test}

  ## Usage
  1. ${data.usage1}
  2. ${data.usage2}
  3. ${data.usage3}

  ## Tech
  ${mytech}

  ## ${Deployment}
  ${link}

  ${renderLicenseSection(data.license)}

  ## Contributions
  ${data.contribution}
  
  ## Contact
  for any questions or inquaries send me an email at ${data.email} and follow [my Github](https://www.github.com/${data.gitHub})
`;
}

module.exports = generateMarkdown;
