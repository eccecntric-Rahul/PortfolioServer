import mongoose from "mongoose";
const {Schema}= mongoose;

const educationSchema= new Schema({
    name: {
        type: String,
        required: "name is required",
        trim: true,
        
    },
    description: {
        type: String,
        required: "description is required",
        trim: true,
    
    },
    marks: {
        type: String,
        trim: true,
        required: "marks are required",
    },
    location: {
        type: String,
        trim: true,
        required: "location are required",
    },
    duration:{
        type: String,
        trim: true,
        required: "duration are required",
    },
    doneFrom:{
        type:String,
    },
    matched:{
        type:String,
        trim:true,
        default:'98'
    },
    liked:{
     type:Boolean,
     default:false,
    },
    orderId:{
        type:Number,
        required:true,
    },
    bgColor:{
        type:String,
    },
    image:{
        type:String,
        required:true
    },
    training:{
        type:Boolean,
        default:true,
    },
    goToLink:{
        type:String,
    }
});


export default mongoose.model("education",educationSchema);