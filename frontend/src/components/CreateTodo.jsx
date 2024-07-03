
// create a todo and add it to database.
import { Suspense, useState } from "react"

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input type="text" placeholder="title" 
        onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value)
            }
        }
        /> <br />
        <input type="text" placeholder="description" 
        onChange={function(e){
            const value = e.target.value;
            setDescription(e.target.value);
            }
        }/><br />
        <button  onClick={()=>{
            // fetch calls will get easy with axios library.
            fetch("http://localhost:3000/todos" ,{
                    method:"POST",
                    body : JSON.stringify({
                        title: title ,
                        description: description
                    }),
                    headers: {
                    "content-Type": "application/json"
                    }
                })
                    .then(async function(res){
                        const json = await res.json()
                        alert("Todo added");
                    })
            }}
            
        >Add todo</button>
    </div>
}

