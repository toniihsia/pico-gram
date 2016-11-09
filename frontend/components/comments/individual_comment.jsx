// import React from 'react';
// import { hashHistory } from 'react-router';
//
// class Comment extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   redirectUser(e) {
//     let userId = this.props.comment.user.id;
//     let url = `/users/${userId}`;
//
//     hashHistory.push(url);
//
//     if (this.props.callback) {
//       this.props.callback();
//     }
//   }
//
//   render() {
//     let comment = this.props.comment;
//     let deleteButton = "";
//
//     if (comment.user.username === JSON.parse(localStorage.getItem('currentUser')).username) {
//       deleteButton = <button className="delete-button" onClick={this.props.removeComment}>x</button>;
//     }
//
//     return (
//       <div className="comment-and-delete">
//         <div className="comment">
//           <span className="user-link" onClick={this.redirectUser}>
//             {comment.user.username}
//           </span>
//           <br/>
//           {comment.body}
//         </div>
//         {deleteButton}
//       </div>
//     );
//   }
// }
