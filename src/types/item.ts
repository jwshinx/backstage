export interface ItemType {
  id: string
  name: string
  imageUrl: string
  price: string
  routeName: string
}

export interface SortPropertyType<T> {
  property: keyof T
  isDescending: boolean
}

export type SortableItemType = Pick<ItemType, 'name' | 'price'>
