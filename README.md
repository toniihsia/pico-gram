# PicoGram
[Heroku Link][heroku]
[heroku]: https://thisispicogram.herokuapp.com/

PicoGram is a lightweight photo sharing web-application modeled after Instagram.

![Image of PicoGram][docs/production-rm-photos/pico-gram.png]
PicoGram uses PostgreSQL for its database, Ruby on Rails for its backend, and React.js with a Redux architectural framework on the frontend.

## Features & Implementation
![Image of PostIndexItem][docs/production-rm-photos/post-index-item.png]
### Photo Feed
PicoGram's core function is its post feed. Post feeds are catered to the current user and only display posts of users they follow and/or their own posts.

Posts are stored in the database in a single table (posts). This table contains columns for `id`, `image_url`, `caption`, and the foreign key `user_id`. A post is connected to a user via this foreign key. Pertinent posts are filtered via the current user's `id` which is joined to the posts table upon post and/or user API calls. These posts are stored in the posts slice of Store.

Posts are rendered in a singular component: the `PostIndexItem` component which is rendered as a subcomponent of `PostIndex`. The `PostIndexItem` component displays the post's author, follow status, post age, like information, and comments. It also provides options to follow/unfollow post authors, like/unlike photos, and create/delete comments. These features will be expanded upon below.

### Likes
Users have the option to like/unlike posts that appear on their feed. Likes are stored in the database as a join table between the Users and Posts tables. It contains the columns `id`, `post_id`, and `user_id`. Through this association, users have many posts that they like. The posts they like are stored in the user slice of store.

Users can create a like for a post by clicking a heart button that appears next to the comments form. The heart is either unfilled or filled based on whether the user has not liked or has liked a post. A custom click handler dispatches a createLike/deleteLike action which creates either a `POST` or `DELETE` API request. The SessionReducer re-renders the page by returning a new state with the current user's new/removed like.

### Comments
Users have the option to comment on posts that appear on their feed. Comments are stored in the database in a single table (comments). This table contains columns for `id`, `body` and the foreign keys `user_id` as well as `post_id`. Users associated with comments via this foreign key. Therefore, users have many comments and posts have many comments.

Users can create or destroy their own comments. A user creates a comment by submitting a form on the frontend. A custom submission handler dispatches a createComment action. This action dispatch hits the PostsMiddleware which makes an API `POST` request and creates the comment in the database/backend. The PostsReducer re-renders the page by returning a new state with the new comment nested under the post.

A user destroys a comment by clicking an 'X' button that appears next to all comments they have made. The 'X' button is rendered based on the current user's id and the comment's user (author) id. Once clicked, a custom click handler dispatches a deleteComment action. This action dispatch hits the PostsMiddleware which makes an API `DELETE` request and removes the comment in the database/backend. The PostsReducer re-renders the page by returning a new state with the new comment nested under the post.

### Photo Upload
Users have the option to create their own posts that appear on their and their followers' feeds. Photos are uploaded to the Cloudinary API, where an image URL is generated. This URL is used to create a preview for the user before they fill out a caption form. A custom submission handler dispatches a createPost action. This action dispatch hits the PostsMiddleware which makes an API `POST` request and creates the post in the database/backend. The PostsReducer re-renders the page by returning a new state with the new post nested under both the current user and the posts slice of state.

### User Follows
Users have the option to follow/unfollow other users. Follows stored in the database as a self-join table in Users. The follows table contains the columns `id`, `followee_id`, and `follower_id`. Through this association, users can have many followees and/or followers.

Users can create a follow for a user by clicking a 'Follow' button that appears next to a post author's username. The 'Follow' button is either unfilled or filled based on whether the user has followed or not followed a user. A custom click handler dispatches a createFollow/deleteFollow action which creates either a `POST` or `DELETE` API request.

## Future Directions for the project
## Post Deletion/Editing (?)
Users should be able to delete and/or edit their posts. Intend to add a drop down menu with those options.

## Profile Pages
Users should have profile pages that display their posts and an unfollow/follow button.

## Search
Users should be able to search for other users.

## Infinite Scroll
The feed should infinitely scroll.
