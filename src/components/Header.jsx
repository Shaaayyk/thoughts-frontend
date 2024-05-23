import { Link } from "react-router-dom"

export default function Header({user, handleLogout}) {
  return (
    <>
      <Link to='/'>Home</Link>
      {
        user ?
          <>
            <h4>Hello, {user.firstName}</h4>
            <Link to='' onClick={handleLogout}>Logout</Link>
          </>
        : null
      }
    </>
  )
}
