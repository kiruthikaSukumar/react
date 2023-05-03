import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './welcome'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home'
import About from './About'
import Form from './form'
import Child from './Child'


function App() {
  // const userDetails = { firstName: "kiruthi", LastName: "kiruthika", phonenumber: 9576898074 }
  // const getData = (data) => {
  //   console.log("comming from child", data)
  // }
  const [user,setuser] = useState({ name: '', age: ""
  })
  const sendData = (user) => { setuser(user) }
  return (
    <div className='App'>
      {/* <Form onSubmit={getData}></Form> */}
      {/* <Home userDetails={userDetails}></Home><hr></hr>
      <About firstName="Soumithra" LastName ="Magathi"></About> */}
      <Child>sendData={sendData}</Child>
    
   <div><strong>{user.name}</strong>
        <strong>{user.age}</strong>
      </div>
      </div>
  );
}

export default App
