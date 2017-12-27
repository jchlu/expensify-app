import { createStore } from 'redux'

// Action generators

/** Default the payload to an empty object to avoid `undefined` */
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

/** Default the param to a value */
const incrementCountAltWhenSingleParam = (incrementBy = 1) => ({
  type: 'INCREMENT',
  incrementBy // when referenceing the same name, miss off the assignment
})

/** Default the payload item to a value to avoid `undefined` */
const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy // when referenceing the same name, miss off the assignment
})

const resetCount = () => ({
  type: 'RESET'
})

/** count value is mandatory, so no need to set a default */
const setCount = ({ setCount }) => ({
  type: 'SET',
  setCount
})

/* Redux createStore requires a function as an argument which is called
automatically on first use - this is a "Reducer" */
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'SET':
      return {
        count: action.setCount
      }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state
  }
})

/*
* If unsubscribe is called, the return value stops the subscription,
* otherwise the enclosed function executes on every Redux state change
*/
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// Actions - and object
/* store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
})
 */
store.dispatch(incrementCount({incrementBy: 5}))
store.dispatch(incrementCountAltWhenSingleParam(5))

/* store.dispatch({
  type: 'RESET'
})
 */

// store.dispatch(resetCount({ resetValue: 100}))
store.dispatch(resetCount())

/* store.dispatch({
  type: 'DECREMENT'
})
 */
store.dispatch(decrementCount())
store.dispatch(decrementCount({decrementBy: 10}))

/* store.dispatch({
  type: 'SET',
  count: 101
}) */

store.dispatch(setCount({ setCount: 101 }))
