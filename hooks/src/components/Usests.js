import React, { useState } from 'react';

function Usests() {
    const [count, setCount] = useState(0);
    const [obj, setObj] = useState({msg:"hello"});
  return (
    <div>
        <h1>current count {count}</h1>
        <button onClick={() => setCount(count+1)}>+1</button>
        <h2>{obj.msg}</h2>
    </div>
  )
}

export default Usests