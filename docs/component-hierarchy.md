**Bolded** components are associated with routes.

Bolded routes are created by their associated routes, so the nesting of bolded components _**exactly**__ match the nesting of the routes.

* **App**
  * NavBar
    * IndexPageLink
    * **SearchBar Container**
    * **UploadPost Container**
  * **AuthFormContainer**
    * Sign Up/Sign In Form
  * **PhotosFeedContainer**
      * **PostFeedItems Component**
      * HeaderBar
        * UserInfo
        * DateStamp
      * Image
      * LikesCounter
      * CommentDisplay
      * Interactive Bar
        * LikeButton
        * AddCommentForm
  * **PostShowContainer**
    * HeaderBar
      * UserInfo
      * DateStamp
    * Image
    * LikesCounter
    * CommentDisplay
    * Interactive Bar
      * LikeButton
      * AddCommentForm
* **UserProfileContainer**
  * **UserInfo Component**
    * ProfileHeader
      * Picture
      * Information
      * Following Status
  * **UserPostIndex**
    * Posts (which render PostIndexItem for each Post)

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/users/:userId" | "UserProfileContainer" |
| "/users/:userId/photos/:photoId" | "PostShowContainer" |
| "/posts" | "PhotosIndexContainer" |
| "/posts/:postId" | "PostShowContainer" |
| "/new-post" | "UploadPostContainer" |
| "/search" | "SearchContainer" |
