import { useState } from 'react'

export default function ItemCount ({initial=9, stock}) {
    const [count, setCount] = useState(initial)

    const increment = () => {
      if (count < stock){
        setCount (prev => {prev+1})
      }
    }

    const decrement = () => {
      if (count > initial){
        setCount (prev => {prev-1})
      }
    }
    return (
      <>
        <button onClick={increment}> + </button>s
  
        <h2>{contador}</h2>
  
        <button onClick={decrement}> - </button>
      </>
    );
  };
  
  