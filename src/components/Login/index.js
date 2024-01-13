// Write your code here

import './index.css'

const Loginprofile = props => {
  const {Login} = props

  const onLogin = () => {
    Login()
  }

  return (
    <button className="button" type="button" onClick={onLogin}>
      Login
    </button>
  )
}
export default Loginprofile
