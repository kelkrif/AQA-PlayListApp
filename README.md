# AQA-PlayListApp Automated QA Tests

This repository contains automated tests for the PlayListApp application using Cypress.

## Test Structure
- Tests are stored in `cypress/e2e/`
- Configuration files: `cypress.config.js`, `package.json`

## Setup Instructions

### 1. Install Required Tools
- Install Node.js (Version: v22.14.0)
- Install Git
- Install Visual Studio Code (optional)
- Verify installation with these commands:
node -v
npm -v
code -v
git --version

If versions appear, everything is fine.

### 2. Get the Repository
1. Open terminal/command prompt
2. Clone the repository: `git clone <repository link>`
3. Navigate to project folder where you clone repository: `cd <project folder name>`
4. Make sure the project has a "package.json" & "cypress.config.js"

### 3. Install Dependencies
1. Run command: `npm install`

### 4. Run Tests
You can run tests in two ways:

#### Headless Mode (Command Line)
npx cypress run

#### UI Mode
npx cypress open
Then:
1. Select E2E Testing
2. Choose your preferred browser
3. Run tests from the Cypress test runner interface
