/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
// our model doesn't support a title tag, so i can't add an alt

import React from 'react'
import axios from 'axios'

import './artcontainer.css'

export default class ArtContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: [],
      ratings: [],
    }
  }

  componentDidMount() {
    const { _id: artId } = this.props.art

    axios.get(`/api/feedback/art/${artId}`)
    .then((res) => {
      const { data } = res

      const ratings = data.filter((feedback) => feedback.kind === "Reaction")
      const comments = data.filter((feedback) => feedback.kind === "Comment")

      this.setState({
        comments,
        ratings
      })
    })
  }

  render() {
    const { art, onClick } = this.props
    const { url, _id: artId } = art
    const { ratings, comments } = this.state

    const ratingsCount = ratings.reduce((curCount, rating) => {
      const { reaction } = rating;

      if (reaction in curCount) {
        return {
          ...curCount,
          [reaction]: curCount[reaction] + 1,
        };
      }
      return { ...curCount };
    }, {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    });

    
  
    return (
      <div className="art-container">
        <p><img src={url} className="single-art-image" onClick={() => onClick(artId)} /></p>

        <div className="feedback-container">
          <div className="rating-container">
            <li>1 <span className="ratings-count">{ratingsCount['1']}</span></li>
            <li>2 <span className="ratings-count">{ratingsCount['2']}</span></li>
            <li>3 <span className="ratings-count">{ratingsCount['3']}</span></li>
            <li>4 <span className="ratings-count">{ratingsCount['4']}</span></li>
            <li>5 <span className="ratings-count">{ratingsCount['5']}</span></li>
          </div>
          <div className="comments-container">
            <p className="comments-title">Comments:</p>
            {comments.map(comment =>
              <p className="comments" key={comment._id}>{comment.content}</p>
            )}
          </div>
        </div>
      </div>
    )
  }
}

