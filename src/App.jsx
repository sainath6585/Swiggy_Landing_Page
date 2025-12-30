import { useState } from 'react'
import { Swiggyfile } from './Swiggyfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Swiggyfile/>
    </>
  )
}

export default App
