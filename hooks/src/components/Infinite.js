import React, { useEffect, useState } from 'react'

function Infinite() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("useEffect");
        document.title = `Button clicked ${count} times`
        // setCount(100); it is not run a infinite loop bcz 100 is store in stack no tin heap
        let num = Math.random() * 100;
        setCount(num);
    })
    console.log("render");
  return (

    <div>
        <h1>current count{count}</h1>
        <button onClick={() => setCount(count+1)}>+1</button>
    </div>
  )
}

export default Infinite