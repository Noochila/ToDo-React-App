import { useState } from "react"

export function CreateTodo() {

const [title, setTitle] = useState("")
const [desc, setDes] = useState("")
    return <div>

        <input type="text" placeholder="Title" onChange={(e) => {
            const val = e.target.value;
            setTitle(val)
            
        }} /><br />
        <input type="text" placeholder="Description" onChange={(e) => {
            const val = e.target.value;
            setDes(val)
        }} />
        <br />
        <button type="submit" onClick={() => {
            fetch("http://localhost:3000/todos", {
                method: "POST", headers: { 'Content-Type': 'application/json' }, body:
                    JSON.stringify({ title: title, description: desc })

            })
          alert("Successfully Created")
        }} >Submit</button>

    </div>

}