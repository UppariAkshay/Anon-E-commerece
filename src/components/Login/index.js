import './index.css'
import {useState} from 'react'
import { useNavigate, Navigate } from 'react-router-dom'

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const jwtToken = JSON.parse(localStorage.getItem('jwt_token'))
    const navigate = useNavigate()

    if (jwtToken !== null)
    {
        return <Navigate to='/' />
    }

    const submitLogin = async (e) => {
        e.preventDefault()

        const loginUrl = 'https://fakestoreapi.com/auth/login'
        const options = {
            method: 'POST',
            body: JSON.stringify({
                username: userName,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json' 
            }
        }
        try{
            const response = await fetch(loginUrl, options)
            const jwtToken = await response.json()
            localStorage.setItem('jwt_token', JSON.stringify(jwtToken))
            navigate('/')
        }
        catch (e)
        {
            alert('invalid credentials')
        }
    }
    
    return (
        <div className="loginPageContainerDIV">
            <h1>Login</h1>

            <form onSubmit={(e) => submitLogin(e)} className='loginFORM border border-info rounded p-3'>
                <label className='mt-3' htmlFor='userName'>User Name: </label>
                <input onChange={(e) => setUserName(e.target.value)} id='userName' className="form-control" type="text" placeholder="Enter your name"/>
                <label label className='mt-3' htmlFor='password'>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} id='password' className="form-control" type='password' placeholder="Enter your password" />
                <button type='submit' className="btn btn-primary mt-3">Login</button>
            </form>
        </div>
    )
}

export default Login