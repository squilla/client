/* eslint-disable jsx-a11y/alt-text */
// can't do anything about this error either
// alt tag non existant on backend
import React from 'react'

function PostContainer({ post }) {
  const { URL } = post

  return (
    <div id="post-container">
      <img id="post-image" src={URL} />
    </div>
  )
}

export default PostContainer
