import { useEffect, useState, useRef } from 'react';
import NewWorldPopup from './NewWorldPopup';

import '../styles/header.css';

export default function Header(props){
    const [worldsList, setWorldsList] = useState(null);
    const [isPopupActive, setPopupActive] = useState(false);

    useEffect(setWorldsListByAPI, []);
    
    //Functions
    function setWorldsListByAPI(){
        const getWorldsUrlAPI = "http://localhost:6969/worlds"
        fetch(getWorldsUrlAPI)
        .then((res) => res.json())
        .then(setWorldsListByJSON)
    }

    function setWorldsListByJSON(worlds){
        setWorldsList(worlds.map(world =>
            <option key={world.pkIdWorld} value={world.pkIdWorld}>{world.nmWorld}</option>
        ))
    }

    return(
        <header>
            <select name="worldsSelector" id="worlds-selector" defaultValue={"blank"} onChange={props.onChangeWorld}>
                <option hidden disabled value="blank"></option>
                {worldsList}
            </select>
            <button onClick={()=> setPopupActive(true)}>
                New world!
            </button>

            {isPopupActive && <NewWorldPopup popupActiveController={setPopupActive} updateWorldsList={setWorldsListByAPI}/>}
        </header>
    )
}