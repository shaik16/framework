import { User } from './models/User'

const user = new User({ name: 'Sadath', age: 25 })

user.set({ name: 'Basha', age: 25 })

user.save()
