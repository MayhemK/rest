import { Schema } from "mongoose";


export const LocationSchema = new Schema(
  {
    country: { type: String, minLength: 1, maxLength: 50, required: true },
    area: { type: String, minLength: 1, maxLength: 50, required: true },
    labels: { type: [String], default: [], minLength: 1, maxLength: 50, required: true }
  }
)