import React, {useState} from 'react';
import { useParams, useHistory } from 'react-router';

const { REACT_APP_BASE_URL } = process.env;

const Login = ({setToken,token,props}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const params = useParams();
    const history = useHistory;
    console.log('params: ', params);
    console.log('setUser : ', setUser);


    return<>
        <h1>{params.method}</h1>
        <form onSubmit={async (event) => {
            event.preventDefault();
            const fetchUrl = `${REACT_APP_BASE_URL}/user/${params.method}`


            const resp = await fetch(`${REACT_APP_BASE_URL}/user/${params.method}`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
             user: {
                username,
                password,
                }
            })
        });
        const respObj = await resp.json();
        if(respObj.data) {
            setToken(respObj.data.token);
            if (respObj.data.token) {
              history.push('/Home');
            }
        }

        }}>
            <input type="text" placeholder="username" value={username}
            onChange={(event)=> setUsername(event.target.value)}></input>
            <hr></hr>
            <input type="password" placeholder="password" value={password}
            onChange={(event)=> setPassword(event.target.value)}></input>
            <hr></hr>
            {
                params.method === 'Register' ? <div>Register Input</div> : ''
            }

            <button type="submit">Submit</button>

        </form>
    </>
}

export default Login;