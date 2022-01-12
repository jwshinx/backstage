import React, { useState } from 'react'
import styles from './CollectionItemCreateComponent.module.css'

const CollectionItemCreateComponent = () => {
  const [itemName, setItemName] = useState('')
  const [itemNameIsTouched, setItemNameIsTouched] = useState(false)

  const [itemPrice, setItemPrice] = useState('')
  const [itemPriceIsTouched, setItemPriceIsTouched] = useState(false)

  const [itemImageUrl, setItemImageUrl] = useState('')
  const [itemImageUrlIsTouched, setItemImageUrlIsTouched] = useState(false)

  const itemNameChangeHandler = (event: any) => {
    setItemName(event.target.value)
  }

  const itemNameInputBlurHandler = () => {
    setItemNameIsTouched(true)
  }

  const itemPriceChangeHandler = (event: any) => {
    setItemPrice(event.target.value)
  }

  const itemPriceInputBlurHandler = () => {
    setItemPriceIsTouched(true)
  }

  const itemImageUrlChangeHandler = (event: any) => {
    setItemImageUrl(event.target.value)
  }

  const itemImageUrlInputBlurHandler = () => {
    setItemImageUrlIsTouched(true)
  }

  const formSubmitHandler = (event: any) => {
    event.preventDefault()

    if (itemNameIsInvalid || itemPriceIsInvalid || itemImageUrlIsInvalid) {
      return
    }
    console.log(`+++> formSubmitHandler click!`, event)
    console.log(`+++> formSubmitHandler do submit!`)
  }

  const itemNameIsInvalid = itemNameIsTouched && itemName.trim() === ''
  const itemPriceIsInvalid = itemPriceIsTouched && itemPrice.trim() === ''
  const itemImageUrlIsInvalid =
    itemImageUrlIsTouched && itemImageUrl.trim() === ''

  const formIsValid =
    itemName.trim() !== '' &&
    itemPrice.trim() !== '' &&
    itemImageUrl.trim() !== ''

  // console.log(`+++> CCC formIsValid:`, formIsValid)

  // name, imageUrl, price
  return (
    <div className="row justify-content-md-center">
      <div className={`col-6 ${styles['create-item']}`}>
        <form onSubmit={formSubmitHandler} className="create-form">
          <div className={`form-group ${styles['input-area']}`}>
            <label htmlFor="item-name">Name</label>
            <input
              className="form-control"
              type="text"
              id="item-name"
              placeholder="Enter name"
              value={itemName}
              onChange={itemNameChangeHandler}
              onBlur={itemNameInputBlurHandler}
            />
            <div className={styles['error-area']}>
              <span className={styles['error-message']}>
                {itemNameIsInvalid ? 'Please enter a value' : ''}
              </span>
            </div>
          </div>

          <div className={`form-group ${styles['input-area']}`}>
            <label htmlFor="item-price">Price</label>
            <input
              className="form-control"
              type="text"
              id="item-price"
              placeholder="Enter price"
              value={itemPrice}
              onChange={itemPriceChangeHandler}
              onBlur={itemPriceInputBlurHandler}
            />
            <div className={styles['error-area']}>
              <span className={styles['error-message']}>
                {itemPriceIsInvalid ? 'Please enter a value' : ''}
              </span>
            </div>
          </div>

          <div className={`form-group ${styles['input-area']}`}>
            <label htmlFor="item-image-url">Image URL</label>
            <input
              className="form-control"
              type="text"
              id="item-image-url"
              placeholder="Enter image URL"
              value={itemImageUrl}
              onChange={itemImageUrlChangeHandler}
              onBlur={itemImageUrlInputBlurHandler}
            />
            <div className={styles['error-area']}>
              <span className={styles['error-message']}>
                {itemImageUrlIsInvalid ? 'Please enter a value' : ''}
              </span>
            </div>
          </div>

          <br />
          <button disabled={!formIsValid} className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default CollectionItemCreateComponent
