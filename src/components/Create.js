import React, { useState } from 'react';
import { callApi } from '../CallApi';

const Create = ({token,setPosts}) => {
    const [title,setTitle] = useState('');
    const [description, setDescription] = useState('');


    const handleAdd = async (event) => {
        event.preventDefault();
        console.log({title, description});

        const postResp = await callApi({
            url: '/Posts',
            method: 'POST',
            token,
            body: {
                posts: {
                    title,
                    description
                }
            }
        });

        console.log('postResp: ', postResp);
        //adding data
        const postsResp = await callApi({url: '/Posts', token});
        setPosts(postsResp.data.posts)
    }

    return <>
    <h3>
        List Item
    </h3>
    <form onSubmit={handleAdd}>
        <input type ="text" placeholder="description" value={title} onChange=
        {(ev) => setTitle(ev.target.value)}></input>
        <input type="text" placeholder="description" value=
        {description} onChange={(ev) => setDescription(ev.target.value)}></input>
        <button type="submit">Add Listing</button>
        </form>
        </>


}






export default Create;