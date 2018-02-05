import React from 'react'
import { shallow } from 'enzyme'
import { AddExpense } from '../../components/AddExpense'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

let startAddExpense, historySpy, wrapper

// https://facebook.github.io/jest/docs/en/api.html#beforeeachfn-timeout
beforeEach(() => {
  startAddExpense = jest.fn()
  historySpy = { push: jest.fn() }
  wrapper = shallow(
    <AddExpense
      startAddExpense={startAddExpense}
      history={historySpy}
    />
  )
})
test('Should render add expense page correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Should handle onSubmit', () => {
  wrapper.find(ExpenseForm).prop('onSubmit')(expenses[1])
  expect(historySpy.push).toHaveBeenLastCalledWith('/')
  expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1])
})
