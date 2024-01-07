// Write your code here

import './index.css'
import LogoutMessage from '../Message'

const Logoutprofile = props => {
  const {Logout} = props
  const onLogout = () => {
    Logout()
  }
  return (
    <div>
      {LogoutMessage}
      <button className="button" type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  )
}
export default Logoutprofile
