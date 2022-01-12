import React from 'react'
import useInput from '../../hooks/useInput'
import styles from './CollectionItemCreateComponent.module.css'

const CollectionItemCreateComponent = () => {
  const {
    value: itemName,
    isValid: itemNameIsValid,
    hasError: itemNameHasError,
    valueChangeHandler: itemNameChangeHandler,
    inputBlurHandler: itemNameInputBlurHandler,
    reset: resetItemName,
  } = useInput((value: string) => value.trim() !== '')

  const {
    value: itemPrice,
    isValid: itemPriceIsValid,
    hasError: itemPriceHasError,
    valueChangeHandler: itemPriceChangeHandler,
    inputBlurHandler: itemPriceInputBlurHandler,
    reset: resetItemPrice,
  } = useInput((value: string) => value.trim() !== '')

  const {
    value: itemImageUrl,
    isValid: itemImageUrlIsValid,
    hasError: itemImageUrlHasError,
    valueChangeHandler: itemImageUrlChangeHandler,
    inputBlurHandler: itemImageUrlInputBlurHandler,
    reset: resetItemImageUrl,
  } = useInput((value: string) => value.trim() !== '')

  const formSubmitHandler = (event: any) => {
    event.preventDefault()

    if (!itemNameIsValid || !itemPriceIsValid || !itemImageUrlIsValid) {
      return
    }
    console.log(`+++> formSubmitHandler click!`, event)
    console.log(`+++> formSubmitHandler do submit!`)

    resetItemName()
    resetItemPrice()
    resetItemImageUrl()
  }

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
                {itemNameHasError ? 'Please enter a value' : ''}
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
                {itemPriceHasError ? 'Please enter a value' : ''}
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
                {itemImageUrlHasError ? 'Please enter a value' : ''}
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
