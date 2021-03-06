const add = (a, b) => a + b
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`

test('Should add two numbers', () => {
  const result = add(3, 4)
  expect(result).toBe(7)
})

test('Should generate greeting from name string', () => {
  const expected = 'Hello Mike!'
  const result = generateGreeting('Mike')
  expect(result).toBe(expected)
})

test('Should generate default greeting from no name', () => {
  const expected = 'Hello Anonymous!'
  const result = generateGreeting()
  expect(result).toBe(expected)
})
