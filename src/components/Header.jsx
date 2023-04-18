import { useEffect, useState, useRef } from 'react';
import NewWorldPopup from './NewWorldPopup';

import '../styles/header.css';

export default function Header(props){
    const [worldsList, setWorldsList] = useState(null);
    const [isPopupActive, setPopupActive] = useState(false);

    useEffect(() => {
        let worldsJSON = getWorlds();
        setWorldsListByJSON(worldsJSON);
    }, []);
    
    //Functions
    async function getWorlds(){
        const getWorldsUrlAPI = "http://localhost/API's/Mine-Locations/getWorlds.php";

        return await fetch(getWorldsUrlAPI).then((res) => res.json());
    }

    function setWorldsListByJSON(worlds){
        setWorldsList(worlds.map(world =>
            <option key={world.pk_id_world} value={world.pk_id_world}>{world.nm_world}</option>
        ))
    }

    return(
        <header>
            <select name="worldsSelector" id="worlds-selector" onChange={props.onChangeWorld}>
                {worldsList}
            </select>
            <button onClick={()=> setPopupActive(true)}>
                New world!
            </button>

            {isPopupActive && <NewWorldPopup popupActiveController={setPopupActive} updateWorldList={() => {
                let worldsJSON = getWorlds();
                setWorldsListByJSON(worldsJSON);
            }}/>}
        </header>
    )
}