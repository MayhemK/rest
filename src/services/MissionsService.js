import { dbContext } from "../db/DbContext.js";


class MissionsService {
  async getAllMissions() {
    const missions = await dbContext.Missions.find().populate('rat', '-name -picture').populate('location')
    return missions
  }
}


export const missionsService = new MissionsService()