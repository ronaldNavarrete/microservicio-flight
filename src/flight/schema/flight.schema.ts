import mongoose from "mongoose";

export const FlightSchema = new mongoose.Schema({
    pilot:{type:String, require:true},
    airplane:{type:String, require:true},
    destinationCity:{type:String, require:true},
    fligthDate:{type:Date, require:true},
},{
    timestamps:true
}
);