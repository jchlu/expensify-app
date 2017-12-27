import { createStore } from 'redux'

// Action generators

/** Default the payload to an empty object to avoid `undefined` */
const incrementCount = (payload = {}) => ({
  type: 'INCREMENT',
  incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
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

/* Redux createStore requires a function as an argument which is called
automatically on first use */
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
      return {
        count: state.count + incrementBy
      }
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
      return {
        count: state.count - decrementBy
      }
    case 'SET':
      return {
        count: action.count
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

store.dispatch({
  type: 'RESET'
})

store.dispatch({
  type: 'DECREMENT'
})

store.dispatch(decrementCount({decrementBy: 10}))

store.dispatch({
  type: 'SET',
  count: 101
})
