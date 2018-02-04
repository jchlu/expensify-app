import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseSummary } from '../../components/ExpenseSummary'

test('Should render summary with two fixtures', () => {
  const wrapper = shallow(<ExpenseSummary count={2} total={12345} />)
  expect(wrapper).toMatchSnapshot()
})

test('Should render summary with a single fixture', () => {
  const wrapper = shallow(<ExpenseSummary count={1} total={1234} />)
  expect(wrapper).toMatchSnapshot()
})
