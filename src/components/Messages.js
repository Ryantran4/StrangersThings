import React, { useState, useEffect } from "react"

const baseURL = "https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT";


const Messages = ({token}) => {
  const [messages,setMessages] = useState([]);
  console.log('token:',token.token);

  useEffect(async () => {
    const data = await fetch('https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/users/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token.token}`
            }
        })
        const messageData = await data.json();
        setMessages(messageData.data.messages);
    },[])


return (
  <div className="content">
    <h1>Profile</h1>
    {
    messages.map((message) => {
      
      return (
        <div className="msg">
          <br />
          <h3>Message:{message.fromUser.username}</h3>
          
          <h3>{message.content}</h3>
          
          <br />
          <span>{message.post.title}</span>
        </div>
      )
    })}
  </div>
);
};

export default Messages;