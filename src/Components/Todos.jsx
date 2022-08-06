import React, { useEffect, useState } from 'react'

export const Todos = () => {
    const [todos, settodos] = useState([])
  const [term, setterm] = useState('')

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>  response.json())
  .then((data)=>  settodos(data) ) 
  .catch((err)=>(console.log(err.message)))
}, [])
console.log(todos, "todos");

const filteredTodos = todos.slice(0,6).filter(({title})=>{
 return title.includes(term) }).map( todos=>(
    <div className="bg-gray-200 h-52 flex items-center justify-center    border-black border-solid border-2 ">
<h1>
  {todos.title}
</h1>
  </div>
  )
)
  return (
    <div><div className="h-20 bg-gray-200 flex items-center justify-center">

    <h1 className='text-6xl'>
      Todos
    </h1>
    <input type="text" value={term} onChange={e=>{setterm(e.target.value)}} />
</div>
<div className="grid grid-cols-2 gap-5 p-5 ">
  {filteredTodos}
  
</div></div>
  )
}
