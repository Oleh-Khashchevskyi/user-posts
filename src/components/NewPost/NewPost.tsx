import React, { useState } from 'react';

type Props = {
  addPost: (title: string, message: string) => void,
};

export const NewPost: React.FC<Props> = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  return (
    <article className="media">
      <div className="media-content">
        <div className="field">
          <p className="control">
            <input
              className="input"
              type="text"
              placeholder="Your Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <textarea
              style={{ resize: 'none' }}
              className="textarea"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </p>
        </div>
        <nav className="level">
          <div className="level-left">
            <div className="level-item">
              <button
                type="button"
                className="button is-info"
                onClick={() => {
                  addPost(title, message);
                }}
              >
                Add Post
              </button>
            </div>
          </div>
        </nav>
      </div>
    </article>
  );
};
