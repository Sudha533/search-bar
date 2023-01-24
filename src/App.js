import './App.css';
import React, {useState} from 'react';
import entries from './Data/data.json';

function App() {
  const [inputValue, setInputValue] = useState('');
  const onSearch = (searchTerm) =>{
    setInputValue(searchTerm);
  }
  return (
    <main className="App">
      <div className='container'>
          <div className='search-container'>
              <input 
              value = {inputValue}
              onChange = {(event)=>setInputValue(event.target.value)}
              placeholder="Search..."
              type="search" 
              className='search-input'/>
              <button onClick={()=>onSearch(inputValue)} className='search-button'>Search</button>
          </div>
          <div className='dropdown'>
            {entries.filter(item =>{
              let searchTerm = inputValue.toLowerCase();
              let name = item.name.toLowerCase();
              return searchTerm && name.startsWith(searchTerm) && name!==searchTerm;
            }).slice(0,5)
            .map((item,i) =>(
            <div onClick={()=>onSearch(item.name)} className='dropdown-row' key={item.name}>{item.name}</div>  
            ))}
          </div>
      </div>
      
    </main>
  );
}

export default App;
