//next step: extract presentational component
import React from 'react'
import {connect} from 'react-redux'

import {push} from 'react-router-redux'
import {hideModal} from '../actions'

const NoAccess = ({ author, dispatch }) => (
  <div className='modal-content'>
    <p>Sorry, <strong>Hobbit1</strong>, this post can only be deleted by the author, {author}</p>
    <button className='close' onClick={() => dispatch(hideModal()).then(
        dispatch(push('/'))
      )}>
      Okay, fine, whatever
    </button>
  </div>
)

export default connect((state, ownProps) => ({
  author: state.posts[ownProps.selectedPostId].author
})
)(NoAccess)
