import React, {useState} from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import AddBuilding from './components/AddBuilding';
import Credit from './components/Credit';

function App({ data }) {
  // TODO: Update the following two variables to use the useState() hook
  const [filterText, setFilterText] = useState('');
  const [selectedBuilding, setSelectedBuilding] = useState(0);
  const [newList, setNewList] = useState(data);

  function filterUpdate(value) {
    // TODO: Set the state of the filter text to the value being passed in
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
    // TODO: Set the state of the selected building to the id being passed in
    setSelectedBuilding(id);
  }

  return (
    <div className="bg">
      <div className="row">
        <h1>UF Directory App</h1>
      </div>
      {/* TODO: Edit Search component to include necessary props */}
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
                {/* TODO: Edit BuildingList component to include necessary props */}
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
