import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Home from './Home/Home.jsx'
import NewPost from './NewPost/NewPost.jsx'
import Login from './LogIn/LogIn.jsx'
import Profile from './Profile/Profile.jsx'
import Landing from './Landing/Landing.jsx'

export default class Routes extends React.Component {
  constructor(props) {
    super(props)
  }

  landingControl() {
    const { user } = this.props

    if (user) {
      return (
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/new" component={NewPost} />
          <Route path="/profile" component={Profile} />
        </div>
      )
    } else {
      return (
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/signup" component={Login} />
          <Route path="/login" component={Login} />
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.landingControl()}
      </div>
    )
  }
  
}