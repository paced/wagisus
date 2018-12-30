# Wagisus

> Nuxt.js + Express.js + Google App Engine + GitLab CI/CD Marketing Web App Generator

## Introduction

This application generator will start up a Nuxt.js + Express.js project that with CI managed by GitLab and deployed to Google App Engine. Please read the resulting README.md file after generating a project to see how easy it is to deploy!

Best practices are kept in mind and this project. Google Audits passes with 100/100 scores on Performance, SEO, Best Practices, and Accessibility when testing projects based on this generator. It passes an A+ score on Mozilla Observatory for security headers and other security considerations.

Most importantly, all of the changes are documented and not too different from the standard Nuxt deployment. This hopefully makes for an enjoyable development experience!

## Installation

```bash
npm install -g yo
npm install -g generator-wagisus
```

## Usage

```bash
yo wagisus
```

## Development

To test running Wagisus, just run:

```bash
npm link
yo wagisus
```

## CI/CD

For the Wagisus generator itself, we need to take into account **versioning** and deployment:

1. On tag, release a new version with the version present in the most recent tag (the one that was just made).
2. Deploy to NPM.

Code quality is run on every change to any branch. A changelog entry is required for each new version or the tag will not deploy.
