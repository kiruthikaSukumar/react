import React from 'react'

const Child = (props) => {
    const user = {
        name:"kiruthika",age:30
    }
    const onClickEvent = () => {
        props.sendData(user)
    }

  return (
      <div><button onClick={onClickEvent}>sendData</button></div>
  )
  }

export default Child