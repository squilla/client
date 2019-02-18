import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './Home/Home.jsx'
import NewPost from './NewPost/NewPost.jsx'
import LogIn from './LogIn/LogIn.jsx'
import Profile from './Profile/Profile.jsx'
import Landing from './Landing/Landing.jsx'

export default class Routes extends React.Component {
  landingControl() {
    const { user } = this.props

    if (user) {
      return (
        <div>
          <Route exact path="/" component={Home} />
        </div>
      )
    }

    if (!user) {
      return (
        <div>
          <Route exact path="/" component={Landing} />
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.landingControl()}
        <Route path="/signup" component={LogIn} />
        <Route path="/signin" component={LogIn} />
        <Route path="/new" component={NewPost} />
        <Route path="/profile" component={Profile} />
      </div>
    )
  }
}
