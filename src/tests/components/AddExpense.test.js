import React from 'react'
import { shallow } from 'enzyme'
import { AddExpense } from '../../components/AddExpense'
// import expenses from '../fixtures/expenses'

test('Should render add expense page correctly', () => {
  const onSubmitSpy = jest.fn()
  const historySpy = { push: jest.fn() }
  const wrapper = shallow(
    <AddExpense
      onSubmit={onSubmitSpy}
      history={historySpy}
    />
  )
  expect(wrapper).toMatchSnapshot()
})
