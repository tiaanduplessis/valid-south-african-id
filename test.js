'use strict'

const validSouthAfricanId = require('./')

test('valid-south-african-id', () => {
  expect(validSouthAfricanId('9401215029086')).toBeFalsy()
})
