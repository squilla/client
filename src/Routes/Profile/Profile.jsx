import React from 'react'
import axios from 'axios'

import ArtContainer from './Components/ArtContainer/ArtContainer.jsx'

import './profile.css'

// eslint-disable-next-line react/prefer-stateless-function
export default class Profile extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)

    this.state = {
      data: [],
    }
  }

  componentWillMount() {
    const { _id: userId } = this.props.user
    axios.get(`/api/artists/${userId}/art`)
      .then((res) => {
        this.setState({
          data: res.data,
        })
      })
  }

  checkData() {
    const { data } = this.state

    
    if (data.length == 0) {
      return <p id="profile-no-data">Upload Your First Piece of Art to View Your Profile!</p>
    }
  }

  render() {
    const { data } = this.state
    return (
      <div>
        <div id="user-art-container">
          {this.checkData()}
          {data.map((art) =>
            <ArtContainer art={art} onClick={this.getFeedbackWithId} />
          )}
        </div>
      </div>
    )
  }
}
