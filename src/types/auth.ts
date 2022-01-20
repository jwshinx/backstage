export interface AuthTimeType {
  seconds: number
  nanoseconds: number
}

export interface UserType {
  id: string
  displayName: string
  email: string
  color: string
  createdAt: AuthTimeType
}

export interface CurrentUserType {
  currentUser?: UserType
  user?: UserType | null
}
