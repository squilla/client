import React from 'react'

function CommentContainer({ props }) {
  const { feedback } = props

  return (
    <div className="single-comment-container">
      <p>{feedback}</p>
    </div>
  )
}

export default CommentContainer