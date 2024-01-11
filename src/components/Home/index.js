// Write your code here

import {Component} from 'react'
import Loginprofile from '../Login'
import Logoutprofile from '../Logout'
import './index.css'

class Home extends Component {
  state = {isLoggedin: false}

  Logout = () => {
    this.setState(prevState => ({isLoggedin: !prevState.isLoggedin}))
  }

  Login = () => {
    this.setState(prevState => ({isLoggedin: !prevState.isLoggedin}))
  }

  render() {
    const {isLoggedin} = this.state
    return (
      <div className="container">
        <div className="subcontainer">
          {isLoggedin ? (
            <Logoutprofile Logout={this.Logout} />
          ) : (
            <Loginprofile Login={this.Login} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
