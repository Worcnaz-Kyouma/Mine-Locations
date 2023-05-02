import { useRef, useState } from "react";

import "../styles/cell.css"

export default function Location(props){
    const nmLocationDOMRef = useRef(null);
    const xAxisDOMRef = useRef(null);
    const yAxisDOMRef = useRef(null);
    const zAxisDOMRef = useRef(null);

    var updateTimeout;

    function updateLocation(){
        //Melhorar esta função para diminuir numero de requisições
        const updatedLocation = { 
            pkIdLocation: props.pkIdLocation,
            fkIdWorld: props.fkIdWorld,
            nmLocation: nmLocationDOMRef.current.value,
            xAxis: xAxisDOMRef.current.value,
            yAxis: yAxisDOMRef.current.value,
            zAxis: zAxisDOMRef.current.value
        }

        clearTimeout(updateTimeout);
        updateTimeout = setTimeout(() => {
            fetch("http://localhost:6969/locations", {
                method: "PUT",
                body: JSON.stringify(updatedLocation),
                headers: {"Content-type": "application/json; charset=UTF-8"}
              })
        }, 5000);
    }

    function deleteLocation(pkIdLocation){
        return fetch("http://localhost:6969/locations/" + pkIdLocation, {
            method: "DELETE"
          })
    }

    return(
        <div className="location-cell">

        <span>ID {props.pkIdLocation}</span>

        <div className="input-wrapper">
            <label htmlFor="nm-location">Location</label>
            <input type="text" name="nm-location" id="nm-location" defaultValue={props.nmLocation} ref={nmLocationDOMRef} onChange={updateLocation}/>
        </div>

        <div className="input-wrapper">
            <label htmlFor="x-axis">X-Axis</label>
            <input type="text" name="x-axis" id="x-axis" defaultValue={props.xAxis} ref={xAxisDOMRef} onChange={updateLocation}/>
        </div>

        <div className="input-wrapper">
            <label htmlFor="y-axis">Y-Axis</label>
            <input type="text" name="y-axis" id="y-axis" defaultValue={props.yAxis} ref={yAxisDOMRef} onChange={updateLocation}/>
        </div>

        <div className="input-wrapper">
            <label htmlFor="z-axis">Z-Axis</label>
            <input type="text" name="z-axis" id="z-axis" defaultValue={props.zAxis} ref={zAxisDOMRef} onChange={updateLocation}/>
        </div>

        <button onClick={() => {
            deleteLocation(props.pkIdLocation);
            setTimeout(props.updateLocationsList, 80);
        }}>
            Delete
        </button>
    </div>
    )
}