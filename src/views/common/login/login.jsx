import React from 'react'
import "./login.scss"

export default class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="login-page">
        <div className="img-container">
          <img src="../../../assets/img/login_bg.jpg" alt=""/>
        </div>
        <div className="login-container">

        </div>
      </div>
    )
  }
}