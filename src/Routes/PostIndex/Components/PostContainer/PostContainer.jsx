import React from 'react'

function PostContainer({ post }) {
  const { image, title, description } = post

  return (      
    <div id="post-container">
      <img id="post-image" src={image} alt={title}></img>
      <p id="post-description">{description}</p>
    </div>
  )
}

export default PostContainer