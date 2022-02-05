import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { fetchPosts } from '../../api/posts';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Post } from '../../types/Post';
import { Loader } from '../Loader/Loader';
import { NewPost } from '../NewPost/NewPost';
import { PostItem } from '../PostItem/PostItem';

import classes from './PostList.module.scss';

export const PostList:React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const selectedUser = useParams().userId || 0;
  const { posts, loading, error } = useTypedSelector(state => state.postReducer);

  let localPosts: Post[] = [];

  if (localStorage.getItem('posts')) {
    localPosts = JSON.parse(localStorage.getItem('posts') || '');
  }

  const userPosts = posts.concat(localPosts)
    .filter((post: Post) => String(post.userId) === selectedUser);

  const visiblePosts = userPosts.filter((post: Post) => (
    post.title.toLowerCase().includes(query.toLowerCase())
    || post.body.toLowerCase().includes(query.toLowerCase())
  ));

  const addPost = (title: string, message: string) => {
    if (!title || !message) {
      return;
    }

    const user = {
      id: uuidv4(),
      userId: selectedUser,
      title,
      body: message,
    };

    localStorage.setItem('posts', JSON.stringify([
      ...localPosts,
      user,
    ]));

    dispatch(fetchPosts());
  };

  const removePost = (postId: Post['id']) => {
    localStorage.setItem('posts', JSON.stringify([
      ...localPosts.filter(post => post.id !== postId),
    ]));

    dispatch(fetchPosts());
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h2 className="title">{error}</h2>;
  }

  return (
    <div className={classes.posts}>
      <div className={classes.header}>
        <h2 className={classes.title}>Post List</h2>
        <input
          className="input"
          type="text"
          placeholder="Search.."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      {visiblePosts.map((post: Post) => (
        <PostItem key={post.id} post={post} removePost={removePost} />
      ))}
      <NewPost addPost={addPost} />
    </div>
  );
});
