import React, {useState} from 'react';

function AddBuilding({data, newList, setNewList}) {
    // TODO: Add a building to the listing 
    const [buildingID, setBuildingID] = useState(0);
    const [buildingCode, setBuildingCode] = useState('');
    const [buildingLatitude, setBuildingLatitude] = useState('');
    const [buildingLongitude, setBuildingLongitude] = useState('');
    const [buildingName, setBuildingName] = useState('');
    const [buildingAddress, setBuildingAddress] = useState('');
    
    function addBuildingFunc(){
        const building = {
            id: buildingID,
            code: buildingCode,
            name: buildingName,
            coordinates: {
                latitude: buildingLatitude,
                longitude: buildingLongitude
            },
            address: buildingAddress
        }

        const list = [...newList, building];
        setNewList(list);
        console.log(list);

        setBuildingID('');
        setBuildingCode('');
        setBuildingName('');
        setBuildingLatitude('');
        setBuildingLongitude('');
        setBuildingAddress('');
    }
    
    return (
        <div>
          <h2>Add a Building</h2>
          <div>
            <label>Building ID:</label>
            <input
              type="text"
              value={buildingID}
              onChange={(e) => setBuildingID(e.target.value)}
            />
          </div>
          <div>
            <label>Building Code:</label>
            <input
              type="text"
              value={buildingCode}
              onChange={(e) => setBuildingCode(e.target.value)}
            />
          </div>
          <div>
            <label>Building Name:</label>
            <input
              type="text"
              value={buildingName}
              onChange={(e) => setBuildingName(e.target.value)}
            />
          </div>
          <div>
            <label>Building Latitude:</label>
            <input
              type="text"
              value={buildingLatitude}
              onChange={(e) => setBuildingLatitude(e.target.value)}
            />
          </div>
          <div>
            <label>Building Longitude:</label>
            <input
              type="text"
              value={buildingLongitude}
              onChange={(e) => setBuildingLongitude(e.target.value)}
            />
          </div>
          <div>
            <label>Building Address:</label>
            <input
              type="text"
              value={buildingAddress}
              onChange={(e) => setBuildingAddress(e.target.value)}
            />
          </div>
          <button onClick={addBuildingFunc}>Add Building</button>
        </div>
      );
    
  }
  
  export default AddBuilding;
  