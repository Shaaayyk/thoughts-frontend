import { Link } from "react-router-dom"
import { Segment, Header, Icon } from 'semantic-ui-react'

export default function PageHeader({user, handleLogout}) {
  return (
    <>
      <Segment clearing style={{height: '10vh'}} padded>
        <Header floated="left">
          <Link to='/'>
            <Icon name="home" color="black"></Icon>
          </Link>
        </Header>
        {
          user ?
            <Header floated="right">
              <Link to='' onClick={handleLogout}>Logout</Link>
            </Header>
          : null
        }
      </Segment>
    </>
  )
}