import React from 'react'
import axios from 'axios'

import ArtContainer from './Components/ArtContainer/ArtContainer.jsx'

import './profile.css'

// eslint-disable-next-line react/prefer-stateless-function
export default class Profile extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)

    this.loadData = this.loadData.bind(this)
  }

  loadData() {
    const { user } = this.props
    const { _id: userId } = user

    axios.get(`/api/artists/${userId}/art`)
      .then((res) => {
        console.dir(res)
        const userArt = res.data
        console.dir(userArt)

        return userArt.map((art) => {
          return <ArtContainer art={art} onClick={this.viewSingle} />
        })
      })
  }

  viewSingle() {
    console.log('click!')
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
