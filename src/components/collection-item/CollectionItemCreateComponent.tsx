import React, { useState } from 'react'
import styles from './CollectionItemCreateComponent.module.css'

const CollectionItemCreateComponent = () => {
  const [itemName, setItemName] = useState('')
  const [itemPrice, setItemPrice] = useState('')
  const [itemImageUrl, setItemImageUrl] = useState('')

  const itemNameChangeHandler = (event: any) => {
    console.log(`+++> itemNameChangeHandler click!`)
    setItemName(event.target.value)
  }

  const itemNameInputBlurHandler = () => {
    console.log(`+++> itemNameInputBlurHandler click!`)
  }

  const itemPriceChangeHandler = (event: any) => {
    console.log(`+++> itemPriceChangeHandler click!`)
    setItemPrice(event.target.value)
  }

  const itemPriceInputBlurHandler = () => {
    console.log(`+++> itemPriceInputBlurHandler click!`)
  }

  const itemImageUrlChangeHandler = (event: any) => {
    console.log(`+++> itemImageUrlChangeHandler click!`)
    setItemImageUrl(event.target.value)
  }

  const itemImageUrlInputBlurHandler = () => {
    console.log(`+++> itemImageUrlInputBlurHandler click!`)
  }

  const formSubmitHandler = (event: any) => {
    event.preventDefault()
    console.log(`+++> formSubmitHandler click!`, event)
    console.log(`+++> formSubmitHandler do submit!`)
  }

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
          </div>

          <br />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CollectionItemCreateComponent
