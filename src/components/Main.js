import { useEffect, useState } from "react"
import Error from "./Error";
import Loading from "./Loading";
import WeatherIcon from "./WeatherIcon";



const Main = ({ error, setError, loading, setLoading, showMap, setShowMap, data, setData, typeSearch, setTypeSearch, location, setLocation }) => {


    const [ converteMeasureUnit, setConverteMeasureUnit ] = useState(false);
    const [ converteTempUnit, setConverteTempUnit ] = useState(false);


    // Refresh related
    const [ coords, setCoords ] = useState('');






    const handleRefresh = () => {


        setLoading(true);
        setError(null);
        setData(null);

        if(typeSearch === 'geo' && coords !== ''){
            fetch(`https://givemetheweather.herokuapp.com/api/${coords}`)
            .then(res => res.json())
            .then(data => {

                if(data.error){
                    setData(null);
                    setLoading(false);
                    setError(data.error)
                    /* console.log(data.error) */
                } else {
                    setLoading(false);
                    setError(null);
                    /* console.log(data) */
                    setData(data);
                }

            })
            .catch(err => {
                setLoading(false);
                setData(null);
                setError(500);
            });
        } else if(typeSearch === 'manual' && location !== ''){
            fetch(`https://givemetheweather.herokuapp.com/api/search/${location}`)
            .then(res => res.json())
            .then(data => {
                if(data.error){
                    setData(null);
                    setLoading(false);
                    setError(data.error)
                    /* console.log(data.error) */
                } else {
                    setLoading(false);
                    setError(null);
                    /* console.log(data) */
                    setData(data);
                }
            })
            .catch(err => {
                setLoading(false);
                setData(null);
                setError(500);
            });
        } else if(typeSearch === 'ip'){
            fetch(`https://givemetheweather.herokuapp.com/api/geoip`)
            .then(res => res.json())
            .then(data => {
                if(data.error){
                    setData(null);
                    setLoading(false);
                    setError(data.error)
                    /* console.log(data.error) */
                } else {
                    setLoading(false);
                    setError(null);
                    /* console.log(data) */
                    setData(data);
                }
            })
            .catch(err => {
                setLoading(false);
                setData(null);
                setError(500);
            });
        }
    }


    const handleGeolocationCall = () => {


        setLoading(true);
        setError(null);
        setData(null);

        const geolocationCall = async (coords) => {

            await fetch(`https://givemetheweather.herokuapp.com/api/${coords}`)
            .then(res => res.json())
            .then(data => {
                

                if(data.error){
                    setData(null);
                    setLoading(false);
                    setError(data.error);
                    /* console.log(data.error) */
                } else {
                    setLoading(false);
                    setError(null);
                    /* console.log(data) */
                    setData(data);
                    setTypeSearch('geo');
                    setCoords(coords);
                }
            })
            .catch(err => {
                setLoading(false);
                setData(null);
                setError(500);
            }) 

        }


        const showPosition = (position) => {
            const coords = `${position.coords.latitude}/${position.coords.longitude}`;
            geolocationCall(coords);
            setCoords(coords)

            /* console.log(position.coords.latitude); */
        }
    
        const showError = (error) => {

            setLoading(false);

            switch(error.code) {
                case error.PERMISSION_DENIED:
                  setError("User denied the request for Geolocation.")
                  break;
                case error.POSITION_UNAVAILABLE:
                  setError("Location information is unavailable.")
                  break;
                case error.TIMEOUT:
                  setError("The request to get user location timed out.")
                  break;
                case error.UNKNOWN_ERROR:
                  setError("An unknown error occurred.")
                  break;
                default: {
                    
                }
            }
        }



        if(navigator.geolocation){
            /* console.log(navigator.geolocation.getCurrentPosition()) */
            navigator.geolocation.getCurrentPosition(showPosition, showError,{ enableHighAccuracy: true });
        } else {
            setError('Geolocation is not supported by this browser');
        }

    }

    
    


    const handleLocationIndicator = () => {

        const indicator = document.querySelector('#location-indicator');

        if(typeSearch === 'manual'){
            indicator.style.backgroundColor = '#40916c';
        } else if(typeSearch === 'geo'){
            indicator.style.backgroundColor = 'hsl(203, 39%, 48%)';
        } else {
            indicator.style.backgroundColor = 'hsl(203, 39%, 30%)';
        }

    }
    


    // Handle measure unit change
    const handleMeasureUI = () => {

        // Get dom elements
        const kmElement = document.querySelector('#measure-km');
        const mElement = document.querySelector('#measure-m');

        // Switch between measure units
        kmElement.addEventListener('click', () => {
            
            if(converteMeasureUnit){
                setConverteMeasureUnit(false);
            } else if(!converteMeasureUnit){
                // Dont do anything
            }
        });

        mElement.addEventListener('click', () => {
            
            if(!converteMeasureUnit){
                setConverteMeasureUnit(true);
            } else if(converteMeasureUnit){
                // Dont do anything
            }
        });

        // Change cursor
        if(!converteMeasureUnit){
            kmElement.style.cursor = 'text';
            kmElement.style.color = '#000';
            mElement.style.cursor = 'pointer';
            mElement.style.color = '#ccc';
        } else if(converteMeasureUnit){
            kmElement.style.cursor = 'pointer';
            kmElement.style.color = '#ccc';
            mElement.style.cursor = 'text';
            mElement.style.color = '#000';
        }
        
    }


    // Handle Temp unit change
    const handleTempUI = () => {

        // Get dom elements
        const celsiusElement = document.querySelector('#temp-celsius');
        const fahrenheitElement = document.querySelector('#temp-fahrenheit');

        // Switch between measure units
        celsiusElement.addEventListener('click', () => {
            
            if(converteTempUnit){
                setConverteTempUnit(false);
            } else if(!converteTempUnit){
                // Dont do anything
            }
        });

        fahrenheitElement.addEventListener('click', () => {
            
            if(!converteTempUnit){
                setConverteTempUnit(true);
            } else if(converteTempUnit){
                // Dont do anything
            }
        });

        // Change cursor
        if(!converteTempUnit){
            celsiusElement.style.cursor = 'text';
            celsiusElement.style.color = '#000';
            fahrenheitElement.style.cursor = 'pointer';
            fahrenheitElement.style.color = '#ccc';
        } else if(converteTempUnit){
            celsiusElement.style.cursor = 'pointer';
            celsiusElement.style.color = '#ccc';
            fahrenheitElement.style.cursor = 'text';
            fahrenheitElement.style.color = '#000';
        }
        
    }

    useEffect(() => {

        setLoading(true);
        setError(null);
        setData(null);

        // Ip Location
        fetch(`https://givemetheweather.herokuapp.com/api/geoip`)
        .then(res => res.json())
        .then(data => {
            if(data.error){
                setData(null);
                setLoading(false);
                setError(data.error);
                /* console.log(data.error) */
            } else {
                setLoading(false);
                setError(null);
                /* console.log(data) */
                setData(data);
                setTypeSearch('ip');
            }
        })
        .catch(err => {
            // Server is down or server error
            setLoading(false);
            setData(null);
            setError(500);
        }) 
    }, [])


    useEffect(() => {

  
        if(data){
            handleMeasureUI();
            handleTempUI();
            handleLocationIndicator();
        }
        
        handleWindDirection();

    },[data, converteMeasureUnit, converteTempUnit, typeSearch])


    // Handle wind direction
    const handleWindDirection = () => {

        if(data){
            
            try{
                const defaultNorth = -45;

            const rotateWind = defaultNorth + data[0].currentWeather.wind.deg;

            const windDirectionIcon = document.querySelector('#wind_direction');

            windDirectionIcon.style.transform = `rotate(${rotateWind}deg)`;
            }
            catch(err){
                
            }
        }
    }


    // Handle wind direction
    const handleWindSpeed = () => {

        if(data){
            const windSpeed = data[0].currentWeather.wind.speed;

            if(converteMeasureUnit){
                const displayedWindSpeed = parseFloat(windSpeed * 0.6213711922).toFixed(2);
                return displayedWindSpeed;
            } else {
                return windSpeed;
            }
        }
    }



    // Handle temp
    const handleTemp = () => {

        if(data){
            const rawTemp = data[0].currentWeather.main.temp;

            if(converteTempUnit){
                const fahrenheitTemp = parseFloat((rawTemp * 1.8) + 32).toFixed(0);
                return fahrenheitTemp;
            } else {
                return Math.floor(rawTemp);
            }
        }
    }



    // Get week day
    const getWeekDay = () => {

        const date = new Date();
        const wDay = date.getDay();


        switch(wDay){
            case 0: {
                return 'domingo';
            }
            case 1: {
                return 'segunda';
            }
            case 2: {
                return 'terça';
            }
            case 3: {
                return 'quarta';
            }
            case 4: {
                return 'quinta'
            }
            case 5: {
                return 'sexta'
            }
            case 6: {
                return 'sábado'
            }
            default: {
                return ''
            }
        }
    }


    // Get location time
    const getTime = () => {

        if(data){

            const rawTime = data[0].timezone.time;

            const time = rawTime.split(' ')[1];

            return time;
        }
    }


    // Precipitation

    const handlePrecipitation = () => {

        if(data){

            if(data[0].currentWeather.rain){
                return data[0].currentWeather.rain['1h'];
            } else{
                return 0;
            }
        }
    }



    // Sunrise

    const handleSunrise = () => {
        
        if(data){

            const rawSunrise = data[0].timezone.sunrise;

            const sunrise = rawSunrise.split(' ')[1];

            return sunrise;
        }

    }


    // Sunset

    const handleSunset = () => {
        
        if(data){

            const rawSunset = data[0].timezone.sunset;

            const sunset = rawSunset.split(' ')[1];

            return sunset;
        }

    }


    return (
        <main>

            {data ? (
                <>
                    <section className="weather-content-container">

                        <div className="units-wrapper">

                            <div className="refresh" onClick={() => handleRefresh()}>
                                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
                                <g>
                                    <path d="M511.957,185.214L512,15.045l-67.587,67.587l-7.574-7.574c-48.332-48.332-112.593-74.95-180.946-74.95
                                        C114.792,0.107,0,114.901,0,256s114.792,255.893,255.893,255.893S511.785,397.099,511.785,256h-49.528
                                        c0,113.79-92.575,206.365-206.365,206.365S49.528,369.79,49.528,256S142.103,49.635,255.893,49.635
                                        c55.124,0,106.947,21.467,145.925,60.445l7.574,7.574l-67.58,67.58L511.957,185.214z"/>
                                </g>
                            </svg>
                            </div>

                            <div className="units">
                                <div className="measure-units">
                                    <span id="measure-km">
                                        Kph
                                    </span>
                                    <span id="measure-m">
                                        Mph
                                    </span>
                                </div>
                                <div className="temp-units">
                                    <span id="temp-celsius">
                                        ºC
                                    </span>
                                    <span id="temp-fahrenheit">
                                        ºF
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="weather-content-wrapper">
                            
                            <span id="location-indicator"></span>

                            <div className="weather-content">


                            <div className="location-name-description">
                                        <div className="location-name">
                                            <h2>{data[0].currentWeather.name}</h2>
                                        </div>
                                        <div className="location-description">
                                            <p>{getWeekDay()}, {getTime()}, {data[0].currentWeather.weather[0].description}</p>
                                        </div>
                                    </div>

                                    
                                    <div className="weather-info">
                                        <div className="weather-main">
                                            <div className="weather-icon">
                                                <WeatherIcon data={data[0].currentWeather.weather[0].icon}/>
                                            </div>
                                            <div className="current-temp">
                                                <p>{ handleTemp() }<sup><span>{ converteTempUnit ? 'ºF' : 'ºC' }</span></sup></p>
                                            </div>
                                        </div>

                                        <div className="weather-extra-wrapper">
                                            <div className="weather-extra">
                                                <p>Precip.: <span>{handlePrecipitation()} mm/h</span></p>
                                                <p>Humidade: <span>{data[0].currentWeather.main.humidity}%</span></p>
                                                <p>Pressão: <span title="hectopascals">{data[0].currentWeather.main.pressure} hPa</span></p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="wind-info">
                                        <p>Vento: <span>{ handleWindSpeed() } { converteMeasureUnit ? 'mi/h' : 'km/h'}</span></p>

                                        <div className="wind-svg" id="wind_direction">
                                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                viewBox="0 0 477.883 477.883">
                                            <g>
                                                <g>
                                                    <path d="M468.456,1.808c-4.811-2.411-10.478-2.411-15.289,0l0,0L9.433,223.675c-8.429,4.219-11.842,14.471-7.624,22.9
                                                        c2.401,4.798,6.919,8.188,12.197,9.151l176.111,32.034l32.034,176.111c1.311,7.219,7.091,12.793,14.353,13.841
                                                        c0.803,0.116,1.613,0.173,2.423,0.171c6.469,0.003,12.383-3.651,15.275-9.438L476.07,24.711
                                                        C480.292,16.284,476.883,6.03,468.456,1.808z"/>
                                                </g>
                                            </g>
                                            </svg>

                                        </div>
                                    </div>

                                    
                                    <div className="bottom-weather">
                                        <div className="sunset-sunrise">
                                            <div className="sunrise">
                                                <p className="s-title">Nascer do sol</p>
                                                <p className="s-value">{handleSunrise()}</p>
                                            </div>
                                            <div className="sunset">
                                                <p className="s-title">Pôr do sol</p>
                                                <p className="s-value">{handleSunset()}</p>
                                            </div>
                                        </div>


                                        <div className="open-map">
                                            <span onClick={() => setShowMap(true)}>Mapa</span>
                                        </div>
                                    </div>

                            </div>

                        </div>

                        </section>


                        <div className="use-location">
                            <button onClick={() => handleGeolocationCall()}>Usar localização precisa 
                            <span>
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                                    viewBox="0 0 512 512">
                                <g>
                                    <g>
                                        <path d="M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5
                                            c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021
                                            C426.667,76.563,350.104,0,256,0z M256,256c-47.052,0-85.333-38.281-85.333-85.333c0-47.052,38.281-85.333,85.333-85.333
                                            s85.333,38.281,85.333,85.333C341.333,217.719,303.052,256,256,256z"/>
                                    </g>
                                </g>
                                </svg>
                            </span>
                            </button>
                        </div>



                        <div className="what-type-location">
                            <div className="using-not-precise">
                                <p>A usar localização por IP</p>
                            </div>
                            <div className="using-precise">
                                <p>A usar localização precisa</p>
                            </div>
                            <div className="using-search">
                                <p>A usar localização por pesquisa</p>
                            </div>
                        </div>
                </>
            ) : (
                <>

                    <section className="weather-content-container">
                    
                        <div className="units-wrapper">

                        {loading && ( <Loading/> )}
                        {error && ( <Error error={error}/> )}

                        </div>

                    </section>
                    
                </>
            )}

        </main>
    )
}

export default Main
