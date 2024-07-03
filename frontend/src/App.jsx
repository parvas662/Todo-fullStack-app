import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
function App() { 
      const [todos,settodos] =  useState([]);
 
        fetch("http://localhost:3000/todo")       // this will make call every 1ms or frequently.so this need to be updated. 
            .then(async function(res){
              const json = await res.json();
              settodos(json.todos); 
            }) 
            
      return (   // things that will render on screen #child-Components
          // 2 child components 
        <div>  
          <CreateTodo></CreateTodo>
          <Todos todos = {todos}> </Todos> 
        </div>
      )
}

export default App

