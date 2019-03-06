/* eslint-disable no-underscore-dangle */
import React from 'react'
import axios from 'axios'

import PostContainer from './Components/PostContainer/PostContainer.jsx'
import FeedbackContainer from './Components/FeedbackContainer/FeedbackContainer.jsx'

// eslint-disable-next-line react/require-render-return
export default class PostIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      img: null,
      imgId: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    axios.get('/api/art/random').then((res) => {
      const image = res.data.url
      const imgId = res.data._id
      this.returnImage(image, imgId)
    })
  }

  returnImage(image, id) {
    this.setState({
      img: image,
    })

    this.setState({
      imgId: id,
    })
  }

  // eslint-disable-next-line class-methods-use-this
  handleSubmit(comment, react) {
    const { imgId } = this.state
    // eslint-disable-next-line react/destructuring-assignment
    const { _id } = this.props.props

    if (comment) {
      const commentBody = {
        author: _id,
        art: imgId,
        feedbackType: 'comment',
        content: comment,
      };

      axios.post('/api/feedback', commentBody)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err.message)
        })
    }

    if (react) {
      const reactionBody = {
        author: _id,
        art: imgId,
        feedbackType: 'reaction',
        reaction: react,
      };

      axios.post('/api/feedback', reactionBody)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err.message)
        })
    }
  }


  render() {
    const { img } = this.state

    return (
      <div id="post-index-container">
        <PostContainer post={img} />
        <FeedbackContainer handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}
