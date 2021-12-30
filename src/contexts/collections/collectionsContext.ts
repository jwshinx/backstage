import { createContext } from 'react'

import SHOP_DATA from '../../reducers/shopData'

const CollectionsContext = createContext(SHOP_DATA)

export default CollectionsContext
