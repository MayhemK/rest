import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { ValueSchema } from '../models/Value.js'
import { RatsSchema } from "../models/Rats.js";

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Rats = mongoose.model('Rats', RatsSchema);
  Locations = mongoose.model('Locations' LocationSchema);
}

export const dbContext = new DbContext()
