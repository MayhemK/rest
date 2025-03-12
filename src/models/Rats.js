import { Schema } from "mongoose";

export const RatsSchema = new Schema(
  {
    name: { type: String, required: true, minLength: 3, maxLength: 50 },
    callsign: { type: String, required: true, minLength: 3, maxLength: 50 },
    picture: { type: String, minLength: 0, maxLength: 500, required: true },
    specialties: { type: [String], default: [], minLength: 0, maxLength: 50, required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)