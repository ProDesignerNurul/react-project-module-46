import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country)
    const {name, population, flags, area} = props.country;
    return (
        <div>
            <h2>Country Name : {name.common}</h2>
            <h3>Population : {population}</h3>
            <h4>Area : {area}</h4>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;