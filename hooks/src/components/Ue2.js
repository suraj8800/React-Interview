import React, { useEffect, useState } from 'react'

function Ue2() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("useEffect");
        document.title = `Button clicked ${count} times`
    },[])
    console.log("render");
  return (

    <div>
        <h1>current count{count}</h1>
        <button onClick={() => setCount(count+1)}>+1</button>
    </div>
  )
}

export default Ue2