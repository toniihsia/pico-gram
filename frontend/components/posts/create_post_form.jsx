import React from 'react';
import { Link, hashHistory, ReactRouter } from 'react-router';

class CreatePostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image_url: "",
      user_id: null
    };
  }






}
// constructor(props) {
//   super(props);
//   this.state = {
//     image_url: "",
//     caption: ""
//   }

// render() {
//   let loading;
//   if (this.state.load && this.state.errors === ""){
//     loading = (
//       <div className="loading">
//         <img src={window.loading} />
//       </div>
//     )
//   } else if (!this.state.loading){
//     loading = (
//       <div>
//         <img src={this.state.image_url} />
//         <h3>Add Caption</h3>
//         <textarea = row="5" cols="40"
//           onChange={this.captionChange}
//           value={this.state.caption}
//           placeholder="Caption here!" />
//       </div>
//     )
//   }
//
//   return (
//     <div className="create-post-form">
//         <h1>Upload!</h1>
//         <form onSubmit={this.handleSubmit}>
//           <h2>{this.state.errors}</h2>
//
//           {loading}
//           <label className='custom-file-upload'>
//             <input type="file" onChange={this.updateFile}/>
//             Choose File!
//           </label>
//
//           <input type="submit" value="Upload!" />
//         </form>
//         <Link to="/">Back to Feed</Link>
//     </div>
//   )
// }
