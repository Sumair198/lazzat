import mongoose from "mongoose";

const testimonialsSchema = new mongoose.Schema(
    {
        clientText: { type: String },
        clientName: { type: String },
        Profession: { type:String},
        photoTestimonial: { type: String }, 
    }
)

//Model
const TestimonialModel = mongoose.model('Testimonial', testimonialsSchema)

export default TestimonialModel;
