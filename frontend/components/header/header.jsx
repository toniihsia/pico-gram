import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';

// let style = {
//   overlay: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(255, 255, 255, 0.75)'
//   },
//   content: {
//     position: 'fixed',
//     top: '20%',
//     width: '500px',
//     bottom: '20%',
//     margin: '0 auto',
//     border: '1px solid #ccc',
//     padding: '20px',
//     backgroundColor: 'snow',
//     background: '#fff',
//     outline: 'none',
//     opacity: '0',
//     transition: 'opacity 0.5s',
//     borderRadius: '15px'
//   }
// };

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cloudinaryUrl: "",
      caption: "",
      openModal: false};

    this.update = this.update.bind(this);
    this.closeModal = this.closeModal.bind(this);
    // this.openModal = this.openModal.bind(this);
    // this.onModalOpen = this.onModalOpen.bind(this);
    this.uploadPost = this.uploadPost.bind(this);
    this.redirectToUserProfile = this.redirectToUserProfile.bind(this);
    this.headerItems = this.headerItems.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // getInitialState() {
  //   return ({ modalOpen: false });
  // }

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
        this.setState({
          cloudinaryUrl: results[0].url,
          openModal: true
        });
      }
    }.bind(this));
  }

  redirectToUserProfile(e) {
    e.preventDefault();
    hashHistory.push(`/users/${this.props.currentUser.id}`);
  }

  closeModal() {
    this.setState({openModal: false});
  }

  handleSubmit(e) {
    let newPhoto = {
      user_id: this.props.currentUser.id,
      image_url: this.state.cloudinaryUrl,
      caption: this.state.caption
    };

    e.preventDefault();
    this.setState({openModal: false});
    this.props.createPost(newPhoto);
  }

  update(field) {
    return (e) => { this.setState({ [field]: e.target.value }); };
  }

  headerItems() {
    return (
      <div>
        <ul className="navbar-links">
          <li className="navbar-logo">
            <div className="navbar-logo">
              <Link to="/">
                <label className="home-button-1">Pico</label><label className="home-button-2">Gram</label>
              </Link>
            </div>
          </li>

          <li onClick={this.uploadPost}>
            <div className="navbar-item">Upload</div>
          </li>

          <li onClick={this.redirectToUserProfile}>
            <Link className="navbar-item" to="/">Profile</Link>
          </li>

          <li onClick={this.props.logOut}>
            <Link className="navbar-item" to="/">Log Out</Link>
          </li>
        </ul>

          <Modal isOpen={this.state.openModal}>
            <img className="photo-preview" src={this.state.cloudinaryUrl} alt="photo-preview"/>
            <input type="text" placeholder="Insert caption here..." onChange={this.update('caption')} />
            <button onClick={this.handleSubmit}>Upload</button>
            <button onClick={this.closeModal}>Cancel</button>
        </Modal>
      </div>

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

export default Header;
