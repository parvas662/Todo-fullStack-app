// show all todos
export function Todos({todos}){

    async function handleEvent(todo){ 
        const id = todo._id;
        try{
            await fetch("http://localhost:3000/completed",{
                method: "PUT",
                headers: {
                    "content-Type": "application/json"
                    },
                body : JSON.stringify({
                    id : id 
                })
            }) 
        }
        catch(e){
            console.log("error updating todo", e)
        }
    }

    return <div>
        { todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h2> {todo.description} </h2>
                <button onClick={() => handleEvent(todo)}
                > {todo.completed == true ? "Completed" : "Mark as complete"} </button>
            </div>
           })
        }
    </div>
}

