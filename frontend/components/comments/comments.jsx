// import React from 'react';
// import CommentForm from './comment_form';
// import IndividualComment from './individual_comment';
// // import LikeButton from './like_button';
//
// class Comments extends React.Component {
//   constructor(props) {
//     super(props);
//
//   }
//
//   render() {
//     let post = this.props.post;
//     let self = this;
//     let comments = post.comments.map( comment => {
// <IndividualComment
//             key={comment.id}
//             comment={comment}
//             removeComment={this.props.removeComment}
//           />
//         );
//       }
//     });
//
//     return(
//       <div className="comments-box">{comments}</div>
//       <div>
//         <CommentForm postId={post.id}/>
//       </div>
//     );
//   }
// };
