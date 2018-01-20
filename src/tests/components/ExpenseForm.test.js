import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

test('Should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseForm with Expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />)
  expect(wrapper).toMatchSnapshot()
})

test('Should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
  // Simulate a form submittion - simulate docs at API reference of Enzyme
  wrapper.find('form').simulate('submit', {
    // fake the method to prevent errors
    preventDefault: () => { }
  })
  // Check state of the error element - state docs at API reference of Enzyme
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test('Should set description on input change', () => {
  const value = 'New Description'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('description')).toBe(value)
})

test('Should set note on input change', () => {
  const value = 'New Note'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('textarea').simulate('change', {
    target: { value }
  })
  expect(wrapper.state('note')).toBe(value)
})

test('Should set amount if valid input', () => {
  const value = '12.50'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe(value)
})

test('Should not set amount if invalid input', () => {
  const value = '12.505'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe('')
})

test('Should not set amount if invalid input and existing data', () => {
  const value = '12.505'
  const expected = (expenses[0]['amount'] / 100).toString()
  const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe(expected)
})

// Test Spies

test('Should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn()
  /*
  * The Spy assertions are found in the Jest Expects documentation.
  onSumbitSpy()
  expect(onSumbitSpy).toHaveBeenCalled()
  onSumbitSpy('Sausages', 'Beans')
  expect(onSumbitSpy).toHaveBeenCalledWith('Sausages', 'Beans')
  */
  const wrapper = shallow(
    <ExpenseForm
      expense={expenses[0]}
      onSubmit={onSubmitSpy}
    />
  )
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  })
  // The error state should now be empty
  expect(wrapper.state('error')).toBe('')
  // and the props set to the details of the expense
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt,
    note: expenses[0].note
  })
  // alternative: { ...expenses[0], id: undefined }
})

test('Should set new date on date change', () => {
  const now = moment()
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find(SingleDatePicker).prop('onDateChange')(now)
  expect(wrapper.state('createdAt')).toEqual(now)
})

test('Should set focused property on focus change', () => {
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused: true })
  expect(wrapper.state('calendarFocused')).toEqual(true)
})
