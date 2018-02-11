import * as firebase from 'firebase'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}
firebase.initializeApp(config)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }
/*
const expenses = [
  {
    description: 'Description 1',
    note: 'Note 1',
    amount: 1000,
    createdAt: 12000
  },
  {
    description: 'Description 2',
    note: 'Note 2',
    amount: 1050,
    createdAt: 12010
  },
  {
    description: 'Description 3',
    note: 'Note 1',
    amount: 1234,
    createdAt: 120456
  }
] */

/* expenses.map((expense) => {
  database.ref('expenses')
    .push(expense)
    .then(() => { console.log('Pushed new Expense') })
    .catch((error) => { console.log('You done messed up', error) })
})
 */

// Returns a snapshot of the *new* changed data
/* database.ref('expenses')
  .on('child_changed', (snapshot, previousSiblingKey) => {
    console.log(snapshot.key, snapshot.val(), previousSiblingKey)
  })

// Returns a snapshot of the existing data first, then runs on any
// subsequent change.
database.ref('expenses')
  .on('child_added', (snapshot, previousSiblingKey) => {
    console.log(snapshot.key, snapshot.val(), previousSiblingKey)
  })
 */
/*
database.ref('expenses')
  .on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
  })
 */
// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
//   })

/*
database.ref('expenses')
  .once('value')
  .then((snapshot) => {
    const expenses = []
    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      })
    })
    console.log(expenses)
  }) */

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
// database.ref('users/2/stressLevel').set(5)

/* database.ref('users/1')
  .on('value', (snapshot) => {
    console.log(snapshot.val())
  })
 */
/*
const onUser2Change = database.ref('users/2')
  .on('value', (snapshot) => {
    console.log(snapshot.val())
  }, (error) => {
    console.log('Error fetching data', error)
  })

setTimeout(() => {
  database.ref('users/2/stressLevel').set(2)
}, 3500)
 */
/**
 * Off reference docs:
 *  https://firebase.google.com/docs/reference/js/firebase.database.Reference?authuser=1#off
 */
/* setTimeout(() => {
  database.ref('users/2').off('value', onUser2Change)
}, 7000)

setTimeout(() => {
  database.ref('users/2/stressLevel').set(0)
}, 10500)
 */
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
// console.log('I made a request to change the data')
