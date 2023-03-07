import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        yourName: { type: String },
        phoneNumber: { type: String },
        requiredOn: { type:String},
        noOfPerson: { type: String },
        yourRequest: { type: String },
    }
)

//Model
const bookingModel = mongoose.model('Booking', bookingSchema)

export default bookingModel;
