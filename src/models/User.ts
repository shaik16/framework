import { Attributes } from './Attributes'
import { Sync } from './Sync'
import { Eventing } from './Eventing'
export interface UserProps {
  id?: number
  name?: string
  age?: number
}

export class User {
  public events: Eventing = new Eventing()
  public sync: Sync<UserProps> = new Sync('http://localhost:3000/users')
  //   public attributes: Attributes<UserProps> = new Attributes()
}
