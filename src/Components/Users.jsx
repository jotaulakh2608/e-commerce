import React, { useEffect, useState } from 'react'

export const Users = () => {
    const [users, setusers] = useState([])
  const [term, setterm] = useState('')


const arr = [1 , 3, 5, 100]

const max = Math.max.apply(null, arr)
arr.splice(arr.indexOf(max), 1)
const max2 = Math.max.apply(null, arr)
console.log(max);
console.log(max2);

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>  response.json())
  .then((data)=>  setusers(data) ) 
  .catch((err)=>(console.log(err.message)))
}, [])
console.log(users, "users");

const filteredUsers = users.slice(0,6).filter(({title})=>{
 return title.includes(term) }).map( users=>(
    <div className="bg-gray-200 h-52 flex items-center justify-center    border-black border-solid border-2 ">
<h1>
  {users.title}
</h1>
  </div>
  )
)
  return (
    <div><div className="h-20 bg-gray-200 flex items-center justify-center">

    <h1 className='text-6xl'>
      Users
    </h1>
    <input type="text" value={term} onChange={e=>{setterm(e.target.value)}} />
</div>
<div className="grid grid-cols-2 gap-5 p-5 ">
  {filteredUsers}
  
</div></div>
  )
}
