# Automated Tests for Phoebus Tecnologia Home Page

### Project that tests some of Phoebus page functions and employs a CI/CD pipeline with Github Actions.

## Tools used:
- JavaScript
- Cypress
- xpath lib for Cypress
- Github Actions

## About GitHub Actions with Cypress:

A config to CI/CD with cypress tests was made, following the official documentation:
https://docs.cypress.io/guides/continuous-integration/github-actions#Basic-Setup

Within the Actions tab, it's possible for the tester to check and aprove the deployment process.

### Demo Image:

<div align="center">
  <img width="440px" height="290px" src="/assets/actions.jpg" />
</div>
  

## Usage:

To use this 2e2 tool, import the project:

```bash
git clone 'git@github.com:calopessoa/phoebus-test.git'
```
Then, move to the local folder:

```bash
cd phoebus-test
```
Then, install the dependencies:

```bash
npm install
```
Finally, run the script for cypress:

```bash
npm run test
```
Follow the UI directions for using the test suite
