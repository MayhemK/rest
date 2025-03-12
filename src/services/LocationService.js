import { dbContext } from "../db/DbContext.js";


class LocationService {
  async getAllLocations() {
    const locations = await dbContext.Locations.find()
    return locations
  }
}

export const locationsService = new LocationService()