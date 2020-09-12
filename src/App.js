import React, {useState, useEffect} from 'react';
import './App.css';
import ContactCard from './ContactCard';

const App = () => {
// const contacts  = [
//   {avatarUrl:"https://via.placeholder.com/150",
//     name: "Miguel 1",
//     email: "mail1@nohay.com",
//     age: 25},
//   {avatarUrl:"https://via.placeholder.com/150",
//     name: "Miguelon 2",
//     email: "mail2@nohay.com",
//     age: 35},
//   {avatarUrl:"https://via.placeholder.com/150",
//     name: "Miguelito 3",
//     email: "mail3@nohay.com",
//     age: 45},
//   {avatarUrl:"https://via.placeholder.com/150",
//     name: "Miguelucho 4",
//     email: "mail4@nohay.com",
//     age: 55}
// ]

  const [results, setResults]=useState([]);
useEffect(()=>{
  fetch("https://randomuser.me/api/?results=10")
  .then(response=>response.json())
  .then(data=>{console.log(data)
        setResults(data.results)
  });
},[])


  return (
    <div>
      {results.map((result, index)=>{
        return(
          <ContactCard
            key={index}
            avatarUrl={result.picture.large}
            name={result.name.first}
            email={result.email}
            age={result.dob.age}/>
        )
      })}

    </div>
  )
}

export default App;
