import React from 'react'
import axios from 'axios';

export default class NewPost extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      file: null,
      title: '',
    }

    this.selectedFileHandler = this.selectedFileHandler.bind(this)
  }

  selectedFileHandler(event) {
    this.setState({
      file: event.target.files[0],
    })
  }

  handleSubmit() {
    // something will go here
    // this is just here to resolve the errors
    const { user } = this.props
    const { title, file } = this.state

    const { _id: id } = user

    axios.post('', { title, file, id })
      .then(response => console.log(response))
  }

  render() {
    return (
      <div>
        <input type="file" onChange={this.selectedFileHandler} />
      </div>
    )
  }
}
