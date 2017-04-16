#!/usr/bin/env node
'use strict'

const validSouthAfricanId = require('./')
const id = process.argv[2]

console.log(validSouthAfricanId(id))
