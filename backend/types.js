const { describe } = require('node:test');
const { title } = require('process');
const zod  = require('zod');

//create validation for post request.
const  createTodo = zod.object({
    title : zod.string(),
    description : zod.string()
})
 // create validation for put request.
const  updateTodo = zod.object({
    id:zod.string()
})

// exporting these validation into index.js file.
module.exports = {
    createTodo : createTodo,
    updateTodo : updateTodo
}