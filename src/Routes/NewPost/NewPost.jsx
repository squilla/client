import React from 'react'

// eslint-disable-next-line react/prefer-stateless-function
export default class NewPost extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
    }
  }

  handleSubmit() {
    // something will go here
    // this is just here to resolve the errors
    const { user } = this.props
    const { title } = this.state

    console.log(user, title)
  }

  render() {
    return (
      <div>
        <input type="file" name="my_file_upload" id="my_file_upload_id" className="bg_checkbox" />
      </div>
    )
  }
}
