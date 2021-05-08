import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



const Map = ({ showMap, setShowMap, data, setData }) => {

    const windowHeight = window.innerHeight;

    useEffect(() => {
        
        const mapContainer = document.querySelector('#mapContainer');
        const mapWrapper = document.querySelector('#mapWrapper');

        const mapHeight = windowHeight * 0.6;

        mapContainer.style.height = `${mapHeight}px`;
        mapWrapper.style.height = `${mapHeight}px`;


    }, [windowHeight])



    const getCoords = () => {

        let lat = data[0].currentWeather.coord.lat;
        let lng = data[0].currentWeather.coord.lon;
        

        const coords = [lat, lng];

        return coords;
    }




    return (
        <section className="map-box">
            
            <div id="mapContainer">

                <div className="close-map">
                    <button onClick={() => setShowMap(false)}>
                    <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                            fill="white"
                        />
                        </svg>
                    </button>
                </div>


                <MapContainer id="mapWrapper" center={getCoords()} zoom={5} scrollWheelZoom={true}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={getCoords()}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>

        </section>
    )
}


export default Map
