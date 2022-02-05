import React from 'react';
import { Post } from '../../types/Post';

import classes from './PostItem.module.scss';

type Props = {
  post: Post,
  removePost: (postId: Post['id']) => void,
};

export const PostItem:React.FC<Props> = ({ post, removePost }) => {
  return (
    <article className="media">
      <div className="media-content">
        <div className="content">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <p className={classes.icon}>
              <i className="fas fa-heart" />
            </p>
            <p className={classes.icon}>
              <i className="fas fa-reply" />
            </p>
          </div>
        </nav>
      </div>
      <div className="media-right">
        <button type="button" className="delete" onClick={() => removePost(post.id)}> </button>
      </div>
    </article>
  );
};
