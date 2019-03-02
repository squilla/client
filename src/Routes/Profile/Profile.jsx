import React from 'react'
import axios from 'axios'

import ArtContainer from './Components/ArtContainer/ArtContainer.jsx'

// eslint-disable-next-line react/prefer-stateless-function
export default class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  loadData() {
    const { user } = this.props
    const { _id: userId } = user

    axios.get(`/api/users/${userId}`)
      .then((res) => {
        const userArt = res.data.art

        return userArt.map(art => <ArtContainer props={art} />)
      })
  }

  render() {
    // const { user } = this.state
    return (
      <div>
        <div id="user-art-container">
          {this.loadData()}
        </div>
      </div>
    )
  }
}