// Write your code here

import './index.css'
import Message from '../Message'

const Loginprofile = props => {
  const {Login} = props

  const onLogin = () => {
    Login()
  }

  return (
    <div>
      <Message isLoggedIn={Login} />
      <button className="button" type="button" onClick={onLogin}>
        Login
      </button>
    </div>
  )
}
export default Loginprofile
