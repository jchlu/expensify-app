import * as firebase from 'firebase'
import { expensifyConfig as config } from '../../settings'

firebase.initializeApp(config)
const database = firebase.database()

// Get the data once versus subscribing
/* database.ref('users/1')
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val()
    console.log(val)
  })
  .catch((error) => {
    console.log('Error fetching data' , error)
  })
   */
database.ref('users/2/stressLevel').set(5)

/* database.ref('users/1')
  .on('value', (snapshot) => {
    console.log(snapshot.val())
  })
 */
const onUser2Change = database.ref('users/2')
  .on('value', (snapshot) => {
    console.log(snapshot.val())
  }, (error) => {
    console.log('Error fetching data', error)
  })

setTimeout(() => {
  database.ref('users/2/stressLevel').set(2)
}, 3500)

/**
 * Off reference docs:
 *  https://firebase.google.com/docs/reference/js/firebase.database.Reference?authuser=1#off
 */
setTimeout(() => {
  database.ref('users/2').off('value', onUser2Change)
}, 7000)

setTimeout(() => {
  database.ref('users/2/stressLevel').set(0)
}, 10500)

// ref is root of the firebase db
/*
database.ref('users/2').update({
  location: {
    city: 'Las Terrenas',
    country: 'Dominican Republic'
  },
  name: 'Zuby C-L'
}).then(() => {
  console.log('Updated user #2')
}).catch((error) => {
  console.log('Failed to update', error)
})
 */
// database.ref().set('').then(() => {
//   console.log('Database truncated')
/* database.ref('users/1').set({
  name: 'Johnny C-L',
  age: 46,
  stressLevel: 6,
  job: {
    title: 'Software Developer',
    company: 'Mydn'
  },
  location: {
    city: 'Bath',
    country: 'England'
  }
}).then(() => {
  console.log('Data is saved')
}).catch((error) => {
  console.log('Data save failed', error)
}) */
// }).catch((error) => {
//   console.log('Database truncate failed', error)
// })

// overwrite the whole db
// database.ref().set('This is my data.')
// overwrite single nodes
// database.ref('age').set(46)
// database.ref('location/city').set('Santo Domingo')
/*
database.ref('users/1/attributes').set({
  height: 180,
  weight: 82
}).then(() => {
  console.log('Attributes written')
}).catch((error) => {
  console.log('Couldn\'t write attributes', error)
})

database.ref('users/1').update({
  stressLevel: 1,
  'job/company': 'Flamingo Enterprises',
  'job/title': 'Drone Pilot',
  'location/city': 'Las Terrenas',
  'location/country': 'La Republica Dominicana'
}).then(() => {
  console.log('Data updated')
}).catch((error) => {
  console.log('Something broke', error)
})
 */
// database.ref('attributes/height').set(182)
// database.ref('isSignle').remove()
// database.ref('users/1/isSingle').set(false).then(() => {}).catch((error) => {
//   console.log('Could write that change', error)
// })
console.log('I made a request to change the data')