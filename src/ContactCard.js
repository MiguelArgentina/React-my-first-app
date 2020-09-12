import React, {useState} from 'react';

const ContactCard = (props) => {
  const [showAge, setShowAge] = useState(false);

  return (
    <div className = "contact-card">
        <img
          src = {props.avatarUrl}
          alt = "Profile">
        </img>
        <div className = "user-details">
          <p> Nombre: {props.name} </p>
          <p> Email: {props.email} </p>
          <button onClick={()=> setShowAge(!showAge)}> Show age </button>
          {showAge ? <p> Edad: {props.age} </p> : null}
        </div>

    </div>
  )
}

export default ContactCard;
