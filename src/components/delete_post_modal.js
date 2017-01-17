//next step: extract presentational component
import React from 'react'
import {connect} from 'react-redux'

import {push} from 'react-router-redux'
import {deletePost, hideModal} from '../actions'

const DeletePostModal = ({ post, dispatch }) => (
  <div className='modal-content'>
    <p>Delete post {post.title}?</p>
    <button className='close' onClick={() => {
      dispatch(deletePost(post.id)).then(
        dispatch(hideModal()).then(
          dispatch(push('/'))
        ))
    }}>
      Yes
    </button>
    <button className='close' onClick={() => dispatch(hideModal()).then(
        dispatch(push('/'))
      )}>
      Nope
    </button>
  </div>
)

export default connect((state, ownProps) => ({
  post: state.posts[ownProps.selectedPostId]
})
)(DeletePostModal)
