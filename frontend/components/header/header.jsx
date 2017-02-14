import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cloudinaryUrl: "",
      caption: "",
      openModal: false};

    this.update = this.update.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.uploadPost = this.uploadPost.bind(this);
    this.redirectToUserProfile = this.redirectToUserProfile.bind(this);
    this.headerItems = this.headerItems.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectToIndex = this.redirectToIndex.bind(this);
  }

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
    hashHistory.replace(`/users/${this.props.currentUser.id}`);
  }

  redirectToIndex(e) {
    e.preventDefault();
    this.props.fetchPosts();
    hashHistory.replace('/');
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
    const style = {
      overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(62, 62, 62, 0.6)',
        zIndex            : 11
      },
      content : {
        position                   : 'fixed',
        top                        : '40%',
        left                       : '40%',
        border                     : '1px solid #ccc',
        background                 : '#fff',
        overflow                   : 'auto',
        outline                    : 'none',
        translate                  : 'translate(-50%, -50%)',
        zIndex                     : 11
      }
    };


    return (
      <div className="main-header">
        <ul className="navbar-links">
          <li className="navbar-logo">
            <div className="navbar-logo" onClick={this.redirectToIndex}>
                <label className="home-button-1">Pico</label><label className="home-button-2">Gram</label>
            </div>
          </li>

          <li className="navbar-item" onClick={this.uploadPost}>
            <div>Upload</div>
          </li>

          <li onClick={this.redirectToUserProfile} className="navbar-item">
            <Link to="/">Profile</Link>
          </li>

          <li onClick={this.props.logOut} className="navbar-item">
            <Link to="/">Log Out</Link>
          </li>
        </ul>

          <Modal
            isOpen={this.state.openModal}
            className="modal"
            style={style}
            >
            <div className="upload-modal">
              <img className="photo-preview" src={this.state.cloudinaryUrl} alt="photo-preview"/>
              <br />
              <div className="upload-content">
                <input type="text" value={this.state.caption} placeholder="Insert caption here..." onChange={this.update('caption')}
                className="caption-input"
                />
                <button
                  onClick={this.handleSubmit}
                  className="modal-button">
                  Upload
                </button>
                <button
                  onClick={this.closeModal}
                  className="modal-button">
                  Cancel
                </button>
              </div>
            </div>
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
