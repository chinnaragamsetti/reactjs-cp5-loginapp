// Write your code here

import './index.css'

const Logoutprofile = props => {
  const {Logout} = props
  const onLogout = () => {
    Logout()
  }
  return (
    <button className="button" type="button" onClick={onLogout}>
      Logout
    </button>
  )
}
export default Logoutprofile
