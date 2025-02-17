"use client"
import React, { useState } from 'react'
import Heading from './Heading';

export default function Counter() {

    const [count, setCount] = React.useState(0);
    console.log('count:', count);

    function increment() {
        setCount(count => count + 1);
    }

    function decrement() {
        setCount(count => count - 1);
    }

  return (
    <>
    <Heading>Counter</Heading>
    <div className='flex items-center gap-2'>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
    </div>
    </>
  )
}
