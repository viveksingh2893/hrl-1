import { useLocation } from "react-router-dom";

const Gallery=()=>{
    let location=useLocation()
    return (
        <div>
            <h1>{location.state}</h1>
        </div>
    )
}

export default Gallery;