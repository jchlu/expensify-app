const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is my resolved data')
    resolve({
      name: 'Johnny',
      age: '46',
      city: 'Bristol'
    })
    reject(new Error('Something went wrong'))
  }, 3000)
})

console.log('before')

promise.then((data) => {
  console.log('1', data)
  return data.city
}).then((city) => {
  console.log('does this run? ', city)
}).catch((error) => {
  console.log('error: ', error)
})
/* promise.then((data) => {
  console.log('2', data)
}) */

console.log('after')
