function BuildingList( {data, filterText, selectedUpdate} ) {
  // TODO: Apply names filter on BuildingList
  const BuildingList = data.filter(directory => directory.name.toLowerCase().includes(filterText.toLowerCase()))
    .map(directory => {
      return (
          // TODO: Create onClick listener to capture Building id being selected
          <tr key={directory.id} onClick={() => selectedUpdate(directory.id)}>
            <td>{directory.code} </td>
            <td> {directory.name} </td>
          </tr>
      );
    });

  return <>{BuildingList}</>;
}

export default BuildingList;
