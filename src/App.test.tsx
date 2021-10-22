import chai from 'chai'
import chaiDom from 'chai-dom'

chai.use(chaiDom)
// const { expect } = chai

describe('Test Suite', () => {
  it('click on a button', () => {
    console.log(`+++> ha`)
  })

  it('do another thing', () => {
    console.log(`+++> another thing 1`)
    expect.assertions(1)
    expect(2 + 2).toBe(4)
    console.log(`+++> another thing 2`)
  })
})
