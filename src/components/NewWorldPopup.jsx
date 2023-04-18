import { useRef } from "react"

import "../styles/newworldpopup.css"

export default function NewWorldPopup(props){
    const nmWorldRef = useRef(null);
    const cdSeedRef = useRef(null);

    function persistNewWorld(){
        const newWorld = {
            nm_world: nmWorldRef.current.value,
            cd_seed: cdSeedRef.current.value
        }

        fetch("http://localhost/API's/Mine-Locations/postNewWorld.php", {
            method: "POST",
            body: JSON.stringify(newWorld),
            headers: {"Content-type": "application/json; charset=UTF-8"}
          })
          .then(response => response.json()) 
          .then(json => console.log(json));
    }

    return(
        <div className="popup">
            <h1>New World</h1>

            <div className="input-wrapper">
                <label htmlFor="nm_world">Name</label>
                <input type="text" name="nm_world" id="nm_world" ref={nmWorldRef}/>
            </div>

            <div className="input-wrapper">
                <label htmlFor="cd_seed">Seed</label>
                <input type="text" name="cd_seed" id="cd_seed" ref={cdSeedRef}/>
            </div>

            <div className="btn-wrapper">
                <button onClick={() => props.popupActiveController(false)}>Cancel</button>
                <button onClick={() => {
                    persistNewWorld();
                    props.updateWorldList();
                    props.popupActiveController(false);
                }}>Submit</button>
            </div>
        </div>
    )
}