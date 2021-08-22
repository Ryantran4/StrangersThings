import React, { useState } from 'react'
import { Route, useParams } from 'react-router';

import {Posts,Login,Home,Register,Create} from './';



const Routing = (props) => {
    const {setToken} = props
    const {token} = props
    const params = useParams();
    const [posts,setPosts] = useState([]);
    // const {posts} = props
    // const {setPosts} = props
    return (
        <>
        <Route exact path='/Home'>
            <Home />
        </Route>
        <Route exact path='/Posts'>
            <Create token={token} setPosts={setPosts}/>
            <Posts />
        </Route>
        {/* <Route path='/account/:method'>
            <Login setToken={setToken}/>
        </Route> */}
        <Route exact path='/account/:method'>
            {
            params.method==='login' ? 
            <Login setToken={setToken}/> :
            <Register setToken={setToken} token={token}/> 
            }   
   
        </Route>
        {/* <Route exact path='/Create'>
            <Create  posts={posts} setPosts={setPosts}/>
        </Route> */}
        </>
    )
}

export default Routing;
