// Object Destructuring

const person = {
  name: 'Johnny',
  age: 46,
  location: {
    city: 'Bristol',
    temp: 2
  }
}

/*
* destructured values can have defaults and their name changed.
* w/o either, it will just be the kay value pair as defined in the object.
*/
const { name: firstName = 'Anonymous', age } = person

console.log(`${firstName} is ${age}.`)

const { city, temp: temperature } = person.location

if (city && temperature) {
  console.log(`It's ${temperature} degrees in ${city}.`)
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const { name: publisherName = 'Self Published'} = book.publisher

console.log(publisherName)

// Array Destructuring

const address = [
  '1299 S Juniper Street',
  'Philidelphia',
  'Pennsilvania',
  '19147'
]

const [, homeCity, state = 'Mass'] = address

console.log(`You are in ${homeCity} ${state}.`)

const item = [
  'Coffee (hot)',
  '$2.00',
  '$2.50',
  '$2.75'
]

const [description, , mediumPrice] = item

console.log(`A medium ${description} costs ${mediumPrice}`)
