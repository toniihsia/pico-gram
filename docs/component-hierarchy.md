**Bolded** components are associated with routes.

Bolded routes are created by their associated routes, so the nesting of bolded components _**exactly**__ match the nesting of the routes.

* ** App **
  * **SignIn Form**
  * **SignUp Form**
  * **PhotosIndex**
    * Navbar
      * IndexPageLink
      * SearchBar
    * PostFeed
      * PostFeedItem
      * HeaderBar
        * UserInfo
        * DateStamp
      * Image
      * LikesCounter
      * CommentDisplay
      * Interactive Bar
        * LikeButton
        * AddCommentForm
* **UserProfile**
  * ProfileHeader
    * Picture
    * Information
    * Following Status
  * UserPosts
    * Posts
  * UploadPostForm (for current user profile only?)
