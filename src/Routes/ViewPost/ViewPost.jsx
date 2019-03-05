import React from 'react'
import axios from 'axios'

import PostContainer from '../PostIndex/Components/PostContainer/PostContainer.jsx'
import CommentContainer from './Components/CommentContainer/CommentContainer.jsx'

// eslint-disable-next-line react/require-render-return
export default class ViewPost extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      img: null,
      comments: null,
    }
  }

  componentWillMount() {
    const { id } = this.props
    axios.get(`/api/art/${id}`).then((res) => {
      const image = res.data.art.url.string
      this.setImage(image)
    })

    axios.get(`/api/feedback/${id}`).then((res) => {
      const { feedback } = res.data
      this.setFeedback(feedback)
    })
  }

  setImage(image) {
    this.setState({
      img: image,
    })
  }

  setFeedback(feedback) {
    this.setState({
      comments: feedback,
    })
  }

  getComments() {
    const { comments } = this.state

    if (comments) {
      return comments.map(comment => <CommentContainer feedback={comment} />)
    }
  }

  render() {
    const { img: image } = this.state

    return (
      <div id="post-index-container">
        <PostContainer post={image} />
        <div id="comments-container">
          {this.getComments()}
        </div>
      </div>
    )
  }
}
