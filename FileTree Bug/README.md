# JavaScript - FileTree Bug

## Introduction

Here is a part of an application that creates a file tree data structure from JSON input. However, there are one or more bugs in this code. It seems that for some data sets this code creates an incorrect tree structure.

Another developer was able to isolate the bug and wrote a test case that simulates the bug. See `src/app.spec.js` for test case details. You can build the project to see which tests are failing.

## Problem Statement

Your job is to find the bug and fix it. The only file that should be changed is `src/app.js`. You can always build the project to see if your solution works.

# Setup

Follow these steps if you are using zip/git mode (i.e. not available inside Devskiller in-browser IDE):

1. `npm install` – install dependencies
2. `npm test` – run all tests once (this will be used to evaluate your solutions)
3. `npm run test:watch` - run all tests in _watch mode_ (optionally, you can use it locally if you prefer)

Good luck!
