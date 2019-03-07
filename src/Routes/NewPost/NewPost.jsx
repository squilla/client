import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, Redirect, BrowserHistory } from 'react-router-dom'

import './newpost.css'

export default class NewPost extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      response: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.responseSetState = this.responseSetState.bind(this)
  }

  // eslint-disable-next-line class-methods-use-this
  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target)

    axios.post('/api/art', formData)
      .then((res) => this.responseSetState(res))
  }

  responseSetState(res) {
    console.log(res)
    this.setState({
      response: res.status
    })
  }

  submitRedirect() {
    const { response } = this.state

    if (response === 200) {
      return <Redirect to="/" />
    }

    return null
  }

  render() {
    return (
      <form id="new-post-form-container" onSubmit={this.handleSubmit}>
        <div id="new-post-upload-btn-wrapper">
          <button id="new-post-btn">Upload Art</button>
          <input type="file" name="art" id="new-post-file-upload" />
        </div>
        <label className="new-post-input-label">
          Title
          <input type="text" name="name" className="new-post-input-text" />
        </label>
        <label className="new-post-input-label">
          Description
          <textarea name="description" className="new-post-input-text" rows="4" cols="50" maxLength="3000" placeholder="Max character count: 3000"></textarea>
        </label>
        <button type="submit" id="new-post-submit">Submit</button>

        {this.submitRedirect()}
      </form>
    )
  }
}
