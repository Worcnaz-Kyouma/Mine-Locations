export default function LocationGenerator(props){
    function persistLocation(fkIdWorld){
        const newLocation = {
            fkIdWorld: fkIdWorld
        }
    
        return fetch("http://localhost:6969/locations", {
            method: "POST",
            body: JSON.stringify(newLocation),
            headers: {"Content-type": "application/json; charset=UTF-8"}
          })
    }

    return(
        <div className="raw-cell" onClick={async() => {
            await persistLocation(props.fkIdWorld);
            props.updateLocationsList();
        }}>
            <span>+</span>
        </div>
    )
}



