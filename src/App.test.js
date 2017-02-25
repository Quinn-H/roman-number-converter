import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('the "App" component', () => {
  it('should have an `input` element', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.containsMatchingElement(<input />)).toBe(true)
  })
})
