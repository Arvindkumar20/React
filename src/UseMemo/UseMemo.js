import {useMemo, useState} from 'react';
export default function UseMemo() {
    const [count,setCount]=useState(0);
    const [input,setInput]=useState(0);
const handle=()=>{
    setCount(count+1);
}
const handle2=()=>{
    setCount(count-1)
}
const handleInput=(e)=>{
    setInput(parseInt(e.target.value));
}
const expensive=(num)=>{
    for (let index = 0; index <=50000000; index++) {
                
    }
return num*2;
}
const double=useMemo(()=>{ return expensive(input)},[input]) ;
// const double=expensive(input) ;
  return (
    <div>
      <p>{count}</p>
      <button onClick={handle}>+</button>
      <input type="Number" placeholder='number...' value={input} onChange={handleInput}/>
      <button onClick={handle2}>-</button>
      <p>{double}:{input}</p>
    </div>
  )
}
