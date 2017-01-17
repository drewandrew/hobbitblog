import React, {Component} from 'react'

export default class CreatePostForm extends Component {
  componentDidMount() {
    this.titleInput.focus();
  }

  render() {
    const {onSubmitPost} = this.props

    return (
      <div>
        <form id='create-post-form'
          onSubmit={e => {
          e.preventDefault()
          if (!this.titleInput.value.trim() || !this.textInput.value.trim()) {
            return
          }
          onSubmitPost(this.titleInput.value, this.textInput.value)
        }}>
          Title<br />
          <input type='text'
            ref={node => {this.titleInput = node}}
            name='titleInput'
          /><br />
          Post Text<br />
          <input type='text'
            ref={node => {this.textInput = node}}
            name='titleInput'
          /><br />
          <input type='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}
