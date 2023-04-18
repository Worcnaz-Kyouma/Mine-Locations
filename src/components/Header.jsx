import { useEffect, useState, useRef } from 'react';
import NewWorldPopup from './NewWorldPopup';

import '../styles/header.css';

export default function Header(props){
    const [worldsList, setWorldsList] = useState(null);
    const [isPopupActive, setPopupActive] = useState(false);

    useEffect(setWorldsListByAPI, []);
    
    //Functions
    function setWorldsListByAPI(){
        const getWorldsUrlAPI = "http://localhost/API's/Mine-Locations/getWorlds.php"
        fetch(getWorldsUrlAPI)
        .then((res) => res.json())
        .then((worlds) => setWorldsList(worlds.map(world =>
            <option key={world.pk_id_world} value={world.pk_id_world}>{world.nm_world}</option>
        )))
    }

    return(
        <header>
            <select name="worldsSelector" id="worlds-selector" onChange={props.onChangeWorld}>
                {worldsList}
            </select>
            <button onClick={()=> setPopupActive(true)}>
                New world!
            </button>

            {isPopupActive && <NewWorldPopup popupActiveController={setPopupActive} updateWorldList={setWorldsListByAPI}/>}
        </header>
    )
}