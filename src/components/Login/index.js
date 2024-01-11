// Write your code here

import './index.css'
<<<<<<< HEAD
import Message from '../Message'
=======
import LoginMessage  from '../Message'
>>>>>>> dc6eb5d328f8bc8bc7ef464be62c24b87ccab2d2

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
