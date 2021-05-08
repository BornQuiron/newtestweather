/* import { ReactRouter as Router, Route, Switch } from 'react-router-dom' */
import Navbar from './components/Navbar';
import Main from './components/Main';
import Map from './components/Map';

import { useState, useEffect } from 'react'
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


  const [ coordz, setCoordz ] = useState('');


  useEffect(() => {

        const showPosition = (position) => {
            const coords = `${position.coords.latitude}/${position.coords.longitude}`;
            
            console.log(coords)
            setCoordz(coords)

            /* console.log(position.coords.latitude); */
        }
    
        const showError = (error) => {


            switch(error.code) {
                case error.PERMISSION_DENIED:
                  alert("User denied the request for Geolocation.")
                  break;
                case error.POSITION_UNAVAILABLE:
                  alert("Location information is unavailable.")
                  break;
                case error.TIMEOUT:
                  alert("The request to get user location timed out.")
                  break;
                case error.UNKNOWN_ERROR:
                  alert("An unknown error occurred.")
                  break;
            }
        }



        if(navigator.geolocation){
            /* console.log(navigator.geolocation.getCurrentPosition()) */
            navigator.geolocation.getCurrentPosition(showPosition, showError,{ enableHighAccuracy: true });
        } else {
            alert('Geolocation is not supported by this browser');
        }

    

  }, []);


  return (
      <div className="App">
        {welcome ? (
          <>
            <Screen welcome={welcome} setWelcome={setWelcome}/>
            <p>{coordz}</p>
          </>
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
