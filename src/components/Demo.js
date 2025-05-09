import React from 'react';
import { useState } from 'react';

const Demo = () => {
    const [text,setText]=useState('input');
    console.log('rendering...')
  return (
    <div>
      <h1>Demo</h1>
      <input className="border border-black"type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
    </div>
  )
}

export default Demo;
