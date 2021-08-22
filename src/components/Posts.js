import React, { useEffect, useState} from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import { Create } from './'

const Posts = (props) => {
    const [posts, setPosts] = useState([]);
    // const {posts} = props
    // const {setPosts} = props

    useEffect(() => {
        const fetchPosts = async () => {
            const resp = await fetch ('https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/posts');
            const data = await resp.json();
            console.log('data: ', data);
            setPosts(data.data.posts)



        }
        fetchPosts();
    }, [])

    return <>
        <h1>
            Posts
        </h1>
        <Create posts={posts} setPosts={setPosts} />
        {
        posts.map(post=> <div key={post._id}>
            <h3>{post.title}</h3>
            <h4>{post.body}</h4>
            <h5>{post.price}</h5>
        </div>)
        }
        </>
}

export default Posts;