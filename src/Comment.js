

function Comment(props) {
	return (
		<div className="user">
			<h4>Title : {props.title}</h4>
			<p> Description: {props.body}</p>
		</div>
	);
}
export default Comment;
