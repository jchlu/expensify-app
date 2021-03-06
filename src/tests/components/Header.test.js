import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '../../components/Header'

test('Should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => {}}/>)
  /**
   * Examples:
   * expect(wrapper.find('h1').length).toBe(1) // Check for only one h1 element
   * expect(wrapper.find('h1').text()).toBe('Expensify') // Check for element text
  */

  expect(wrapper).toMatchSnapshot()
  // const renderer = new ReactShallowRenderer()
  // renderer.render(<Header />)
  // expect(renderer.getRenderOutput()).toMatchSnapshot()
})

test('Should call startLogout on button click', () => {
  const startLogoutSpy = jest.fn()
  const wrapper = shallow(
    <Header startLogout={startLogoutSpy} />
  )
  wrapper.find('button').simulate('click')
  expect(startLogoutSpy).toHaveBeenCalled()
})
