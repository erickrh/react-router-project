import React from 'react';
import { blogdata } from './blogdata';

function usePosts() {
  const [blogDataContent, setBlogDataContent] = React.useState(blogdata);
  const [editing, setEditing] = React.useState(false);

  const deletePost = slug => {
    const indexPost = blogDataContent.findIndex(post => post.slug === slug);
    const newListPost = [...blogDataContent];
    newListPost.splice(indexPost, 1);
    setBlogDataContent(newListPost);
  };

  const editPost = () => {
    setEditing(true);
    document.getElementById('msg').innerHTML = 'The post is now editable. Try to edit it.';
    document.querySelector('.postContent').focus();
  };

  const savePost = slug => {
    document.getElementById('msg').innerHTML = '';
    setEditing(false);
    
    const newListPost = [...blogDataContent];
    const indexPost = blogDataContent.findIndex(post => post.slug === slug);
    newListPost[indexPost] = {
      title: document.querySelector('.postTitle')?.innerText,
      slug: document.querySelector('.postTitle')?.innerText.replace(/[\s?]+/g, '-').toLowerCase(),
      content: document.querySelector('.postContent')?.innerText,
      author: document.querySelector('.postAuthor')?.innerText,
    };
    setBlogDataContent(newListPost);
  };

  return {
    editing,
    blogDataContent,
    setBlogDataContent,
    deletePost,
    editPost,
    savePost,
  };
}

export { usePosts };