import mongoose from "mongoose";

const ourTeamSchema = new mongoose.Schema(
    {
        teamImage: { type: String },
        teamName: { type: String },
        teamTitle: { type:String},
        teamFacebook: { type: String }, 
        teamInsta: { type: String }, 
        teamWhatsapp: { type: String }, 
    }
)
//Model
const OurTeamModel = mongoose.model('OurTeam', ourTeamSchema)

export default OurTeamModel;
