import React from 'react'

import PostContainer from './Components/PostContainer.jsx'
import FeedbackContainer from './Compontents/FeedbackContainer.jsx'

// eslint-disable-next-line react/require-render-return
export default class PostIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      comment: ""
    }
  }


  render() {
    <div id="post-index-container">
      <PostContainer post={post} />
      <FeedbackContainer />
    </div>
  }
}