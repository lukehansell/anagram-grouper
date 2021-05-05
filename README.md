# Anagram Grouper

Command line app to group a series of words from a given file with their anagrams.
Written in Typescript. Compiles to Javascript.

## Installation
From within this directory run the following:
`npm i -g .`
This fakes a npm installation globally

(If this project were deployed to npm you could run: `npm i -g anagram-grouper`)

From the root directory you can also run `npm run build` to produce the distributable version which can then be used as follows:
`./dist/index.js <Path to file>`

## Usage
`anagram-grouper <Path to file>` - runs the anagram grouper on the given file and outputs grouped anagrams to the console.

Files should be structured such that each new word appears on a new line.
The file should be a .txt file.

## Development

### Installation
Requires node version 14 or above.

`npm i` - installs dependencies

### Developing
- `npm run build` - builds the dist versions
- `npm t` - runs the tests
- `npm run cli` - runs the script for development purposes
- `npm run lint` - lints the project for styling errors

## Tech used
- `commander` - used for the command line arguments
- `jest` - testing library
- `typescript` - prevents type-error bugs and reduces reliance on tests
- `fast-check` - used for property based testing

## Further documentation
- [Design](./documentation/design.md) details, discussing the reasoning and Big O analysis
