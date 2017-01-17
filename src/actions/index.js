let nextPostID = 2;
export const submitPost = (title, text) => ({
  type: 'SUBMIT_POST',
  id: nextPostID++,
  title,
  text,
  submittedAt: Date.now()
})

export const deletePost = (selectedPostId) => ({
  type: 'DELETE_POST',
  selectedPostId
  //console.log('Delete Post not yet supported')
})

export const showModal = (modalType, modalProps) => ({
  type: 'SHOW_MODAL',
  modalType,
  modalProps
})

export const hideModal = () => ({
  type: 'HIDE_MODAL'
})

/*
export const login = () => ({
  type: 'LOGIN_USER'
})
*/
