import { useState } from 'react'
import MyCalender from './components/Calender'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MyCalender/>
      
    </div>
  )
}

export default App
