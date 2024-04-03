// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleIsLiked, onDeleteComment} = props
  const {id, name, comment, date, isLiked, initialColor} = commentDetails
  const initial = name ? name[0].toUpperCase() : ''
  const isLikedButton = isLiked ? 'button active' : 'button'
  const isLikedUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const postedTime = formatDistanceToNow(date)

  const onClickLike = () => {
    toggleIsLiked(id)
  }

  const onDeleteCommentId = () => {
    onDeleteComment(id)
  }

  return (
    <li>
    <div className="comment-list">
     <div className="comment-container">
     <div className={initialColor}>
     <p className="initial">{initial}</p>
     </div>
     <div>
     <div className="username-time-container">
     <p className="username">{name}</p>
     <p className="postedtime">{postedTime}</p>
     </div>
     <p className="comment">{comment}</p>
     </div>
     </div>
     <div className="button-container">
     <div className="like-container">
     <img src={isLikedUrl} alt="like" className="like-image"/>
     <button type="button" className={isLikedButton} onClick={onClickLike}>Like</button>
     </div>
     <button type="button" className="btn" data-testid="delete" onClick={onDeleteComment}>
     <img src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png" className="delete" alt="delete"/> 
     </button>
     </div>
    </div>
    <hr className="line"/>
    </li>
  )
}

export default CommentItem
