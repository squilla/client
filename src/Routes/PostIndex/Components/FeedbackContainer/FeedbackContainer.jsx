/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import InputTextArea from '../../../../Components/InputTextArea/InputTextArea'

import './feedbackcontainer.css'

export default class FeedbackContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      comment: '',
      rating: '',
    }

    this.handleCommentChange = this.handleCommentChange.bind(this)
    this.handleRatingClick = this.handleRatingClick.bind(this)
  }

  handleCommentChange(event) {
    this.setState({
      comment: event.target.value,
    })
  }

  handleRatingClick(event) {
    this.setState({
      rating: event.target.value,
    })
  }

  render() {
    const { handleSubmit } = this.props
    const { comment: commentValue, rating: ratingValue } = this.state

    return (
      <div className="feedback-container">
        <div id="rating-container">
          <h2 className="b-bottom" id="rating-label">
            Rate and Leave Feedback
          </h2>
          <ul id="ratings">
            <li
              onClick={this.handleRatingClick}
              value="1"
              className="rating"
            >
              1
            </li>
            <li
              onClick={this.handleRatingClick}
              value="2"
              className="rating"
            >
              2
            </li>
            <li
              onClick={this.handleRatingClick}
              value="3"
              className="rating"
            >
              3
            </li>
            <li
              onClick={this.handleRatingClick}
              value="4"
              className="rating"
            >
              4
            </li>
            <li
              onClick={this.handleRatingClick}
              value="5"
              className="rating"
            >
              5
            </li>
          </ul>
        </div>
        <div id="comment-container">
          <InputTextArea
            divId="feedback-input"
            name="comment"
            type="text"
            placeholder="This art is..."
            stateText={commentValue}
            onChange={this.handleCommentChange}
          />
        </div>
        <button
          className="button2"
          type="submit"
          onClick={() => handleSubmit(commentValue, ratingValue)}
        >
          Send Feedback
        </button>
      </div>
    );
  }
}
