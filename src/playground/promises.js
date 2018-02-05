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
  // return data.city // This could return another Promise as its' success
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is another chained promise')
      reject(new Error('Something went wrong'))
    }, 3000)
  })
}).then((str) => {
  console.log('does this run? ', str)
}).catch((error) => {
  console.log('error: ', error)
})
/* promise.then((data) => {
  console.log('2', data)
}) */

console.log('after')
