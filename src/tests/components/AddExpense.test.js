import React from 'react'
import { shallow } from 'enzyme'
import { AddExpense } from '../../components/AddExpense'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

let addExpenseSpy, historySpy, wrapper

// https://facebook.github.io/jest/docs/en/api.html#beforeeachfn-timeout
beforeEach(() => {
  addExpenseSpy = jest.fn()
  historySpy = { push: jest.fn() }
  wrapper = shallow(
    <AddExpense
      addExpense={addExpenseSpy}
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
  expect(addExpenseSpy).toHaveBeenLastCalledWith(expenses[1])
})
