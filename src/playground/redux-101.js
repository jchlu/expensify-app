import { createStore } from 'redux'

/* Redux createStore requires a function as an argument which is called
automatically on first use */
const store = createStore((state = { count: 0 }) => {
  return state
})

console.log(store.getState())
