import { createStore, combineReducers } from 'redux'

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
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

console.log(store.getState())

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
