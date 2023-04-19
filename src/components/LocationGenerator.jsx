export default function LocationGenerator(props){
    function persistLocation(fkIdWorld){
        const newLocation = {
            fk_id_world: fkIdWorld
        }
    
        fetch("http://localhost/API's/Mine-Locations/postNewLocation.php", {
            method: "POST",
            body: JSON.stringify(newLocation),
            headers: {"Content-type": "application/json; charset=UTF-8"}
          })
          .then(response => response.json()) 
          .then(json => console.log(json));
    }

    return(
        <div className="raw-cell" onClick={() => {
            persistLocation(props.fkIdWorld);
            props.updateLocationsList();
        }}>
            <span>+</span>
        </div>
    )
}



