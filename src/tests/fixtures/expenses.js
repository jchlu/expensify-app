import moment from 'moment'

export default [{
  id: 1,
  description: 'Gum',
  amount: 150,
  note: '',
  createdAt: 0
}, {
  id: 2,
  description: 'Credit Card',
  amount: 15550,
  note: '',
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: 3,
  description: 'Rent',
  amount: 109500,
  note: '',
  createdAt: moment(0).add(4, 'days').valueOf()
}]
