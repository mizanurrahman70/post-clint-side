
import { useEffect, useState } from 'react'
import './App.css'


function App() {
 const [user,SetUser]=useState([])
 useEffect(()=>{
   fetch('http://localhost:5000/user')
   .then(res=>res.json())
   .then(data=>SetUser(data))
 },[])
 

 const fromHandle=(e)=>{
  e.preventDefault()
  const name=e.target.name.value
  const Email=e.target.email.value
  const user={name,Email}
  console.log(user)
  fetch('http://localhost:5000/user',{
    method:'POST',
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(user)

  })
  .then(res=>res.json())
  .then(data=>{
    const newData=[...user,data]
    SetUser(newData)
  })
 

 }
  return (
    <>
    
      <h1>User Management</h1>
      <h3>your Total Data {user.length}</h3>
      <form onSubmit={fromHandle}>
        <input type="text" name='name' /><br />
        <input type="email" name="email" id="" /><br />
        <input type="submit" value="submit" />
      </form>
      <div>
        {user.map((data)=><p key={data.id}>{data.id}{data.name}:{data.Email}</p>)}
      </div>
    </>
  )
}

export default App
