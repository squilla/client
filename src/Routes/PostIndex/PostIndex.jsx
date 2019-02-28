import React from 'react'

import PostContainer from './Components/PostContainer/PostContainer.jsx'
import FeedbackContainer from './Components/FeedbackContainer/FeedbackContainer.jsx'
import axios from 'axios'

// eslint-disable-next-line react/require-render-return
export default class PostIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      comment: '',
      rating: '',
    }
  }

  componentWillMount() {
    // get art resource as `post`
  }

  handleSubmit(commentValue, ratingValue) {
    this.setState({
      comment: commentValue,
    })

    this.setState({
      rating: ratingValue,
    })
  }


  render() {
    return (
      <div id="post-index-container">
        <PostContainer post="post" />
        {/* ^^^^^^^^^^ post={post}, where `post` is set to art resource api response */}
        <FeedbackContainer handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}
