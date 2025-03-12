import { Schema } from "mongoose";


export const MissionsSchema = new Schema(
  {
    codename: { type: String, required: true, minLength: 3, maxLength: 50 },
    objective: { type: String, required: true, minLength: 3, maxLength: 50 },
    year: { type: Number, required: true, min: 0, max: 4892 },
    completed: { type: Boolean, required: true }
  }
)


MissionsSchema.virtual('rat')