import {routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux'
//in the next version actions will accomplish more, reducers solely for maintaining state

const initialState = [
  {
    id: 0,
    author: 'OmnipresentBilboBaggins',
    title: 'It Is Time Now',
    text: 'We Hobbits have always been plain, quiet folk. Never have we had any use for adventures, nasty, disgusting, or uncomfortable things. I have had more than my share, and it is time now for me to retire. And though, you will not see or hear me anymore, I am here, one eye on the Shire the other on this blog. For all of your worldly hobbit needs, let this Hobbit Blog bring you great solace; that, hereforward you are not alone. It is on this website that you can find and organize what you wish, with hobbits from all around the world.',
    dateCreated: 0
  },
  {
    id: 1,
    author: 'LegendaryFrodoBaggins',
    title: 'Evil Must Not Prevail',
    text: 'A call to all hobbits to crawl from wherever they may currently reside. The time is now. For evil has once more taken over our world, creeping ever closer to our lives, our homes, the Shire. Do not wait, make haste. Time is not on our side. I cannot take the ring this time. Decide amongst yourselves. As Bilbo used to say, there is only one Road; that it was like a great river: its springs are at every doorstep and every path is its tributary. “It’s a dangerous business, Frodo, going out of your door,” he used to say. “You step into the Road, and if you don’t keep your feet, there is no telling where you might be swept off to."',
    dateCreated: 0
  }
]
const posts = (state = initialState, action) => {
  switch (action.type) {

    case 'DELETE_POST':
      state.splice(action.selectedPostId, 1);
      state.map((i) => {
        if (i.id > action.selectedPostId) {
          return i.id -= 1
        }
        return i
      })
      return state

    case 'SUBMIT_POST':
      return [
        ...state, {
        id: state.length,
        author: 'Hobbit1',
        title: action.title,
        text: action.text,
        dateCreated: action.submittedAt
      }]
    default:
      return state
  }
}


const user = (state = 'Hobbit1', action) => {
  switch (action.type) {

    case 'LOGIN_USER':
      return state
    default:
      return state
  }
}


const modalInitialState = {
  modalType: null,
  modalProps: {}
}
const modal = (state = modalInitialState, action) => {
  switch(action.type) {

    case 'SHOW_MODAL':
      return {
        modalType: action.modalType,
        modalProps: action.modalProps
      }

    case 'HIDE_MODAL':
      return modalInitialState
    default:
      return state
    }
  }


const rootReducer = combineReducers({
    posts,
    user,
    modal,
    routing: routerReducer
  })

export default rootReducer
