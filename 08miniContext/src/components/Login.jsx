import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext';


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const{setUser} = useContext(UserContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username,password})

    }
    return (
        <>
            <h2>Login Page</h2>
            <input type="text" 
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='name'
            />
            <input type="password" placeholder='password'/>
            <br/>
            <button onClick ={handleSubmit}>Login</button>

        </>
        
    )
}

export default Login
