import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { ValueSchema } from '../models/Value.js'
import { RatsSchema } from "../models/Rats.js";
import { LocationSchema } from '../models/Locations.js';
import { MissionsSchema } from '../models/Missions.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Rats = mongoose.model('Rats', RatsSchema);
  Locations = mongoose.model('Locations', LocationSchema);
  Missions = mongoose.model('Missions', MissionsSchema)
}

export const dbContext = new DbContext()
