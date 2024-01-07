// Write your code here

import './index.css'
import LoginMessage  from '../Message'

const Loginprofile = props => {
  const {Login} = props

  const onLogin = () => {
    Login()
  }

  return (
    <div>
      {LoginMessage}
      <button className="button" type="button" onClick={onLogin}>
        Login
      </button>
    </div>
  )
}
export default Loginprofile
