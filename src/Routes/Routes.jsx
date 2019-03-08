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
    const {
      user,
      location,
      display,
      handleLogin
    } = this.props

    return (
      <div>
        <Route
          exact
          path="/give"
          render={() => (
            user ? (
              <PostIndex user={user} />
            ) : (
              <Redirect
                to={{
                  pathname: '/',
                  state: { from: location },
                }}
              />
            )
          )}
        />

        <Route
          path="/signin"
          render={() => (
            user ? (
              <Redirect
                to={{
                  pathname: '/',
                  state: { from: location },
                }}
              />
            ) : (
              <LogIn
                display={display}
                handleLogin={handleLogin}
              />
            ))}
        />

        <Route
          path="/get"
          render={() => (
            user ? (
              <NewPost user={user} />
            ) : (
              <Redirect
                to={{
                  pathname: '/signin',
                  state: { user: '' },
                }}
              />
            )
          )}
        />

        <Route
          push
          path="/"
          exact
          render={() => (
            user ? (
              <Profile user={user} />
            ) : (
              <Landing {...this.props} />
            )
          )}
        />

        <Route
          path="/logout"
          render={() => (
            <Redirect
              to={{
                pathname: '/',
                state: { user: '' },
              }}
            />
          )}
        />
      </div>
    )
  }
}
