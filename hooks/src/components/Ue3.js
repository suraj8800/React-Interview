import React, { useEffect, useState } from 'react'

function Ue3() {
    const [count, setCount] = useState(0);
    const [txt, setTxt] = useState("");
    useEffect(() => {
        console.log("useEffect");
        document.title = `Button clicked ${count} times`
    },[count])
    console.log("render");
  return (

    <div>
        <h1>current count{count}</h1>
        <button onClick={() => setCount(count+1)}>+1</button>
        <input type="text" value={txt} onChange={(e) => setTxt(e.target.value)}/>
    </div>
  )
}

export default Ue3