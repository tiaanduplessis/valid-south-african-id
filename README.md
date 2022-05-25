
# valid-south-african-id
[![package version](https://img.shields.io/npm/v/valid-south-african-id.svg?style=flat-square)](https://npmjs.org/package/valid-south-african-id)
[![package downloads](https://img.shields.io/npm/dm/valid-south-african-id.svg?style=flat-square)](https://npmjs.org/package/valid-south-african-id)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/valid-south-african-id.svg?style=flat-square)](https://npmjs.org/package/valid-south-african-id)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

🇿🇦 Perform regex and checksum match to check if given number string is a valid South African ID

## Table of Contents

- [valid-south-african-id](#valid-south-african-id)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
    - [CLI](#cli)
  - [Contributing](#contributing)
  - [License](#license)

## Install

Install the package locally within you project folder with your package manager:

With `npm`:
```sh
npm install valid-south-african-id
```

With `yarn`:
```sh
yarn add valid-south-african-id
```

With `pnpm`:
```sh
pnpm add valid-south-african-id
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

## Contributing

Got an idea for a new feature? Found a bug? Contributions are welcome! Please [open up an issue](https://github.com/tiaanduplessis/valid-south-african-id/issues) or [make a pull request](https://makeapullrequest.com/).

## License

[MIT © Tiaan du Plessis](./LICENSE)
    