/* eslint-disable no-underscore-dangle */
import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, Redirect, BrowserHistory } from 'react-router-dom'

import PostContainer from './Components/PostContainer/PostContainer.jsx'
import FeedbackContainer from './Components/FeedbackContainer/FeedbackContainer.jsx'

// eslint-disable-next-line react/require-render-return
export default class PostIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      img: null,
      imgId: null,
      response: null,
    }

    this.handleSubmitReact = this.handleSubmitReact.bind(this)
    this.handleSubmitComment = this.handleSubmitComment.bind(this)
    this.responseSetState = this.responseSetState.bind(this)
    this.submitRedirect = this.submitRedirect.bind(this)
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
  handleSubmitComment(comment, react) {
    const { imgId } = this.state
    // eslint-disable-next-line react/destructuring-assignment
    const { _id } = this.props.user

    if (comment) {
      const commentBody = {
        author: _id,
        art: imgId,
        feedbackType: 'comment',
        content: comment,
      }

      axios.post('/api/feedback', commentBody)
        .then(this.handleSubmitReact(react))
    }
  }

  handleSubmitReact(react) {
    const { imgId } = this.state
    // eslint-disable-next-line react/destructuring-assignment
    const { _id } = this.props.user

    if (react) {
      const reactionBody = {
        author: _id,
        art: imgId,
        feedbackType: 'reaction',
        reaction: react,
      }

      axios.post('/api/feedback', reactionBody)
        .then(this.responseSetState(200))
    }
  }

  responseSetState(res) {
    this.setState({
      response: res
    })

    this.setState({
      prop: res
    })
    this.submitRedirect()
  }

  submitRedirect() {
    const { response, prop } = this.state

    if (response === 200) {

      this.setState({
        response: null,
      })

      this.setState({
        prop: null,
      })
      
      axios.get('/api/art/random').then((res) => {
        const image = res.data.url
        const imgId = res.data._id
        this.returnImage(image, imgId)
      })
    }

    return null
  }

  render() {
    const { img, prop } = this.state

    return (
      <div id="post-index-container">
        <PostContainer post={img} />
        <FeedbackContainer post={img} handleSubmit={this.handleSubmitComment} />
        {this.submitRedirect()}
      </div>
    )
  }
}
