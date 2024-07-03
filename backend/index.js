const { sign } = require('crypto');
const express  = require('express');
const { json } = require('stream/consumers');
const { todo } = require('./db');
const { createTodo , updateTodo} = require('./types');

const methodOverride = require('method-override');   
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(methodOverride('_method'));   
//  body {
//      title : string;
//      description : string;
//   }

// in POST, create  todos into the database.
app.post('/todos',async function(req,res){
    const createPayload = req.body ;   // getting things from body.    
    try{
        const parse = createTodo.safeParse(createPayload);
        console.log(parse)
        //things are fine so put it in mongoDB => db call.
        const sd = await todo.create({  
            title: createPayload.title,
            description : createPayload.description,
            completed : false
            }) 

        res.json ({
            msg : "todo Created"
        })
    }
    catch(e) {
        console.log(e)
        res.status(411).json({
            msg : "you have send wrong Inputs"
        })
    }
})

// in get req ,all todos will be send to preview.
app.get('/todo',async function(req,res){ 
        try {
            const todos = await todo.find({})
            res.json({
                todos
            })
        }
        catch{
            res.status(411).json({
                msg : "Something went wrong with DataBase"
            })
        }
})

// update the todo into database.
app.put('/completed',async function(req,res){
    
    const updatePayload = req.body ;
    console.log(updatePayload)
    try{
        updateTodo.safeParse(updatePayload);
        await todo.updateOne({
            _id : req.body.id
        },{
            completed : true
        })
        
        res.json({
            msg : "Todo marked as completed"
        })
    }

    catch(err) {
        console.log(err)
        res.status(411).json({
            msg : "you have send wrong Inputs"
        })
    }

})

app.listen(3000,function(){
    console.log("listeing to port 3000")
});
