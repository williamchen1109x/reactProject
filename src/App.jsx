import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(1)

  return (
    <>
      <div>
          <p>Hello Vite + React!{count}</p>
          <button onClick={() => setCount((count) => count +1)}>
              Add Count
          </button>
          <p>
              更改
          </p>
      </div>

    </>
  )
}

export default App
