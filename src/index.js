import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//Global URL
const { REACT_APP_BASE_URL } = process.env;
const baseURL = REACT_APP_BASE_URL;


import {
    Title,
    Routing
} from './components';

const App = () => {
    const [token,setToken] = useState('');
    console.log('token: ' , token);
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState('');


    return (
        <BrowserRouter>
            <div className="app">
                {<Title />}
                {<Routing setToken={setToken} token={token}/>}   
            </div>
        </BrowserRouter>
    )
}


ReactDOM.render(
    <App />,
    document.querySelector('#app')
  );