import { default_config } from 'airtable';
import React, { useState, useEffect } from 'react';
import Post from './Post';

// airtable configuration
const Airtable = require('airtable');

const airtableConfig = {
  apiKey: process.env.REACT_APP_AIRTABLE_USER_KEY,
  baseKey: process.env.REACT_APP_AIRTABLE_BASE_KEY,
};

const base = new Airtable({ apiKey: airtableConfig.apiKey })
  .base(airtableConfig.baseKey);

  function PostMaker() {

    function handleSubmit(event) {
        const author = event.target.elements.author.value;
        const body = event.target.elements.body.value;
        base('Posts').create([
            {
              "fields": {
                "Body": body,
                "Author": author
              }
            }
          ]
          );

          
    }



    return  (
        <form onSubmit={handleSubmit}>
        <div>
            <label>Author</label>
            <input type="text" id="author" />
        </div>
        <div>    
            <label>Body</label>
            <input type="text" id="body" />
        </div>
            <button type="submit">Create Post</button>
      </form>
    );
  }


export default PostMaker;