import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { CreateTodo } from '../Components/CreateToDo'
import { Todos } from '../Components/Todos'


function App() {
   
  const [todos,SetTodos]=useState([])



  fetch("https://todo-react-app-ry5i.onrender.com/todos").then(async(res)=>{

  const resp=await res.json();
  // console.log(resp);
  SetTodos(resp)
    
  })

  return (
   <div>
     <CreateTodo></CreateTodo>
     <br />
     <Todos  todo={todos} ></Todos>
   </div>
    
  )
}

export default App
