/* import { ReactRouter as Router, Route, Switch } from 'react-router-dom' */
import Navbar from './components/Navbar';
import Main from './components/Main';
import Map from './components/Map';

import { useState } from 'react'
import Screen from './components/Screen';


function App() {
    
  const [ welcome, setWelcome ] = useState(true);


  const [ showMap, setShowMap ] = useState(false);
  const [ typeSearch, setTypeSearch ] = useState('');


  const [ data, setData ] = useState(null);
  const [ error, setError ] = useState(false);
  const [ loading, setLoading ] = useState(false);

  

  // Refresh related
  const [ location, setLocation ] = useState('');




  return (
      <div className="App">
        {welcome ? (
          <Screen welcome={welcome} setWelcome={setWelcome}/>
        ) : (
          <>
            <Navbar error={error} setError={setError} loading={loading} setLoading={setLoading} data={data} setData={setData} location={location} setLocation={setLocation} typeSearch={typeSearch} setTypeSearch={setTypeSearch}/>
        

            <Main error={error} setError={setError} loading={loading} setLoading={setLoading} data={data} setData={setData} showMap={showMap} setShowMap={setShowMap} location={location} setLocation={setLocation} typeSearch={typeSearch} setTypeSearch={setTypeSearch}/>

            {showMap && (<Map data={data} setData={setData} showMap={showMap} setShowMap={setShowMap}/>)}
          </>
        )}

        
      </div>
  );
}

export default App;
