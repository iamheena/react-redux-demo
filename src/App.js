import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { increament, decreament } from './actions/index'


function App() {
  const mystate = useSelector((state) => state.changeTheNumber);
  console.log("🚀 ~ file: Counter.jsx ~ line 7 ~ Counter ~ mystate", mystate)
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Increament/Decreament</h1>
      <div className="container">
        <button onClick={() => dispatch(decreament())} className="increament">decreament</button>
        <input type="text" value={mystate} className="inputvalue" />
        <button onClick={() => dispatch(increament())} className="increament">increament</button>
      </div>
    </div>
  )
}

export default App