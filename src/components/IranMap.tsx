import React, {useState} from 'react';
import {MorphReplace} from "react-svg-morph";
const blogEntries:string[] = []

const Markdown:string[] = []
for (let i = 0; i < 21; i++) {
    blogEntries.push(`iran${i+1}`)
}
blogEntries.map((item:string,index:number)=>{
    Markdown[index] = require(`./maps/${item}.svg`)
})


function IranMap() {
    const [num, setNum] = useState<number>(0);
    return (
        <div style={{
            height:"100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center"
        }} >
            <input style={{width:"80%"}} type={"range"} onChange={(e)=>setNum(+e.target.value)} min="0" max="20"/>
            <MorphReplace rotation={"none"} width={300} height={300}>
            <img src={Markdown[num]} alt={num+""} />
            </MorphReplace>
        </div>
    );
}

export default IranMap;