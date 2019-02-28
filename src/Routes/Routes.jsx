import React from 'react'
import {
  // eslint-disable-next-line no-unused-vars
  BrowserRouter as Router, Route, Link, Redirect,
} from 'react-router-dom'

import PostIndex from './PostIndex/PostIndex.jsx'
import NewPost from './NewPost/NewPost.jsx'
import LogIn from './LogIn/LogIn.jsx'
import Profile from './Profile/Profile.jsx'
import Landing from './Landing/Landing.jsx'

// eslint-disable-next-line react/prefer-stateless-function
export default class Routes extends React.Component {
  render() {
    const { user, handleLogin, location } = this.props

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

        <Route
          path="/signin"
          render={() => <LogIn user={user} handleLogin={handleLogin} />}
        />
        
        <Route
          path="/newpost"
          render={() => (
            user ? (
              <NewPost />
            ) : (
              <Redirect
                to={{
                  pathname: '/signin',
                  state: { from: location },
                }}
              />
            )
          )}
        />
        <Route
          path="/profile"
          render={() => (
            user ? (
              <Profile user={user} />
            ) : (
              <Redirect
                to={{
                  pathname: '/signin',
                  state: { from: location },
                }}
              />
            )
          )}
        />
      </div>
    )
  }
}
