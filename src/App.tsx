import IranMap from "./components/IranMap";
import {useState} from "react";

function App() {
    const [number, setNumber] = useState<number>(1);

    return (
        <div className="App">
            <IranMap num={number} fill={"#1571a2"}/>
            <input type={"range"} min={1} max={21} onChange={(e) => setNumber(+e.target.value)}/>
        </div>
    );
}

export default App;
