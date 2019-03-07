/* eslint-disable jsx-a11y/alt-text */

import React from 'react'
import './postcontainer.css'

function PostContainer({ post }) {
  return (
    <div id="post-index-post-container">
      <div id="post-id-post-wrapper">
        <img id="post-image" src={post} />
      </div>
    </div>
  )
}

export default PostContainer
