import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

function UsersContainer ({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers()
    console.log(userData)
  }, [])
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>API LIST</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map(user => <p>Name : {user.name}<br/> Email : {user.email}<br/>User Name : {user.username}</p>)}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)
