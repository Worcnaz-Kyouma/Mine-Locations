import { useRef, useState } from "react";

import "../styles/cell.css"

export default function Location(props){
    const nmLocationDOMRef = useRef(null);
    const xAxisDOMRef = useRef(null);
    const yAxisDOMRef = useRef(null);
    const zAxisDOMRef = useRef(null);

    function updateLocation(){
        //Melhorar esta função para diminuir numero de requisições
        const updatedLocation = { 
            pk_id_location: props.pkIdLocation,
            fk_id_world: props.fkIdWorld,
            nm_location: nmLocationDOMRef.current.value,
            x_axis: xAxisDOMRef.current.value,
            y_axis: yAxisDOMRef.current.value,
            z_axis: zAxisDOMRef.current.value
        }

        fetch("http://localhost/API's/Mine-Locations/updateLocation.php", {
            method: "PUT",
            body: JSON.stringify(updatedLocation),
            headers: {"Content-type": "application/json; charset=UTF-8"}
          })
          .then(res => res.json())
          .then(location => console.log(location));
    }

    function deleteLocation(){
        fetch("http://localhost/API's/Mine-Locations/deleteLocation.php?pk_id_location=" + props.pkIdLocation, {
            method: "DELETE"
          })
          .then(response => response.json()) 
          .then(json => console.log(json));
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
            deleteLocation();
            props.updateLocationsList();
        }}>
            Delete
        </button>
    </div>
    )
}