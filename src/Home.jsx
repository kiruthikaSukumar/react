import React from 'react'

function Home(props) {
  return (
      <div><h2>Home component:</h2>
          <p>{props.userDetails.firstName}</p>
          <p>{props.userDetails.LastName}</p>
          <p>{props.userDetails.phonenumber}</p>
          
      </div>
      
  )
}

export default Home