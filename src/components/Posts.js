import React, { useEffect, useState} from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import { Create } from './'



const Posts = (props) => {
    const [posts, setPosts] = useState([]);
    const post = props;
    // console.log('post :' , post);
    const {token} = props;
    // const {posts} = props
    // const {setPosts} = props
    console.log(token.token);
    //console.log('hi');
    const handleDelete = async (postIdToDelete,token) => {
        console.log('postIdToDelete: ', postIdToDelete);
        console.log(props.token.token);
        // console.log('hi');
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/posts/${postIdToDelete}`, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + props.token.token
            }
            //url: `/posts/${postIdToDelete}`,
            //token:props.token.token
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
            console.log('data: ', data);
            setPosts(data.data.posts)
        }
        fetchPosts();
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
            <button type="button" className="btn-delete"
            onClick={() => handleDelete(post._id)}>Delete</button>
            {/* {
                post.isAuthor && <button onClick={() => handleDelete(post._id)}>Delete</button>
            } */}
        </div>)
        }
        </>
}

export default Posts;