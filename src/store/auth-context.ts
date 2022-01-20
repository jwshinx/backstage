import React from 'react'
import { CurrentUserType } from '../types/auth'

const AuthContext = React.createContext<CurrentUserType>({
  user: null,
})

export default AuthContext
