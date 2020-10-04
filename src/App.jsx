import React from 'react'
import Home from './views/common/home/home'
import Login from './views/common/login/login'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {token} = document.cookie

    return (
      <div>
        {
          token ? <Home /> : <Login />
        }
      </div>
    )
  }
}