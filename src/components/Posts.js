import React, { useEffect, useReducer, useState} from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import { Create,Search } from './';



const Posts = (props) => {
    const [posts, setPosts] = useState([]);
    const post = props;
    const {token} = props;
    const handleDelete = async (postIdToDelete,token) => {

        const response = await fetch(`https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/posts/${postIdToDelete}`, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + props.token.token
            }
            }
        );
        const data = await response.json();
        console.log('data: ', data);
        if (data) {
            const newPosts = posts.filter(post => post._id !==
                postIdToDelete);
                setPosts(newPosts);
        }
    }


    useEffect(() => {
        const fetchPosts = async () => {
            const resp = await fetch ('https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/posts');
            const data = await resp.json();
            setPosts(data.data.posts)
        }
        const fetchPosts2 = async () => {
            const resp = await fetch ('https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/posts',
            {
                headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + props.token.token
                }
            });
            const data = await resp.json();
            setPosts(data.data.posts)
        }
        if (props.token.token.length < 3){fetchPosts()}
            else{(fetchPosts2())};
    }, [])



    return <>
        <h1>
            Posts
        </h1>
        <Create posts={posts} setPosts={setPosts} token={token} />

        {
        posts.map(post=> <div key={post._id}>
            <h3>{post.title}</h3>
            <h4>{post.description}</h4>
            <h5>{post.price}</h5>
            {
                post.isAuthor ? <button onClick={() => handleDelete(post._id)}>Delete</button> : null
            }
        </div>)
        }
        </>
}

export default Posts;