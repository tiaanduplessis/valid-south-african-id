const mod10 = require('mod10-check-digit')

// https://www.westerncape.gov.za/general-publication/decoding-your-south-african-id-number-0
const re = /^\d{2}[0-1][0-9][0-3]\d\d{4}[0-1]\d{2}$/

module.exports = function (id) {
  if (typeof id !== 'string') {
    throw new Error('Invalid argument provided')
  }
  return re.test(id) && mod10(id.slice(0, id.length - 1)) === Number.parseInt(id[id.length - 1])
}
