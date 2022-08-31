import IranMap from "./components/IranMap";
import {useState} from "react";
import map from "./components/map-bg.png"
function App() {
    const [number, setNumber] = useState<number>(1);

    return (
        <div className="App">
            <img style={{position:"fixed"}} src={map} alt={"sd"} />
            <IranMap  num={number} fill={"#1571a2"}/>
            <input style={{position:"absolute",right:"0"}} type={"range"} min={1} max={21} onChange={(e) => setNumber(+e.target.value)}/>
        </div>
    );
}

export default App;
