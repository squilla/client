import React from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import PostIndex from './PostIndex/PostIndex.jsx'
import NewPost from './NewPost/NewPost.jsx'
import LogIn from './LogIn/LogIn.jsx'
import Profile from './Profile/Profile.jsx'
import Landing from './Landing/Landing.jsx'

// eslint-disable-next-line react/prefer-stateless-function
export default class Routes extends React.Component {
  render() {
    const { user, handleLogin } = this.props

    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            user ? (
              <PostIndex />
            ) : (
              <Landing />
            )
          )}
        />
        <Route path="/signin" render={() => <LogIn user={user} handleLogin={handleLogin} />} />
        <Route path="/new" component={<NewPost user={user} />} />
        <Route path="/profile" component={<Profile user={user} />} />
      </div>
    )
  }
}
