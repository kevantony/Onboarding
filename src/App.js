import React, { useState, useEffect } from 'react';
import './App.css';
import PostsDisplay from './PostsDisplay';
import PostMaker from './PostMaker';


// airtable configuration
const Airtable = require('airtable');

const airtableConfig = {
  apiKey: process.env.REACT_APP_AIRTABLE_USER_KEY,
  baseKey: process.env.REACT_APP_AIRTABLE_BASE_KEY,
};
const base = new Airtable({ apiKey: airtableConfig.apiKey })
  .base(airtableConfig.baseKey);

function App() {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    base('Posts').select({ view: 'Grid view' }).all()
      .then((records) => {
        setPosts(records);
      });
  };

  useEffect(getPosts, []);
  return (
    <>
    <PostMaker />
    <PostsDisplay posts={posts}/>
    </>
  );
}

export default App;