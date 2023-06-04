import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './weather';

function getCoordinates() {
  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  })
}

async function getCurrentPosition() {
  const position = await getCoordinates();
  return position
}



export default function App() {
  const [lat, setLat] = useState(null); //getCurrentPosition()[0];
  const [long, setLong] = useState(null);
  const [data, setData] = useState(null);

  const testFunction = (position) => {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude)
  }

  useEffect(() => {
    const fetchData = async () => {
      //navigator.geolocation.getCurrentPosition(testFunction);
      var position = await getCurrentPosition()

      var response = await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      var result = await response.json();

      setData(result);
      console.log(result);
    }

    if (lat == null || long == null) {
      fetchData();
    }
  }, [])

  return (
    <div className="App">
      {data && <Weather weatherData={data} />}
    </div>
  );
}