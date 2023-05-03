import React from 'react'

function About(props) {
    return (
        <div><h3>About component:</h3>
            <p>{props.firstName}</p>
            <p>{props.LastName}</p></div>
    )

}

export default About 