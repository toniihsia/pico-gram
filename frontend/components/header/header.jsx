import React from 'react';
import { Link, hashHistory } from 'react-router';
import { Modal } from 'react-modal';

let style = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
  },
  content: {
    position: 'fixed',
    top: '20%',
    width: '500px',
    bottom: '20%',
    margin: '0 auto',
    border: '1px solid #ccc',
    padding: '20px',
    backgroundColor: 'snow',
    background: '#fff',
    outline: 'none',
    opacity: '0',
    transition: 'opacity 0.5s',
    borderRadius: '15px'
  }
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {openModal: false};

    // this.closeModal = this.closeModal.bind(this);
    // this.openModal = this.openModal.bind(this);
    // this.onModalOpen = this.onModalOpen.bind(this);
    this.uploadPost = this.uploadPost.bind(this);
    this.redirectToUserProfile = this.redirectToUserProfile.bind(this);
    this.headerItems = this.headerItems.bind(this);
  }

  // closeModal() {
  //   this.setState({modalOpen: false});
  //   style.content.opacity = 0;
  //   this.props.fetchPosts();
  //   if (!location.hash.includes('users')) {
  //     history.push({
  //       pathname: '/',
  //       query: {r: true}
  //     });
  //   }
  // }
  //
  // openModal() {
  //   this.setState({modalOpen: true});
  // }
  //
  // onModalOpen() {
  //   style.content.opacity = 100;
  // }

  uploadPost(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function (error, results) {
      if (!error) {
        let postData = {
          user_id: this.props.currentUser.id,
          image_url: results[0].url
        };
        this.props.createPost(postData);
      }
    }.bind(this));
  }

  redirectToUserProfile(e) {
    e.preventDefault();
    hashHistory.push(`/users/${this.props.currentUser.id}`);
  }

  headerItems() {
    console.log('headerItems');
    return (
      <ul className="navbar-links">
        <li className="navbar-logo">
          <div className="navbar-logo">
            <Link to="/">
              <label className="home-button-1">Pico</label><label className="home-button-2">Gram</label>
            </Link>
          </div>
        </li>

        <li onClick={this.uploadPost}>
          <Link to="/" className="navbar-item">Upload</Link>
        </li>

        <li onClick={this.redirectToUserProfile}>
          <Link className="navbar-item" to="/">Profile</Link>
        </li>

        <li onClick={this.props.logOut}>
          <Link className="navbar-item" to="/">Log Out</Link>
        </li>
      </ul>
    );
  }

  render() {
    if (!this.props.currentUser) {
      return ( <div></div>);
    } else {
      return (
        this.headerItems(this.currentUser, this.logOut)
      );
    }
  }
}
// const headerItems = (currentUser, logOut, createPost) => {
//
//   let closeModal() {
//     this.setState({ modalOpen: false });
//
//   }
//
//   return (
//     <ul className="navbar-links">
//       <li className="navbar-logo">
//         <div className="navbar-logo">
//           <Link to="/">
//             <label className="home-button-1">Pico</label><label className="home-button-2">Gram</label>
//           </Link>
//         </div>
//       </li>
//
//       <li>
//         <Link to="/" className="navbar-item">Upload</Link>
//       </li>
//
//       <li>
//         <Link className="navbar-item" to="/">Profile</Link>
//       </li>
//
//       <li onClick={logOut}>
//         <Link className="navbar-item" to="/">Log Out</Link>
//       </li>
//     </ul>
//   );
// };
//
//
// const Header = ({currentUser, logOut, createPost}) => {
//   if (!currentUser) {
//     return ( <div></div>);
//   } else {
//     return (
//       headerItems(currentUser, logOut)
//     );
//   }
// };
//
export default Header;
