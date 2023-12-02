import React, {useState} from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import bundles from './bundles.json';
import InfoCard from './components/infoCard';

function App() {
  // get all the item names from the bundles.json object
  const allItems = bundles.bundles.flatMap(bundle => 
    bundle.lots.flatMap(lot => lot.items)
  );

  // const itemNames = items.map(item => item.name);

  // add a new prop to store the selected item from the typeahead
  const [selectedItem, setSelectedItem] = useState({});

  return (
    <div className="App p-4 d-flex flex-column align-items-center vh-100"> 
      <div className="card card-border rounded w-100 p-4 align-items-center">
        <h1>🤠🐔🐄</h1>

        <Typeahead
          id="search"
          className='w-100'
          placeholder='Search for an item...'
          labelKey="name"
          onChange={(selected) => {
            setSelectedItem(selected[0]);
          }}
          options={allItems}
        />
      </div>

      <InfoCard info={ selectedItem} />

    </div>
  );
}

export default App;