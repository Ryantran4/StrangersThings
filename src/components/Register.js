import React, {useState} from 'react';
import { useParams, useHistory } from 'react-router';

/* Notes
Would like to usehISTORY and push from register to login page, then login to home
*/

import { callApi } from '../CallApi';

const { REACT_APP_BASE_URL } = process.env;

const Register = ({setToken,token}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const params = useParams();
    const history = useHistory();
    console.log('params: ', params);


    return<>
        <h1>{params.method}</h1>
        <form onSubmit={async (event) => {
            event.preventDefault();
            // Sending fetch request, retrieving token
            const fetchUrl = `${REACT_APP_BASE_URL}users/${params.method}`
            console.log('fetchUrl: ', fetchUrl);

            const resp = await fetch(fetchUrl,{
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
                // const loginResp = await callApi({
                //     url: `/users/${params.method}`,
                //     method: 'POST',
                //     body: {
                //         user: {
                //             username,
                //             password
                //         }
                //     }
                // })
        const respObj = await resp.json();
        console.log('respOBJ: ' ,respObj);
        if(respObj.data) {
            setToken(respObj.data.token);
            if (respObj.data.token) {
              history.push('/Home');
            }
        }
        //         if(loginResp.data) {
        //             const userResp = await callApi({url: '/users/me', token: loginResp.data.token});
        //             setToken(loginResp.data.token);
        //             setUsername(loginResp.data.user);
        //             if (loginResp.data.guest) {
        //                 history.push('/src/components/Home.js')
        //             }
        //         }
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

export default Register;