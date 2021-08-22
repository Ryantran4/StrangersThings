import React, {useState} from 'react';
import { useParams, useHistory } from 'react-router';

const { REACT_APP_BASE_URL } = process.env;

const Login = ({setToken,token}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const params = useParams();
    const history = useHistory;
    console.log('params: ', params);


    return<>
        <h1>{params.method}</h1>
        <form onSubmit={async (event) => {
            event.preventDefault();
            // Sending fetch request, retrieving token
            const fetchUrl = `${REACT_APP_BASE_URL}/user/${params.method}`
            console.log('fetchUrl: ', fetchUrl);

            // const query = `${REACT_APP_BASE_URL}/user/${params.method}`;xs


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
        console.log('respOBJ: ' ,respObj);
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