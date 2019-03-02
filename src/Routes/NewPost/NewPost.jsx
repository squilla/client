import React from 'react'

export default class NewPost extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      img: null,
    }

    this.selectedFileHandler = this.selectedFileHandler.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  selectedFileHandler(e) {
    const file = e.target.files
    const reader = new FileReader()

    reader.readAsDataURL(file[0])
    // can't do anything about this scope error
    // eslint-disable-next-line no-shadow
    reader.onload = (e) => {
      const formData = { file: e.target.result }

      this.setState({
        img: formData,
      })
    }
  }

  handleSubmit() {
    const { user } = this.props
    const { img } = this.state

    const { _id: id } = user
    console.log('hey this isn\'t set up', id, img)

    // uncomment for art posting
    // axios.post('/api/art/', { img })
    //   .then(response => console.log(response))
  }

  render() {
    return (
      <div>
        <input type="file" onChange={this.selectedFileHandler} accept=".jpg, .png" />
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}
