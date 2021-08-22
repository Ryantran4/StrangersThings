import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//Global URL
const { REACT_APP_BASE_URL } = process.env;
const baseURL = REACT_APP_BASE_URL;



//Pass token in at the highest level
// login needs setToken but not the token

// Figure out why I cant import, Im thnking its because the links should be rendered in another file
import {
    Title,
    Routing
} from './components';

const App = () => {
    const [token,setToken] = useState('');
    console.log('token: ' , token);
    const [posts, setPosts] = useState([]);
    return (
        <BrowserRouter>
            <div className="app">
                {<Title />}
                {<Routing setToken={setToken}token={token}/>}   
            </div>
        </BrowserRouter>
    )
}


ReactDOM.render(
    <App />,
    document.querySelector('#app')
  );