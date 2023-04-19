import { useState } from "react"
import Header from "./components/Header"
import Location from "./components/Location"
import LocationGenerator from "./components/LocationGenerator"

export default function Home() {
  const [selectedWorld, setSelectedWorld] = useState(null);
  const [locationsList, setLocationsList] = useState(null);
 
  function setLocationsListByAPI(fkIdWorld){
    const getLocationsUrlAPI = "http://localhost/API's/Mine-Locations/getLocations.php?fk_id_world=" + fkIdWorld
    fetch(getLocationsUrlAPI)
    .then((res) => res.json())
    .then(setLocationsListByJSON)
  }

  function setLocationsListByJSON(locations){
    setLocationsList(locations.map((location) => 
      <Location 
        key = {location.fk_id_world + " " + location.pk_id_location}
        pkIdLocation = {location.pk_id_location} 
        fkIdWorld = {location.fk_id_world}
        nmLocation = {location.nm_location} 
        xAxis = {location.x_axis} 
        yAxis = {location.y_axis}
        zAxis = {location.z_axis}
        updateLocationsList = {() => setLocationsListByAPI(location.fk_id_world)}
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

