# AQA-PlayListApp
automated QA tests

Tests are stored in "cypress/e2e/"
Configuration file: "cypress.config.js", "cypress.config.js"

----------------------------------
1) Install Tools

1.1 Install Node.js (Version: v22.14.0)
1.2 Install Git
1.3 Visual Code
1.2 Instalation check by commands:
> node -v
> npm -v
> code -v
> git --version
If versions appear, everything is fine.
----------------------------------
2) Create & Navigate to the project's root folder

2.1 Open terminal/command prompt
2.2 Clone the repository: git clone <repository link>
2.3 Navigate to project folder where you clone repository: cd <project folder name>
2.4 Make sure the project has a "package.json" & "cypress.config.js"
----------------------------------
3) Install dependecies

3.1 Run command: npm install
----------------------------------
4) Run test by command in terminal:
> npx cypress run
or open UI menu:
4.1 npx cypress open
4.2 Select e2e
4.3 choose prefered browser
4.4 Run tests

