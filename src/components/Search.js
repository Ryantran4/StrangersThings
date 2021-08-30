import React from 'react';
import { useState } from 'react';

const Search = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
      
      const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
      const postsToDisplay = searchTerm.length ? filteredPosts : posts;
      const filterPost = () => {
          console.log(searchTerm);
      
      

      return <>
      <form onSubmit={filterPost}>
        <input type ="text" placeholder="Type Here" value={searchTerm} onChange=
        {(ev) => setSearchTerm(ev.target.value)}></input>
        
        </form>
        </>
   
      }
    }
export default Search;