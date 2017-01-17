//next step: extract presentational component
import React from 'react'
import {connect} from 'react-redux'

import {hideModal} from '../actions'

const LoginModal = ({ user, dispatch }) => (
  <div className='modal-content'>
    <p>Welcome! You are logged in as <strong>{user}</strong>.</p>
    <p>Hobbit authorization is not yet available. Check back soon!</p>
    <button className='close' onClick={() => dispatch(hideModal())}>
      Hobbit1 it is then...
    </button>
  </div>
)

export default connect(state => ({
  user: state.user
})
)(LoginModal)
