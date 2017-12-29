/** expensesReducer */

const expensesReducerDefaultState = []

export default (state = expensesReducerDefaultState, action) => {
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
