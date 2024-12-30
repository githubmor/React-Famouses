import IranMap from "./components/IranMap";
import {useEffect, useState} from "react";
import map from "./components/map-bg.png";

const maxHeight = 3000
const mapBackgroundHeight = 695
const getNumber = (y:number)=>{
    return (y * 21) / (maxHeight-mapBackgroundHeight)
}

function App() {
  const [number, setNumber] = useState<number>(getNumber(window.scrollY));
    useEffect(() => {
        const colorChange = () => {
            setNumber(getNumber(window.scrollY));
        }
        window.addEventListener("scroll", colorChange);
        return () => window.removeEventListener("scroll", colorChange);
    }, []);
  return (
    <div style={{height:`${maxHeight}px`}} className="App">
      <img style={{ position: "fixed" }} src={map} alt={"sd"} />
      <IranMap num={number} fill={"#1571a2"} />
      <input
        style={{
          WebkitAppearance: "slider-vertical",
          width: "20px",
          height: "95%",
          position: "fixed",
          right: "0",
        }}
        value={number}
        type={"range"}
        min={1}
        max={21}
        onChange={(e) => setNumber(+e.target.value)}
      />
    </div>
  );
}

export default App;
