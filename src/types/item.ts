export interface Item {
  id: number
  name: string
  imageUrl: string
  price: number
}

export interface ItemType {
  id: string
  name: string
  imageUrl: string
  price: string
  routeName: string
}
