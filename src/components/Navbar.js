import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>{(authContext) => (
        <ThemeContext.Consumer>{ (themeContext) => {
          const { isAuthenticated, toogleAuth } = authContext
          const { isLightTheme, light, dark } = themeContext;
          const theme = isLightTheme ? light : dark;
            return (
              <nav style={{background: theme.ui, color:theme.syntax}}>
                <h1>Context App</h1>
                <div onClick={toogleAuth}>
                  { isAuthenticated ? 'Logged In' : 'Logged out' }
                </div>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </nav>
            )
          }}
        </ThemeContext.Consumer>
      )}
      </AuthContext.Consumer>
    )
  }
}

export default Navbar;
