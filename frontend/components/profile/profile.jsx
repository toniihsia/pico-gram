import React from 'react';
import { hashHistory, Link, withRouter } from 'react-router';
// import ProfilePost from './profile_post';
import Modal from 'react-modal';
import merge from 'lodash/merge';

class Profile extends React.Component {
  constructor(props){
    super(props);
  }

  userPostsObjToArray(posts) {
    console.log(posts);
    if (posts) {
      let postsArr = [];
      let postKeys = Object.keys(posts);
      for (let i = 0; i < postKeys.length; i++) {
        postsArr.push(posts[postKeys[i]]);
        return postsArr;
      }
    } else {
        return [];
      }
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

  render() {
    console.log(this.props);
    let userProfile = this.props.profile;
    let userPosts = this.userPostsObjToArray(this.props.profile.posts);
    console.log(userPosts);
    let numUserPosts = userPosts.length;
    let numUserFollowees = this.numUserFollowees(userProfile.followees);
    let numUserFollowers = this.numUserFollowers(userProfile.followers);

    return (
      <div className="profile">
        <div className="profile-info">
          <img
            className="profile-pic"
            src={userProfile.profile_pic}
            alt={userProfile.username}/>
          <div className="username-title">Username: </div><div className="username">{userProfile.username}</div>
          <div className="user-posts-title">Posts: </div><div className="user-posts">{numUserPosts}</div>
          <div className="user-followees-title">Follows: </div><div className="user-followees">{numUserFollowees}</div>
          <div className="user-followers-title">Followers: </div><div className="user-followers">{numUserFollowers}</div>
        </div>
        <div className="user-posts">
          <ul className="user-post-index">
            {
              userPosts.map( post => <ProfilePostItem
                key={userProfile.username + post.id}
                post={post}
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
