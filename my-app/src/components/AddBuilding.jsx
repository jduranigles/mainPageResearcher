import React, {useState} from 'react';

function AddBuilding({data, newList, setNewList}) {
    // TODO: Add a Building to the listing 
    const [BuildingID, setBuildingID] = useState(0);
    const [BuildingName, setBuildingName] = useState('');
    
    function addBuildingFunc(){
        const Building = {
            id: BuildingID,
            name: BuildingName,
        }

        const list = [...newList, Building];
        setNewList(list);
        console.log(list);

        setBuildingID('');
        setBuildingName('');
    }
    
    return (
        <div>
          <h2>Add a Building</h2>
          <div>
            <label>Building ID:</label>
            <input
              type="text"
              value={BuildingID}
              onChange={(e) => setBuildingID(e.target.value)}
            />
          </div>
          <div>
            <label>Building Name:</label>
            <input
              type="text"
              value={BuildingName}
              onChange={(e) => setBuildingName(e.target.value)}
            />
          </div>
          <button onClick={addBuildingFunc}>Add Building</button>
        </div>
      );
    
  }
  
  export default AddBuilding;
  