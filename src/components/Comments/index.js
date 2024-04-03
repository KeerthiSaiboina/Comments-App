import {Component} from 'react'
import {v4} from 'uuid'

import './index.css'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comment extends Component {
  state = {
    nameInput: '',
    commentInput: '',
    commentList: [],
  }

  onChangeNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeCommentInput = event => {
    this.setState({commentInput: event.target.value})
  }

  renderCommentList = () => {
    const {commentList} = this.state

    return commentList.map(eachComment => (
      <CommentItem
        commentDetails={eachComment}
        key={eachComment.id}
        toggleIsLiked={this.toggleIsLiked}
        onDeleteComment={this.onDeleteComment}
      />
    ))
  }
  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onDeleteComment = id => {
    const {commentList} = this.state
    this.setState({
      commentList: commentList.filter(comment => comment.id !== id),
    })
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const intialBackgroundColorClassNames = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      initialColor: intialBackgroundColorClassNames,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  render() {
    const {nameInput, commentInput, commentList} = this.state
    return (
      <div className="bg-container">
        <div className="comment-container">
          <div className="comments-inputs-container">
            <h1 className="heading">Comments</h1>
            <form className="form" onSubmit={this.onAddComment}>
              <p className="description">
                Say something about 4.0 Technologies
              </p>
              <input
                className="name-input"
                placeholder="Your Name"
                type="text"
                value={nameInput}
                onChange={this.onChangeNameInput}
              />
              <br />
              <textarea
                className="text-area"
                placeholder="Your Comment"
                rows="15"
                cols="49"
                value={commentInput}
                onChange={this.onChangeCommentInput}
              />
              <br />
              <button type="submit" className="add-btn">
                Add Comment
              </button>
            </form>
          </div>

          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="image" alt="comments"
          />
        </div>
        <hr className="line" />
        <p className="comments">
          <span className="comment-count">{commentList.length}</span>Comments
        </p>
        <ul className="comments-container">{this.renderCommentList()}</ul>
      </div>
    )
  }
}

export default Comment
