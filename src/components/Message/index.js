// Write your code here

import './index.css'

<<<<<<< HEAD
const Message = props => {
  const {isLoggedIn} = props
  const message = isLoggedIn ? 'Welcome User' : 'Please Login'
  return <h1 className="heading">{message}</h1>
}

export default Message
=======
export const LoginMessage = () => <h1 className="heading">Please Login</h1>
export const LogoutMessage = () => <h1 className="heading">Welcome User</h1>

>>>>>>> dc6eb5d328f8bc8bc7ef464be62c24b87ccab2d2
