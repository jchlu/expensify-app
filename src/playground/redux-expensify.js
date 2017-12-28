import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'
// ADD_EXPENSE
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})
// REMOVE_EXPENSE
const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
})
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

const expensesReducerDefaultState = []
const filtersReducerDefaultState = {
  'text': '',
  'sortBy': 'date',
  'startDate': undefined,
  'endDate': undefined
}

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      // return state.concat(action.expense)
      // Rather than concat, use the spread operator
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      // Deconstruct the input array as we only need id, implicitly return boolean ~{}~
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense
        }
      })
    default:
      return state
  }
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
}))

store.subscribe(() => {
  console.log(store.getState())
})

const expenseOne = store.dispatch(addExpense({
  description: 'Rent',
  amount: 100
}))

const expenseTwo = store.dispatch(addExpense({
  description: 'Coffee',
  amount: 300
}))

store.dispatch(removeExpense({id: expenseOne.expense.id}))
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

const demoState = {
  expenses: [{
    id: '0DC38EA6-EDBB-4103-AB65-FB42CD654F24',
    description: 'January Rent',
    note: '',
    amount: 54500, // in pennies
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // Date or Amount
    startDate: undefined,
    endDate: undefined
  }
}
