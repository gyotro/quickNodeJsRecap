import { Schema, model } from "mongoose";

const videoSchema = new Schema ({
    title : {
        type: String,
        required : true,
        trim: true
    },
    description : {
        type: String,
        trim: true
    },
    url:{
        type: String,
        unique: true,
        required : true,
        trim: true
    }},
    {
        versionKey: false,
        timestamps: true
    }
);

export default model('VideoLog', videoSchema); // il primo parametro sarà il nome dello schema che vedremo su Mongo