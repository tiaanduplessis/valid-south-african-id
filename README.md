<h1 align="center">🇿🇦 valid-south-african-id</h1>
<div align="center">
  <strong>Perform regex and checksum match to check if given number string valid South African ID</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/valid-south-african-id">
    <img src="https://img.shields.io/npm/v/valid-south-african-id.svg?style=flat-square" alt="Package version" />
  </a>
  <a href="https://npmjs.org/package/valid-south-african-id">
  <img src="https://img.shields.io/npm/dm/valid-south-african-id.svg?style=flat-square" alt="Downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/valid-south-african-id">
    <img src="https://img.shields.io/travis/tiaanduplessis/valid-south-african-id.svg?style=flat-square" alt="Travis Build" />
  </a>
  <a href="https://github.com/RichardLitt/standard-readme)">
    <img src="https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square" alt="Standard Readme" />
  </a>
  <a href="https://badge.fury.io/gh/tiaanduplessis%2Fvalid-south-african-id">
    <img src="https://badge.fury.io/gh/tiaanduplessis%2Fvalid-south-african-id.svg?style=flat-square" alt="GitHub version" />
  </a>
  <a href="https://dependencyci.com/github/tiaanduplessis/valid-south-african-id">
    <img src="https://dependencyci.com/github/tiaanduplessis/valid-south-african-id/badge?style=flat-square" alt="Dependency CI" />
  </a>
  <a href="https://github.com/tiaanduplessis/valid-south-african-id/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/valid-south-african-id.svg?style=flat-square" alt="License" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs" />
  </a>
  <a href="https://www.paypal.me/tiaanduplessis/1">
    <img src="https://img.shields.io/badge/$-support-green.svg?style=flat-square" alt="Donate" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/valid-south-african-id/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/valid-south-african-id.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/valid-south-african-id/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/valid-south-african-id.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20valid-south-african-id!%20https://github.com/tiaanduplessis/valid-south-african-id%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/valid-south-african-id.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="tiaan.beer">Tiaan</a> and <a href="https://github.com/tiaanduplessis/valid-south-african-id/graphs/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#cli">CLI</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

[![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/valid-south-african-id.svg)](https://greenkeeper.io/)

```sh
$ npm install --save valid-south-african-id
# OR
$ yarn add valid-south-african-id
```

## Usage

Module exports a single `function` that takes a number `string` as argument and returns a `bool`.

```js
const validSouthAfricanId = require('valid-south-african-id')

console.log(validSouthAfricanId('yourIdNumber')) // true || false

```

## CLI

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

Contributions are welcome. Please open up an issue or create PR if you would like to help out.

Note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

Licensed under the MIT License.
