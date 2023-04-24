import { useState } from "react"
import Header from "./components/Header"
import Location from "./components/Location"
import LocationGenerator from "./components/LocationGenerator"

export default function Home() {
  const [selectedWorld, setSelectedWorld] = useState(null);
  const [locationsList, setLocationsList] = useState(null);
 
  function setLocationsListByAPI(fkIdWorld){
    const getLocationsUrlAPI = "http://localhost:6969/locations/" + fkIdWorld
    fetch(getLocationsUrlAPI)
    .then((res) => res.json())
    .then(setLocationsListByJSON)
  }

  function setLocationsListByJSON(locations){
    setLocationsList(locations.map((location) => 
      <Location 
        key = {location.fkIdWorld + " " + location.pkIdLocation}
        pkIdLocation = {location.pkIdLocation} 
        fkIdWorld = {location.fkIdWorld}
        nmLocation = {location.nmLocation} 
        xAxis = {location.xAxis} 
        yAxis = {location.yAxis}
        zAxis = {location.zAxis}
        updateLocationsList = {() => setLocationsListByAPI(location.fkIdWorld)}
      />
    ));
  }


  return (
    <div>
      <Header onChangeWorld={(event) => {
        setSelectedWorld(event.target.value);
        setLocationsListByAPI(event.target.value);
      }}/>
      {locationsList}
      
      {selectedWorld!=null && 
        <LocationGenerator fkIdWorld={selectedWorld} updateLocationsList={() => setLocationsListByAPI(selectedWorld)} />
      }
    </div>
  )
}

