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
    axios.get('/api/art/random').then((res) => {
      console.log(res.data)
      const image = res.data.url
      this.returnImage(image)
    })
  }

  returnImage(image) {
    this.setState({
      img: image,
    })
  }

  // eslint-disable-next-line class-methods-use-this
  handleSubmit(content, reaction) {
    axios.post('/api/feedback', reaction)
    axios.post('/api/feedback', content)
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
