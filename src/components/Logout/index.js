// Write your code here

import './index.css'
import Message from '../Message'

const Logoutprofile = props => {
  const {Logout} = props
  const onLogout = () => {
    Logout()
  }
  return (
    <div>
      <Message isLoggedIn={Logout} />
      <button className="button" type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  )
}
export default Logoutprofile
