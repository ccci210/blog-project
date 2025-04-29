const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <h4>{comment.name}</h4>
      <p>{comment.body}</p>
    </div>
  );
};
export default Comment;
