//This modal dispatching method was coined by Dan Abramov. See: http://stackoverflow.com/questions/35623656/how-can-i-display-a-modal-dialog-in-redux-that-performs-asynchronous-actions/35641680
import React from 'react'
import {connect} from 'react-redux'

import DeletePostModal from '../components/delete_post_modal'
import NoAccess from '../components/no_access_modal'
import LoginModal from '../components/login_modal'
//import modals as needed here

const MODAL_COMPONENTS = {
  'DELETE_POST': DeletePostModal,
  'NO_ACCESS': NoAccess,
  'LOGIN': LoginModal
}

const ModalRoot = ({modalType, modalProps}) => {
  if (!modalType) {
    return null
  }

  const SpecificModal = MODAL_COMPONENTS[modalType]
  return <SpecificModal {...modalProps} id='modal'/>
}

export default connect(
  state => state.modal
)(ModalRoot)
