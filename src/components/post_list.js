import React, {Component} from 'react'
import PostBrief from './post_brief'
//import {connect} from 'react-redux'

class PostList extends Component {

//keeping as class-based component for lifecycle hooks in next version
  render() {

    return(
      <div id='post-list'>
        <ul>
          {this.props.posts.map((post, i) => (
            <li key={i}>
              <PostBrief
                post={post}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default PostList
/*
const mapStateToProps = (state) => ({
  posts: state.posts
})

export default connect(mapStateToProps)(PostList)
*/
