import React, {Component} from 'react'
import {Link, IndexLink} from 'react-router'

class HeaderTemplate extends Component {


  renderHeaderContents() {
    const {onDeleteClick, onLoginClick, currentPath, posts, params} = this.props

    if (currentPath.match('/posts')) {
      return(
        <div>
          <h2 id='sub-title'>{posts[params.id].title}</h2>
          <div className='header-right'>
            <p onClick={onDeleteClick}>Delete</p>
          </div>
        </div>
        );
    }
    else if (currentPath.match('/create-post')) {
      return(
        <h2 id='sub-title'>Create Post</h2>
      );
    }
    else {
      return(
        <div className='header-right'>
          <Link to='/create-post'>New Post</Link><br />
          <p className='header-right-links' onClick={onLoginClick}>Login</p>
        </div>
      )
    }
  }

  render() {
    return(
      <div id='main-header'>
        <h1 id='title'>
          <IndexLink to='/' activeClassName='active'
            activeStyle={{
              textDecoration:'none',
              color: 'black'
            }}>
            The Hobbit Blog</IndexLink>
        </h1>
        <div>
          {this.renderHeaderContents()}
        </div>
      </div>
      );
    }
  }

export default HeaderTemplate
