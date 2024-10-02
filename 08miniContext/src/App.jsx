
import './App.css'
import UserContextProvider from './context/UserContextProvider.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <Login/>
     <h1>Hi Harsh</h1>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
