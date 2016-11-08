import React from 'react';
import { Link, hashHistory, ReactRouter } from 'react-router';

class CreatePostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUser,
      image_url: this.props.cloudinaryUrl,
      caption: ""
    };

    this.uploadPart = this.uploadPart.bind(this);
    this.createPost = this.createPost.bind(this);

  }

  photoPreview() {
    return (
        <img src={this.props.cloudinaryUrl} alt="uploaded-photo"/>
      )
      // let options = Object.assign({}, {inline_container: '.css-selector'}, window.CLOUDINARY_OPTIONS);
      // cloudinary.openUploadWidget(options, function (error, results) {
      //   !error && this.setState({image_url: results[0].url, isLoading: false});
      // }.bind(this));
      //
      // return (
      //   <div className='css-selector'></div>
      // );
    }

    handleSubmit() {
      this.createPost();
      this.props.closeModal();
    }

    createPost() {
      const {image_url, caption} = this.state;
      this.props.createPost({image_url, caption, user_id: this.props.currentUser.id});
    }

    render() {
      return (
        <div>
          {this.photoPreview()}
          <br/>
          <input type="text" placeholder="Insert caption here..." onChange={caption => this.setState({caption})} />
          <button onClick={this.handleSubmit}>Upload Your Post</button>
        </div>
      );
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
