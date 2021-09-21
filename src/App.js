import './App.css';
import { useEffect, useState } from 'react';
import Comment from './Comment.js';

function App() {
  return (
    <div className="App">
      <Counter />
      <LoadComments></LoadComments>
      <Comment></Comment> 
     
    </div>
  );
}


function LoadComments() {
  
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setComments(data))
  }, []);
  
  return (
		<div>
			<h1>Load Comments</h1>
			{comments.map(comment => 
        <Comment key={ comment.title} title={comment.title} body={ comment.body}></Comment>
      )
    }
		</div>
	);

}

// function Comment(props) {

//   return(

//   <div className="user">
// 		<h4>Title : {props.title}</h4>
// 		<p> Description: {props.body}</p>
// 	</div>
  
//   );

// }




function Counter() {

  const [count, setcount] = useState(0);
  const handleIncrease = () => {
    setcount(count + 1);
  }
  const handleDecrease = () => {
    setcount(count - 1);
  }
  return (
		<div>
			<h2>Count : {count}</h2>
			<button onClick={handleIncrease}>Increase</button>
			<button onClick={handleDecrease}>Decrease</button>
		</div>
	);
  
}

export default App;
