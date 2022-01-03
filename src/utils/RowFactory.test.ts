// import React from 'react'
// import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import RowFactory from './RowFactory'

const items = [
  { id: 1, name: 'Foo', imageUrl: 'https://foo.yahoo.com', price: 100 },
  { id: 2, name: 'Bar', imageUrl: 'https://bar.yahoo.com', price: 200 },
  { id: 3, name: 'Goo', imageUrl: 'https://goo.yahoo.com', price: 300 },
  { id: 4, name: 'Baz', imageUrl: 'https://baz.yahoo.com', price: 400 },
  { id: 5, name: 'Loo', imageUrl: 'https://loo.yahoo.com', price: 500 },
]

describe('RowFactory', () => {
  it('returns length of items', () => {
    const factory = new RowFactory(items)
    expect(factory.getLength()).toBe(5)
  })

  describe('.rowsOfItemsHash', () => {
    it('returns rows grouped with four items maximum', () => {
      const factory = new RowFactory(items)
      expect(factory.rowsOfItemsHash[1].length).toBe(4)
      expect(factory.rowsOfItemsHash[2].length).toBe(1)
    })
  })
})
