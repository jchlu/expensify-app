import * as firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCOaCZEcq7i1wL6r2onq6BFcfz928VNuJI',
  authDomain: 'expensify-f15e6.firebaseapp.com',
  databaseURL: 'https://expensify-f15e6.firebaseio.com',
  projectId: 'expensify-f15e6',
  storageBucket: 'expensify-f15e6.appspot.com',
  messagingSenderId: '730002790588'
}

firebase.initializeApp(config)
const database = firebase.database()
// ref is root of the firebase db
/* database.ref().set({
  name: 'Johnny C-L',
  age: 46,
  isSingle: false,
  location: {
    city: 'Las Terrenas',
    country: 'La Republica Dominicana'
  }
})
 */
// overwrite the whole db
// database.ref().set('This is my data.')
// overwrite single nodes
// database.ref('age').set(46)
// database.ref('location/city').set('Santo Domingo')

/* database.ref('attributes').set({
  height: 180,
  weight: 82
})
 */
// database.ref('attributes/height').set(182)
// database.ref('isSignle').remove()
database.ref('isSingle').set(false)
