import React, {useState} from 'react';

function AddBuilding({data, newList, setNewList}) {
    // TODO: Add a Building to the listing 
    const [BuildingID, setBuildingID] = useState(0);
    const [BuildingCode, setBuildingCode] = useState('');
    const [BuildingLatitude, setBuildingLatitude] = useState('');
    const [BuildingLongitude, setBuildingLongitude] = useState('');
    const [BuildingName, setBuildingName] = useState('');
    const [BuildingAddress, setBuildingAddress] = useState('');
    
    function addBuildingFunc(){
        const Building = {
            id: BuildingID,
            code: BuildingCode,
            name: BuildingName,
            coordinates: {
                latitude: BuildingLatitude,
                longitude: BuildingLongitude
            },
            address: BuildingAddress
        }

        const list = [...newList, Building];
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
              value={BuildingID}
              onChange={(e) => setBuildingID(e.target.value)}
            />
          </div>
          <div>
            <label>Building Code:</label>
            <input
              type="text"
              value={BuildingCode}
              onChange={(e) => setBuildingCode(e.target.value)}
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
          <div>
            <label>Building Latitude:</label>
            <input
              type="text"
              value={BuildingLatitude}
              onChange={(e) => setBuildingLatitude(e.target.value)}
            />
          </div>
          <div>
            <label>Building Longitude:</label>
            <input
              type="text"
              value={BuildingLongitude}
              onChange={(e) => setBuildingLongitude(e.target.value)}
            />
          </div>
          <div>
            <label>Building Address:</label>
            <input
              type="text"
              value={BuildingAddress}
              onChange={(e) => setBuildingAddress(e.target.value)}
            />
          </div>
          <button onClick={addBuildingFunc}>Add Building</button>
        </div>
      );
    
  }
  
  export default AddBuilding;
  