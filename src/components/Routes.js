import React, { useState } from 'react'
import { Route, useParams } from 'react-router';

import {Posts,Login,Home,Register,Create,Messages} from './';



const Routing = (props) => {
    const {setToken} = props
    const token = props
    const params = useParams();
    const [posts,setPosts] = useState([]);
    //console.log(token);
    //console.log('hi');
    return (
        <>
        <Route exact path='/Home'>
            <Home />
        </Route>
        <Route exact path='/Posts'>
            {/* <Create posts={posts} setPosts={setPosts} token={token} /> */}
            <Posts token={token}/>
        </Route>
        {/* <Route path='/account/:method'>
            <Login setToken={setToken}/>
        </Route> */}
        <Route exact path='/account/:method'>
            {
            params.method==='login' ? 
            <Login setToken={setToken} /> :
            <Register setToken={setToken} token={token}/> 
            }   
   
        </Route>
        <Route exact path='/Profile'>
            <Messages token={token}/>
        </Route>
        </>
    )
}

export default Routing;
