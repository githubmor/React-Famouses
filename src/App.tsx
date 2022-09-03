import IranMap from "./components/IranMap";
import { useState } from "react";
import map from "./components/map-bg.png";
function App() {
  const [number, setNumber] = useState<number>(1);

  // useEffect(() => {
  //   const onScroll = () => setNumber(window.pageYOffset);
  //   // clean up code
  //   window.removeEventListener("scroll", onScroll);
  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  // console.log(number);

  return (
    <div className="App">
      <img style={{ position: "fixed" }} src={map} alt={"sd"} />
      <IranMap num={number} fill={"#1571a2"} />
      <input
        style={{
          WebkitAppearance: "slider-vertical",
          width: "20px",
          height: "95%",
          position: "absolute",
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
