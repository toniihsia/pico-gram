import React from 'react';
import { hashHistory } from 'react-router';
import ProfilePostItem from './profile_post_item';

class Profile extends React.Component {
  constructor(props){
    super(props);

    this.renderFollowButton = this.renderFollowButton.bind(this);
    this.followToggler = this.followToggler.bind(this);
  }

  userPostsObjToArray(posts) {
    let postsArr = [];

    if (posts) {
      let postKeys = Object.keys(posts);
      // debugger
      for (let i = postKeys.length - 1; i >= 0; i--) {
        postsArr.push(posts[postKeys[i]]);
        console.log(postsArr);
      }
    } else {
        return [];
    }

    return postsArr;
  }
  // renderUserPosts(post) {
  //
  // }
  numUserFollowees(followees) {
    if (followees) {
      return followees.length;
    } else {
      return 0;
    }
  }

  numUserFollowers(followers) {
    if (followers) {
      return followers.length;
    } else {
      return 0;
    }
  }

  renderFollowButton() {
    let postAuthorFollowers = this.props.profile.followers;
    if (this.props.profile.id === this.props.currentUser.id) {
      return (<div></div>);
    }

    if (this.props.currentUser.followees.includes(this.props.profile.id)) {
      return (<button className="profile-following-button" onClick={this.followToggler}>Following</button>);
    } else {
      return (<button className="profile-follow-button" onClick={this.followToggler}>Follow</button>);
    }
  }

  followToggler() {
    let currentUser = this.props.currentUser;
    let authorId = this.props.profile.id;

    if (currentUser.followees.includes(authorId)) {
      this.props.deleteFollow(author.id);
    } else {
      this.props.createFollow({followee_id: authorId});
    }
  }

  render() {
    console.log(this.props)
    let userProfile = this.props.profile;
    let userPosts = this.userPostsObjToArray(this.props.profile.posts);
    // console.log(userPosts);
    let numUserPosts = userPosts.length;
    let numUserFollowees = this.numUserFollowees(userProfile.followees);
    let numUserFollowers = this.numUserFollowers(userProfile.followers);

    return (
      <div className="profile">
        <div className="header-info-container">
          <img
            className="profile-pic"
            src={userProfile.profile_pic}
            alt={userProfile.username}/>
          <div className="header-info">
            <div className="profile-username">{userProfile.username}</div>
            <div className="profile-info">
              <label className="profile-title"><label className="profile-content">{numUserPosts}</label> posts</label>
              <label className="profile-title"><label className="profile-content">{numUserFollowees}</label> following</label>
              <label className="profile-title"><label className="profile-content">{numUserFollowers}</label> followers</label>
            </div>
            {this.renderFollowButton()}
          </div>
        </div>
        <div className="user-posts">
          <ul className="user-post-index">
            {
              userPosts.map( post => <ProfilePostItem
                key={userProfile.username + post.id}
                post={post}
                profile={this.props.profile}
                currentUser={this.props.currentUser}
                createComment={this.props.createComment}
                deleteComment={this.props.deleteComment}
                createLike={this.props.createLike}
                deleteLike={this.props.deleteLike}
              /> )
            }
          </ul>
        </div>
      </div>

    );
  }
}

export default Profile;