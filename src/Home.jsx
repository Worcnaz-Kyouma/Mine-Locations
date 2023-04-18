import { useEffect, useState } from "react"
import Header from "./components/Header"
import Location from "./components/Location"

export default function Home() {
  const [locationsList, setLocationsList] = useState(null);
  const [chosendWorld, setChosendWorld] = useState(null);

  useEffect(() => {
    let locationsJSON = getLocations(chosendWorld);
    setLocationsListByJSON(locationsJSON);
  },[chosendWorld]);

  //Functions
  async function getLocations(fkIdWorld){
    const getLocationsUrlAPI = "http://localhost/API's/Mine-Locations/getLocations.php?fk_id_world=" + fkIdWorld;
    return await fetch(getLocationsUrlAPI).then((res) => res.json());
  }

  function setLocationsListByJSON(locations){
    setLocationsList([locations.map(location =>
        <Location pkIdLocation={location.pk_id_location} fkIdWorld={location.fk_id_world} nmLocation={location.nm_location} xAxis={location.x_Axis} yAxis={location.y_Axis} zAxis={location.z_Axis}/>
    ), <Location />])
  }

  return (
    <div>
      <Header onChangeWorld={(event) => setChosendWorld(event.target.value)}/>
      <div className="locations-wrapper">
        {locationsList}
      </div>
    </div>
  )
}

