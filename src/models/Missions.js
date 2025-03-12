import { Schema } from "mongoose";


export const MissionsSchema = new Schema(
  {
    codename: { type: String, required: true, minLength: 3, maxLength: 50 },
    objective: { type: String, required: true, minLength: 3, maxLength: 50 },
    year: { type: String, min: 1000, max: 2024, required: true },
    completed: { type: Boolean, default: false, required: true }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)


MissionsSchema.virtual('rat', {
  ref: 'Rats',
  localField: 'ratId',
  foreignField: '_id',
  justOne: true
}
)

MissionsSchema.virtual('location', {
  ref: 'Locations',
  localField: 'locationId',
  foreignField: '_id',
  justOne: true
})