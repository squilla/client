import React from 'react'
import InputText from '../../../../Components/Input/InputText'

export default class FeedbackContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      comment: '',
      rating: '',
    }
  }

  render() {
    const { handleSubmit } = this.props
    const { comment: commentValue, rating: ratingValue } = this.state

    return (
      <div id="feedback-container">
        <div id="rating-container">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
        <div id="comment-container">
          <InputText />
          <button type="submit" onClick={() => handleSubmit(commentValue, ratingValue)}>
            Send Feedback
          </button>
        </div>
      </div>
    )
  }
}
