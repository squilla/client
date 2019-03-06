/* eslint-disable jsx-a11y/alt-text */
// can't do anything about this error either
// alt tag non existant on backend
import React from 'react'
import './PostContainer.css'

function PostContainer({ post }) {
  return (
    <div className="container">
      <div className="wrapper" id="post-container">
        <img id="post-image" src={post} />
      </div>
    </div>
  )
}

export default PostContainer
