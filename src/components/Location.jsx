import { useRef, useState } from "react";

export default function Location(props){
    const [pkIdLocation, setPkIdLocation] = useState(props.pkIdLocation);

    const fkIdWorldRef = useRef(props.fkIdWorld);
    const nmLocationRef = useRef(null);
    const xAxisRef = useRef(null);
    const yAxisRef = useRef(null);
    const zAxisRef = useRef(null);

    function createNewLocation(){
        setPkIdLocation(4);
    }

    return(
        (pkIdLocation!=null) ? (
            <div className="location-cell">

            <span>ID {props.pkIdLocation}</span>

            <div className="input-wrapper">
                <label htmlFor="nm_location">Location</label>
                <input type="text" name="nm_location" id="nm_location" value={props.nmLocation} ref={nmLocationRef}/>
            </div>

            <div className="input-wrapper">
                <label htmlFor="x_axis">X-Axis</label>
                <input type="text" name="x_axis" id="x_axis" value={props.xAxis} ref={xAxisRef}/>
            </div>

            <div className="input-wrapper">
                <label htmlFor="y_axis">Y-Axis</label>
                <input type="text" name="y_axis" id="y_axis" value={props.yAxis} ref={yAxisRef}/>
            </div>

            <div className="input-wrapper">
                <label htmlFor="z_axis">Z-Axis</label>
                <input type="text" name="z_axis" id="z_axis" zAxis={props.zAxis} ref={zAxisRef}/>
            </div>

            <button>
                Delete
            </button>
        </div>
          ) : (
            <div className="raw-cell" onClick={()=>{
                createNewLocation();
                //props.updateLocationList();
            }}>
                <span>+</span>
            </div>
          )
    )
}