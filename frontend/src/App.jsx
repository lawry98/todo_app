import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from '../components/createTodo'
import { DisplayTodo } from '../components/displayTodo'

function App() {
  const [todos, setTodo] = useState([]);
  useEffect(()=> {
    //setTodo([{title:"go to gym", description:"workout", completed: false}]);
  }, [])
  return (
    <div>
       <CreateTodo></CreateTodo>
       <DisplayTodo todo={[{title:"go to gym", description:"workout", completed: false}]}></DisplayTodo>
    </div>
  )
}

export default App
