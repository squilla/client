import React from 'react'
import axios from 'axios'

import PostContainer from '../PostIndex/Components/PostContainer/PostContainer.jsx'

// eslint-disable-next-line react/require-render-return
export default class ViewPost extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      img: null,
    }
  }

  componentWillMount() {
    const { id } = this.props
    axios.get(`/api/art/${id}`).then((res) => {
      const image = res.data.art.url.string
      this.returnImage(image)
    })
  }

  returnImage(image) {
    this.setState({
      img: image,
    })
  }

  render() {
    const { img: image } = this.state

    return (
      <div id="post-index-container">
        <PostContainer post={image} />
      </div>
    )
  }
}
