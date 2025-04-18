import mongoose from "mongoose";

  const todoSchema = new mongoose.Schema({
    title: {
        type : String,
        required : true,
    }, 
    description : {
        type : String, 
        require : true,

    },
   
})

export const todo = mongoose.model("Todo", todoSchema);
export default todo;


