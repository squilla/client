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
    }
  }

  componentWillMount() {
    // get art resource as `post`
    axios.get('/api/art/random').then((res) => {
      const image = res.data.art.url.string
      this.returnImage(image)
    })
  }

  returnImage(image) {
    this.setState({
      img: image,
    })
  }

  // eslint-disable-next-line class-methods-use-this
  handleSubmit(commentValue, ratingValue) {
    axios.post('/api/feedback/', { commentValue, ratingValue })
      .then((res) => {
        console.log(res)
        // something
      }).catch((err) => {
        console.warn(err)
      })
  }


  render() {
    const { img: image } = this.state

    return (
      <div id="post-index-container">
        <PostContainer post={image} />
        <FeedbackContainer handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}
