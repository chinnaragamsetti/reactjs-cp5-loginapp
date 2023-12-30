// Write your code here

import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {isLoggedin: true}

  onLogout = () => {
    this.setState(prevState => ({isLoggedin: !prevState.isLoggedin}))
  }

  onLogin = () => {
    this.setState(prevState => ({isLoggedin: !prevState.isLoggedin}))
  }

  render() {
    const {isLoggedin} = this.state
    return (
      <div className="container">
        <div className="subcontainer">
          {isLoggedin ? <Logout /> : <Login />}
        </div>
      </div>
    )
  }
}

export default Home
