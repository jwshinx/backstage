import { CartItem } from '../providers/cart'

export interface CartContextInterface {
  hidden: boolean
  cartItems: Array<CartItem>
  toggleHidden: () => void
  addQuantity: (item: CartItem) => void
  cartItemsCount: number
  totalSpending: number
  removeQuantity: (item: CartItem) => void
  clearItem: (item: CartItem) => void
}
