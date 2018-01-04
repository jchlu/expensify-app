import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Header from '../../components/Header'

test('Should render Header correctly', () => {
  const wrapper = shallow(<Header />)
  /**
   * Examples:
   * expect(wrapper.find('h1').length).toBe(1) // Check for only one h1 element
   * expect(wrapper.find('h1').text()).toBe('Expensify') // Check for element text
  */

  expect(toJson(wrapper)).toMatchSnapshot()
  // const renderer = new ReactShallowRenderer()
  // renderer.render(<Header />)
  // expect(renderer.getRenderOutput()).toMatchSnapshot()
})
