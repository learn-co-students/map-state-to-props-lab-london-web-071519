import React from 'react'
import { connect } from 'react-redux'

const Users = props => {
  return (
    <div>
      {props.numberOfUsers === undefined ? null : props.numberOfUsers}
      <ul>
        {props.users.map((user, index) => (
          <li key={index}>{user.username}</li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
