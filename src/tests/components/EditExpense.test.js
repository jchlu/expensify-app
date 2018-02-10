import React from 'react'
import { shallow } from 'enzyme'
import { EditExpense } from '../../components/EditExpense'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

let editExpenseSpy, startRemoveExpenseSpy, historySpy, wrapper

// https://facebook.github.io/jest/docs/en/api.html#beforeeachfn-timeout
beforeEach(() => {
  editExpenseSpy = jest.fn()
  startRemoveExpenseSpy = jest.fn()
  historySpy = { push: jest.fn() }
  wrapper = shallow(
    <EditExpense
      editExpense={editExpenseSpy}
      startRemoveExpense={startRemoveExpenseSpy}
      history={historySpy}
      expense={expenses[2]}
    />
  )
})
test('Should render edit expense page correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Should handle edit expense', () => {
  wrapper.find(ExpenseForm).prop('onSubmit')(expenses[2])
  expect(historySpy.push).toHaveBeenLastCalledWith('/')
  expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
})

test('Should handle remove expense', () => {
  wrapper.find('button').simulate('click')
  expect(historySpy.push).toHaveBeenLastCalledWith('/')
  expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith({
    id: expenses[2].id
  })
})
