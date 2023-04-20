import { useRef } from "react"

import "../styles/newworldpopup.css"

export default function NewWorldPopup(props){
    const nmWorldDOMRef = useRef(null);
    const cdSeedDOMRef = useRef(null);

    function persistNewWorld(){
        const newWorld = {
            nm_world: nmWorldDOMRef.current.value,
            cd_seed: cdSeedDOMRef.current.value
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
                <label htmlFor="nm-world">Name</label>
                <input type="text" name="nm-world" id="nm-world" ref={nmWorldDOMRef}/>
            </div>

            <div className="input-wrapper">
                <label htmlFor="cd-seed">Seed</label>
                <input type="text" name="cd-seed" id="cd-seed" ref={cdSeedDOMRef}/>
            </div>

            <div className="btn-wrapper">
                <button onClick={() => props.popupActiveController(false)}>Cancel</button>
                <button onClick={() => {
                    persistNewWorld();
                    props.updateWorldsList();
                    props.popupActiveController(false);
                }}>Submit</button>
            </div>
        </div>
    )
}