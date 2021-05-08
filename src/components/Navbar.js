import { useState, useEffect } from "react"


const Navbar = ({ error, setError, loading, setLoading, location, setLocation, data, setData, typeSearch, setTypeSearch}) => {

    const [ search, setSearch ] = useState('');


    const getWeather = () => {

        setLoading(true);
        setError(null);
        setData(null);

        const weatherLocation = encodeURIComponent(search);

        if(search !== ''){
            fetch(`/api/search/${weatherLocation}`)
            .then(res => res.json())
            .then(data => {

                if(data.error){
                    setData(null);
                    setLoading(false);
                    setError(data.error)
                    console.log(data.error)
                } else {
                    setLoading(false);
                    setError(null);
                    console.log(data)
                    setData(data);
                    setTypeSearch('manual');
                    setLocation(weatherLocation);
                }
            })
            .catch(err => {
                setLoading(false);
                setData(null);
                setError(500);


            })
        } else{
            // Empty input field
        }
    }



    return (
        <header>
            <section className="top-bar">

                <div className="logo-wrapper">
                    <img src="../images/logo.png" alt=""/>
                </div>

                

                <div className="search-bar-wrapper">
                    <div className="search-bar">
                        <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
                        <button type="submit" onClick={() => getWeather()}>
                            <i className="gg-search"></i>
                        </button>
                    </div>
                </div>

            </section>
        </header>
    )
}

export default Navbar
