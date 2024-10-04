import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoContext } from './contexts/TodoContext'

function App() {
  const[todos,setTodos] = useState([])
  const addTodo = (todo)=>{
    setTodos([...todos,todo])

  }
  const updatedTodo = (id,todo)=>{
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo:prevTodo)))
  }
  const deleteTodo = (id)=>{
    setTodos((prev) => prev.filter((Todo) => Todo.id !==id))

  }
  const toggleCompleted = (id)=>{
    setTodos((prev) => prev.map((Todo) => Todo.id == id?Todo.completed = (!Todo.completed):Todo.completed))

  }
  useEffect(()=>{
    const todos  = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todo))
  },[todos])

  return (
    <TodoContext.Provider value = {{todos,addTodo,updatedTodo,deleteTodo,toggleCompleted}}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoContext.Provider>
  )
}

export default App
