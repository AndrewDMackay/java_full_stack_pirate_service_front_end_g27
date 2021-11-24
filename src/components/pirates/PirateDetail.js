import React from 'react';
import Pirate from "./Pirate";

const PirateDetail = ({pirate, onDelete}) => {

    if (!pirate){
      return <p>Loading...</p>
    }


  const handleDelete = () => {
    onDelete(pirate.id)
  }

  const piratesRaids = pirate.raids.map((raid, index) => {
    return <li key={index}>
    {raid.location}
    </li>
  })


    return (
      <div className = "component">
      <Pirate pirate = {pirate}/>
      <p>Raids:</p>
      <ul>
      {piratesRaids}
      </ul>
      <button onClick={handleDelete}>Delete {pirate.firstName}</button>
      </div>
    )
  }

export default PirateDetail;
