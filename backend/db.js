/* db looks like :-

    todo = {
    title : string;
    description : string:
    completed : boolean 
    }
*/
const mongoose = require("mongoose");
const { string } = require("zod");

mongoose.connect("mongodb+srv://vishu:MongoDB%40123@cluster0.yzayual.mongodb.net/todos");

// schema for mongoose that will be passed in mongoose model.
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos' ,todoSchema);

module.exports = {
    todo : todo
}

 