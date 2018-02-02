export default (expenses) => {
  const total = expenses.reduce((cumulativeTotal, expense) => {
    return cumulativeTotal + expense.amount
  }, 0)
  return total
}
