import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
    {
        name: { type: String },
        description: { type: String },
        image: { type:String},
        price: { type: String }, 
        status: { type: Boolean },
        is_featured: { type: Boolean },
        category: {type:String} 
    }
)

//Model
const MenuModel = mongoose.model('Menu-item', menuSchema)

export default MenuModel;
