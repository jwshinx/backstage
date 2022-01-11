import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// import CartContext from './store/cart-context'
import AuthContext from './store/auth-context'
import CartProvider from './providers/CartProvider'
import HeaderComponent from './components/header/HeaderComponent'
import HomepageComponent from './pages/homepage/HomepageComponent'
import ShopPageComponent from './pages/shop/ShopPageComponent'
import CategoryShopPageComponent from './pages/shop/CategoryShopPageComponent'
import SignInAndSignUpPageComponent from './pages/signin/SignInAndSignUpPageComponent'
import CheckoutPageComponent from './pages/checkout/CheckoutPageComponent'
import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils'

// import { collection, query, where, getDocs } from 'firebase/firestore'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

// const foobar = async () => {
//   try {
//     console.log(`+++> foobar 1`)
//     const fs = firebase.firestore()
//     const expenseItem = fs.collection('expenses').doc('JxolGPDhP3DTKNARgSdB')
//     // const expenseItem = fs.doc('/expenses/JxolGPDhP3DTKNARgSdB')
//     const item = await expenseItem.get()
//     console.log(`+++> foobar 2:`, item.data)
//     return 'yay'
//   } catch (error) {
//     console.log(`+++> foobar error:`, error)
//   }
// }

interface ExpenseType {
  id: string
  name: string
  amount: string
}

export const App = () => {
  const [currentUser, setCurrentUser] = useState<any | null>(null)
  // const [cartItems, setCartItems] = useState<number[]>([])
  // const [expenses, setExpenses] = useState<
  //   Array<firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>>
  // >([])
  const [expenses, setExpenses] = useState<Array<ExpenseType>>([])

  // const [expenseIds, setExpenseIds] = useState<Array<string>>([])

  // let expensesSubscription
  useEffect(() => {
    console.log(`+++> App useEffect expensesSubscription 0a`)

    // let data = null
    const unsubscribeExpense = firebase
      .firestore()
      .collection('expenses')
      .onSnapshot(
        (snapShot) => {
          // setExpenses(snapShot.docs)
          // let docObject = {}
          const data = snapShot.docs.map((doc) => {
            console.log(`+++> doc id:`, doc.id)
            console.log(`+++> doc data:`, doc.data())

            return {
              amount: doc.data().amount,
              name: doc.data().name,
              id: doc.id,
            }
            // id: doc.id,
            // a: doc.data().name,
            // b: doc.data().amount,

            // console.log(`+++> doc id:`, doc.id)
            // console.log(`+++> doc data:`, doc.data())
            // docObject = { id: doc.id }
            // console.log(`+++> docObject:`, docObject)

            // docObject{ id: doc.id, ...(doc.data())}
            // console.log(`+++> doc:`, doc.id, doc.data())
          })
          setExpenses(data)
        },
        () => {
          console.log(`+++> onSnapshot callback`)
        }
      )
    return () => unsubscribeExpense()
    // const fetchData = async () => {
    //   try {
    //     const resp = await firebase
    //       .firestore()
    //       .collection('expenses')
    //       .doc('JxolGPDhP3DTKNARgSdB')
    //     console.log(`+++> foobar 3 resp:`, resp)
    //     const data = resp.get()
    //     console.log(`+++> foobar 3 resp data:`, data)
    //   } catch (error) {
    //     console.log(`+++> foobar 3 error:`, error)
    //   }
    // }
    // fetchData()

    // const fs = firebase.firestore()
    // const expenseItem = fs.collection('expenses').doc('JxolGPDhP3DTKNARgSdB')
    // const expenseItem = fs.doc('/expenses/JxolGPDhP3DTKNARgSdB')
    // console.log(
    //   `+++> App useEffect expensesSubscription 1 expenseItem.data():`,
    //   expenseItem.
    // )

    // const db = 'backstage-b49c3'
    // const q = query(collection(db, 'cities'), where('capital', '==', true))
  }, [])

  // let authSubscription
  useEffect(() => {
    console.log(`+++> App useEffect 0a`)
    const unsubscribeFromAuth = auth.onAuthStateChanged(
      async (userAuth: any) => {
        console.log(`+++> App useEffect 1 userAuth:`, userAuth)
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth, {
            color: 'red',
          })
          userRef!.onSnapshot((snapShot) => {
            console.log(`+++> App useEffect 2 snapShot:`, snapShot)
            console.log(`+++> App useEffect 2 snapShot.id:`, snapShot.id)
            console.log(
              `+++> App useEffect 2 snapShot.data():`,
              snapShot.data()
            )
            setCurrentUser({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            })
          })
        } else {
          setCurrentUser({ currentUser: userAuth })
        }
      }
    )

    return () => {
      console.log(`+++> App useEffect 100`)
      // authSubscription
      unsubscribeFromAuth()
    }
  }, [])

  // const onAddToCartClickHandler = () => {
  //   console.log(`+++> App onAddToCartClickHandler clicked 0!`)
  //   // console.log(`+++> App onAddToCartClickHandler price:`, price)
  //   setCartItems([9898])
  //   console.log(`+++> App onAddToCartClickHandler clicked 1!`)
  // }

  // console.log(`+++> App useEffect 1a currentUser:`, currentUser)

  return (
    <CartProvider>
      <AuthContext.Provider value={{ user: currentUser }}>
        <div className="container">
          <div className="col-12">
            <div className="row mt-3 mb-3">
              <HeaderComponent />
            </div>

            <div className="row mt-3 mb-3">
              {expenses.map((item) => (
                <p key={item.id}>
                  {item.id} {item.name} {item.amount}
                </p>
              ))}
            </div>
            <div className="row mt-3 mb-3">
              <Switch>
                <Route exact path="/" component={HomepageComponent} />
                <Route exact path="/shop" component={ShopPageComponent} />
                <Route
                  path="/signin"
                  exact
                  render={() =>
                    currentUser && currentUser.currentUser ? (
                      <Redirect to="/" />
                    ) : (
                      <SignInAndSignUpPageComponent />
                    )
                  }
                />
                <Route
                  exact
                  path="/checkout"
                  component={CheckoutPageComponent}
                />
                <Route
                  exact
                  path="/shop/:category"
                  component={CategoryShopPageComponent}
                />
              </Switch>
            </div>
          </div>
        </div>
      </AuthContext.Provider>
    </CartProvider>
  )
}
