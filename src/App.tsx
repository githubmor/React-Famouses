import React, { useState} from 'react';
import { MorphReplace } from 'react-svg-morph';
const Markdown:Element[] = []
for (let i = 1; i <= 21; i++) {
    Markdown[i] = require(`./components/maps/iran${i}`).default
}
function App() {
    const [check, setCheck] = useState<number>(1);
    const Iran = require(`./components/maps/iran${check}`).default
    return (
        <div className="App">
            {/*<MorphReplace duration={3000} rotation={"none"} width={300} height={300}>*/}
                <Iran  key={check}/>
            {/*</MorphReplace>*/}
            <p>{`check is ${check}`}</p>
            <input type={"range"} min={1} max={21} onChange={(e)=>setCheck(+e.target.value)} />
        </div>
    );
}

export default App;
