import React , {Component} from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToogle extends Component {
  static contextType = ThemeContext;
  render() {
    const { toogleTheme } = this.context;
    return (
      <button onClick={toogleTheme}>
        Toogle the theme
      </button>
    )
  }
}

export default ThemeToogle
