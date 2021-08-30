import React, { useState } from 'react';
import { callApi } from '../CallApi';

const Create = ({setPosts,token}) => {
    const [title,setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price,setPrice] = useState('');

    const handleAdd = async (event) => {
        event.preventDefault();
        console.log({title, description});

        const postResp = await callApi({
            url: '/posts',
            method: 'POST',
            token:token.token,
            body: {
                post: {
                    title:`${title}`,
                    description:`${description}`,
                    price:`${price}`
                }
            }
        });

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