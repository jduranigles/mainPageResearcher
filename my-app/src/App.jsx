import React, {useState} from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import AddBuilding from './components/AddBuilding';
import Credit from './components/Credit';

//TODO: Create dropdowns for each entry in list, this displays the viewbuilding method
//TODO: Make add button a popup button rather than whatever tf that is


function App({ data }) {
  const [filterText, setFilterText] = useState('');
  const [selectedBuilding, setSelectedBuilding] = useState(0);
  const [newList, setNewList] = useState(data);

  function filterUpdate(value) {
    setFilterText(value);
  }

  function removeBuilding(id){
    const list = newList.filter(building => building.id !== id);
    setNewList(list);
    if(selectedBuilding === id){
      setSelectedBuilding(0);
    }
  }

  function selectedUpdate(id) {
    setSelectedBuilding(id);
  }

  return (
    <div className="bg">
      <div className="row">
        <h1>Temp MainPage "Pretend the data are a bunch of studies"</h1>
      </div>
      {}
      <Search filterUpdate={filterUpdate}/>
      <main>
        <div className="row">
          <div className="column1">
            <div className="tableWrapper">
              <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <td>
                    <b>Code Building</b>
                  </td>
                </tr>
              </thead>
              <tbody>
                {}
                <BuildingList
                  data={newList} filterText={filterText} selectedUpdate = {selectedUpdate}
                />
              </tbody>
              </table>
            </div>
          </div>
          <div className="column2">
            <ViewBuilding 
              data = {data} selectedBuilding={selectedBuilding} removeBuilding = {removeBuilding}
            />
          </div>
          <div className="column3">
            <AddBuilding 
              data = {data}
              newList = {newList}
              setNewList = {setNewList}
            />
          </div>
        </div>
        <Credit />
      </main>
    </div>
  );
}

export default App;
