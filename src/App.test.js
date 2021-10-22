/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import chai from 'chai'
import chaiDom from 'chai-dom'
// import userEvent from "@testing-library/user-event";
import React from 'react'

import { Counter } from './components/Counter'

chai.use(chaiDom)
// const { expect } = chai

describe('Test Suite', () => {
  it('click on a button', () => {
    console.log(`+++> ha`)
  })

  it('do another thing', () => {
    console.log(`+++> another thing 1`)
    // expect.assertions(1)
    // expect(2 + 2).toBe(4)
    console.log(`+++> another thing 2`)
  })
})

describe('App.tsx', () => {
  it('click on a button', () => {
    render(<button>Hello World</button>)
    screen.getByText('Hello World')
  })
})

test('shows Counter component', () => {
  render(<Counter />)
  screen.getByText('Counter')
  // Events and assertions...
})
