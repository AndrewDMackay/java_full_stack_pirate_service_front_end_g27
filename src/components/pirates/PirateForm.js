
import React, {useState, useEffect} from 'react';
import Request from "../../helpers/request";    


const PirateForm = ({ships, onCreate, pirate, onUpdate}) => {


const [ statePirate, setStatePirate ] = useState (
    {   
        firstName: "",
        lastName: "",
        age: 0,
        ship: null
    }
)

    useEffect(() => {
        if(pirate){
            let copiedPirate = {...pirate}
            setStatePirate(copiedPirate);
        } else {
            let blankPirate = {
                firstName: "",
                lastName: "",
                age: 0,
                ship: null
            }
            setStatePirate(blankPirate)
        }
    }, [pirate])


    if(!ships.length === 0){
        return <p>Loading...</p>
    }

    let heading = "";
    if(!pirate){
        heading = "Create Pirate"
    } else {
        heading = "Edit " + pirate.firstName;
    }
    

    const findShipByIndex = function(){
        if(pirate){
            return ships.findIndex(ship => pirate.ship.id === ship.id)
        } else {
            return null;
        }
    }


    if(pirate){
        let copiedPirate = {...pirate}
        setStatePirate(copiedPirate);
    }


    const shipOptions = ships.map((ship, index) => {
        return <option key = {index} value = {index}>{ship.name}</option>
    })


    const handleChange = function(event){
        let propertyName = event.target.name;
        let copiedPirate = {...statePirate}
        copiedPirate[propertyName] = event.target.value;
        setStatePirate(copiedPirate);
    }


    const handleShip = function(event){
        const selectedShip = ships[event.target.value]
        let copiedPirate = {...statePirate};
        copiedPirate['ship'] = selectedShip;
        setStatePirate(copiedPirate);
    }


    const handleSubmit = function(event){
        event.preventDefault();
        if(statePirate.id){
            onUpdate(statePirate)
        } 
            onCreate(statePirate)
        }


    return(
       <>
       <h3>{heading}</h3>
       <form onSubmit={handleSubmit}>
           <input type="text" placeholder="First Name" name ="firstName" 
           onChange={handleChange} value= {statePirate.firstName}></input>
           <input type="text" placeholder="Last Name" name ="lastName"
            onChange={handleChange} value= {statePirate.lastName}></input>
            <input type="number" placeholder="Age" name ="age"
            onChange = {handleChange} value= {statePirate.age}></input>
            <select name="ship" onChange={handleShip} defaultValue={findShipByIndex() || 'select-ship'}>
            <option disabled value="select-ship">Select A Ship</option>
            {shipOptions}
            </select>
            <button type = "submit">Save</button>
       </form>
       </>
    )
}


export default PirateForm;

