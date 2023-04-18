import { useRef, useState } from "react";

export default function Location(props){
    const [pkIdLocation, setPkIdLocation] = useState(props.pkIdLocation);

    const fkIdWorldRef = useRef(props.fkIdWorld);
    const nmLocationRef = useRef(null);
    const xAxisRef = useRef(null);
    const yAxisRef = useRef(null);
    const zAxisRef = useRef(null);

    function createNewLocation(){
        //set key with idlocation
        setPkIdLocation(4);
    }

    return(
        (pkIdLocation!=null) ? (
            <div className="location-cell">

            <span>ID {props.pkIdLocation}</span>

            <div className="input-wrapper">
                <label htmlFor="nm-location">Location</label>
                <input type="text" name="nm-location" id="nm-location" defaultValue={props.nmLocation} ref={nmLocationRef}/>
            </div>

            <div className="input-wrapper">
                <label htmlFor="x-axis">X-Axis</label>
                <input type="text" name="x-axis" id="x-axis" defaultValue={props.xAxis} ref={xAxisRef}/>
            </div>

            <div className="input-wrapper">
                <label htmlFor="y-axis">Y-Axis</label>
                <input type="text" name="y-axis" id="y-axis" defaultValue={props.yAxis} ref={yAxisRef}/>
            </div>

            <div className="input-wrapper">
                <label htmlFor="z-axis">Z-Axis</label>
                <input type="text" name="z-axis" id="z-axis" defaultValue={props.zAxis} ref={zAxisRef}/>
            </div>

            <button>
                Delete
            </button>
        </div>
          ) : (
            <div className="raw-cell" onClick={()=>{
                createNewLocation();
                //props.updateList;
            }}>
                <span>+</span>
            </div>
          )
    )
}