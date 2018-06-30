
# valid-south-african-id
[![package version](https://img.shields.io/npm/v/valid-south-african-id.svg?style=flat-square)](https://npmjs.org/package/valid-south-african-id)
[![package downloads](https://img.shields.io/npm/dm/valid-south-african-id.svg?style=flat-square)](https://npmjs.org/package/valid-south-african-id)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/valid-south-african-id.svg?style=flat-square)](https://npmjs.org/package/valid-south-african-id)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/valid-south-african-id.svg)](https://greenkeeper.io/)

> 🇿🇦 Perform regex and checksum match to check if given number string is a valid South African ID

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install valid-south-african-id
$ # OR
$ yarn add valid-south-african-id
```

## Usage

```js
const validSouthAfricanId = require('valid-south-african-id')

console.log(validSouthAfricanId('yourIdNumber')) // true || false
```

### CLI

```sh
$ npm install --global valid-south-african-id
# OR
$ yarn global add valid-south-african-id
```

Then:

```sh
$ valid-sa-id 9202204720082
# false
```

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    