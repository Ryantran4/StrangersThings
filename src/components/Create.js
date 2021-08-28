import React, { useState } from 'react';
import { callApi } from '../CallApi';

const Create = ({setPosts,token}) => {
    const [title,setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price,setPrice] = useState('');
    // const {token} = props;
    // const [posts, setPosts] = useState([]);
    // console.log({token})


    const handleAdd = async (event) => {
        event.preventDefault();
        console.log({title, description});

        const postResp = await callApi({
            url: '/posts',
            method: 'POST',
            // headers: {
            //     'Content-Type': 'application/json',
            //     'Authorization': 'Bearer TOKEN_STRING_HERE'
            // }
            token:token.token,
            body: {
                post: {
                    title:`${title}`,
                    description:`${description}`,
                    price:`${price}`
                }
            }
        });

        console.log('postResp: ', postResp);
        //adding data
        // const postsResp = await callApi({url: '/posts', token});
        // setPosts(postsResp.data.posts)
    }

    return <>
    <h3>
        List Item
    </h3>
    <form onSubmit={handleAdd}>
        <input type ="text" placeholder="title" value={title} onChange=
        {(ev) => setTitle(ev.target.value)}></input>
        <input type="text" placeholder="description" value=
        {description} onChange={(ev) => setDescription(ev.target.value)}></input>
        <input type="text" placeholder="price" value=
        {price} onChange={(ev) => setPrice(ev.target.value)}></input>
        <button type="submit">Add Listing</button>
        </form>
        </>


}






export default Create;