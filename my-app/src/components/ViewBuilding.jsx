function ViewBuilding({data, selectedBuilding, removeBuilding}) {
  // TODO: Find the corresponding data based off the selected building's id and display its data
  const selected = data.find(building => building.id === selectedBuilding);
  function deleteBuilding(){
    removeBuilding(selectedBuilding);
  }
  if (selected) {
    return (
      <div>
        <h2>Building Information</h2>
        <p>
          Building Name: {selected.name}
        </p>
        <p>
          Building Code: {selected.code}
        </p>
        <p>
          Building ID: {selected.id}
        </p>
        <p>
          Building Address: {selected.address}
        </p>
        <p>
          Building Coordinates: 
            Latitude: {selected.coordinates.latitude}
            &nbsp;Longitude: {selected.coordinates.longitude}
        </p>
        <button onClick={deleteBuilding}>Remove Building</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>
          <i>Click on a name to view more information</i>
        </p>
      </div>
    );
  }
}

export default ViewBuilding;
