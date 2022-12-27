import { User } from './models/User'

const user = new User({ name: 'Sadath', age: 25 })

user.events.on('click', () => {
  console.log('cl')
})

user.events.trigger('click')
