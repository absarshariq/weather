import React, { useState, Fragment, useEffect } from "react";
import "./weather.css";
import Image1 from "../images/cloud.png";
import axios from 'axios';
const Weather = () => {
    const [city, setCity] = useState(null);
    const [search, setsearch] = useState("Mumbai");
    useEffect(() => {
        const renderData = async () => {
            // var url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=7641cb5bd4549e9bdf220408a9c417ba`;
            // const responce = await fetch(url);
            // const data = await responce.json();
            // setCity(data.main);
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=7641cb5bd4549e9bdf220408a9c417ba`);
                console.log(response.data.main);
                setCity(response.data.main);
            }
            catch(error){
                console.log("no data fnd");
                setCity(null);
            }
            
        }
        renderData();
    }, [search])
    console.log(city);

    return (<Fragment>
        <div className="box">
            <h1 className="heading">Live Weather App</h1>
            <div className="input">
                <input
                    type="input"
                    onChange={(event) => {
                        setsearch(event.target.value)
                    }} />
            </div>
            {!city ? (
                <p className="notFound">No Data Found</p>
            ) : (

                <div>
                    <div className="information">
                        <h1><i className='fas fa-street-view'></i></h1>
                        <h1>{search}</h1>
                    </div>
                    <div className="temparature">
                        <h2>{city["temp"]}°Cel</h2>
                        <div className="tempDetails">
                            <p>Max : {city["temp_max"]}°Cel | Min : {city["temp_min"]}°Cel</p>
                        </div>

                        <div className="details">
                            <div className="pressure">
                                <i className="fas fa-sun"></i>
                                <p>Pressure: {city["pressure"]}MM</p>
                            </div>
                            <div className="humidity">
                                <i className="fas fa-water"></i>
                                <p>Humidity {city["humidity"]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
            <img src={Image1} alt="" />
        </div>
    </Fragment >)
}
export default Weather;

