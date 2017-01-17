import React, {Component} from 'react'

export default class PostDetails extends Component {


  render() {
    const post = this.props.posts[this.props.params.id]

    return(
      <div id='post-details'>
        <p id='post-author'>Author: {post.author}</p>
        <p id='post-date'>Date: {(post.dateCreated === 0) ? 'Unkown' : new Date(post.dateCreated).toLocaleString()}</p>
        <p id='post-text'>{post.text}</p>
      </div>
    )

  }
}
