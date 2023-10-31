function BuildingList( {data, filterText, selectedUpdate} ) {
  // TODO: Apply names filter on buildingList
  const buildingList = data.filter(directory => directory.name.toLowerCase().includes(filterText.toLowerCase()))
    .map(directory => {
      return (
          // TODO: Create onClick listener to capture building id being selected
          <tr key={directory.id} onClick={() => selectedUpdate(directory.id)}>
            <td>{directory.code} </td>
            <td> {directory.name} </td>
          </tr>
      );
    });

  return <>{buildingList}</>;
}

export default BuildingList;
