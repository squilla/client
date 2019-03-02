import React from 'react'

export default class NewPost extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      img: null,
      title: '',
    }

    this.selectedFileHandler = this.selectedFileHandler.bind(this)
  }

  selectedFileHandler(e) {
    const file = e.target.files
    const reader = new FileReader()

    reader.readAsDataURL(file[0])
    reader.onload = (e) => {
      const formData = { file: e.target.result }

      this.setState({
        img: formData,
      })
    }
  }

  handleSubmit() {
    // something will go here
    // this is just here to resolve the errors

    const { user } = this.props
    const { title, img } = this.state

    const { _id: id } = user
    console.log('hey this isn\'t set up', id, title, img)


    // axios.post('', { title, file, id })
    //   .then(response => console.log(response))
  }

  render() {
    return (
      <div>
        <input type="file" onChange={this.selectedFileHandler} accept=".jpg, .png" />
      </div>
    )
  }
}
