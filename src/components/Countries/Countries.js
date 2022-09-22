import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
  
    useEffect( () => {
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
    }, [])
    return (
      <div>
        <h1>Visiting All Coutries</h1>
        {
            countries.map(country => console.log(country))
        }
        {
            countries.map(country => <Country
                country={country}
                ></Country>)
        }
      </div>
    )
  }

export default Countries;