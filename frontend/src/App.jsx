import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from '../components/createTodo'
import { DisplayTodo } from '../components/displayTodo'

function App() {
  const [todos, setTodo] = useState([{title:"", description:"", completed: false}]);
  useEffect(()=> {
    setTodo([{title:"go to gym2", description:"workout2", completed: false}]);
    alert("hello");
  }, [])
  return (
    <div>
       <CreateTodo></CreateTodo>
       <DisplayTodo todo={todos}></DisplayTodo>
    </div>
  )
}

export default App
