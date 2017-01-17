import React, {PropTypes} from 'react'
import {Link} from 'react-router'

 const PostBrief = ({post}) => {


   return(
    <Link to={`/posts/${post.id}`} className="post-brief">
      <div>
        <p id='post-brief-title'>Title: {post.title}</p>
        <p id='post-brief-author'>Author: {post.author}</p>
        <p id='post-brief-date'>Date: {(post.dateCreated === 0) ? 'Unkown' : new Date(post.dateCreated).toLocaleString()}</p>
        <p id='post-brief-text'>{post.text.substring(0,53)} <u>...continue reading</u></p>
      </div>
    </Link>
  )}

PostBrief.PropTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    dateCreated: PropTypes.string.isRequired
  }).isRequired
}

export default PostBrief
