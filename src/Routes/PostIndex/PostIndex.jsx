import React from 'react'
import axios from 'axios'

import PostContainer from './Components/PostContainer/PostContainer.jsx'
import FeedbackContainer from './Components/FeedbackContainer/FeedbackContainer.jsx'

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
    axios.get('/api/art/')
  }

  handleSubmit(commentValue, ratingValue) {
    const { comment, rating } = this.state

    this.setState({
      comment: commentValue,
    })

    this.setState({
      rating: ratingValue,
    })

    console.log(comment, rating)
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
