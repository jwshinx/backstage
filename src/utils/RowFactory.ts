import { Item } from '../types/item'

class RowFactory {
  items: Array<Item>
  rowsOfItemsHash: { [key: number]: Array<Item> }

  constructor(items: Array<Item>) {
    this.items = items
    this.rowsOfItemsHash = {} // { 1: [{e0},{e1},{e2},{e3}], 2: [{e4}] }
    this.setRowsOfItemsHash()
  }

  getLength(): number {
    return this.items.length
  }

  setRowsOfItemsHash(): void {
    let rowIdx = 0
    this.items.forEach((element, idx) => {
      if (idx % 4 === 0) {
        rowIdx++
        this.rowsOfItemsHash[rowIdx] = []
      }
      this.rowsOfItemsHash[rowIdx].push(element)
    })
  }
}

export default RowFactory
