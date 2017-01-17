import React, { Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import HeaderTemplate from '../components/header_template'
import ModalRoot from './modal_root'
import {submitPost, showModal} from '../actions'
import {push} from 'react-router-redux'

class MainContainer extends Component {
//maintaining as class-based component for lifecycle hooks in next version

  handleDeleteClick = () => {
    if (this.props.posts[this.props.params.id].author !== this.props.user) {
      return (
        this.props.dispatch(showModal('NO_ACCESS', {
          selectedPostId: this.props.params.id
        }))
      )
    }
    this.props.dispatch(showModal('DELETE_POST', {
      selectedPostId: this.props.params.id
    }))
  }

  handleLoginClick = () => {
    this.props.dispatch(showModal('LOGIN', {}))
  }

  handleSubmitPost = (title, text) => {
    this.props.dispatch(submitPost(title, text)).then(
      this.props.dispatch(push('/'))
    )
  }

  render() {
    return(
      <div id='main-container'>
        <HeaderTemplate
          onDeleteClick={this.handleDeleteClick}
          onLoginClick={this.handleLoginClick}
          posts={this.props.posts}
          currentPath={this.props.location.pathname}
          params={this.props.params}
          />
        <ModalRoot />
        <div id='body-container'>
          {this.props.children && React.cloneElement(this.props.children, {
            posts: this.props.posts,
            onSubmitPost: this.handleSubmitPost
          })}
        </div>
    </div>
    );
  }
}

MainContainer.PropTypes = {
  user: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    dateCreated: PropTypes.string.isRequired
  }).isRequired).isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  user: state.user,
  posts: state.posts
})

export default connect (
  mapStateToProps
)(MainContainer);
