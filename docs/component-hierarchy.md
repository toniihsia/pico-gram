**Bolded** components are associated with routes.

Bolded routes are created by their associated routes, so the nesting of bolded components _**exactly**__ match the nesting of the routes.

* **App**
  * **AuthFormContainer**
    * Sign Up Form

  * **PhotosIndexContainer**
    * Navbar
      * IndexPageLink
      * SearchBar
    * **PostFeedContainer**
      * **PostFeedItem*Container**
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
  * ProfileHeader
    * Picture
    * Information
    * Following Status
  * **UserPostContainer**
    * Posts
  * **UploadPostContainer**
* **SearchContainer**
* **TagsSearchContainer**

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/users/:userId" | "UserProfileContainer" |
| "/users/:userId/photos/:photoId" | "UserPostContainer" |
| "/posts" | "PhotosIndexContainer" |
| "/posts/:postId" | "PostFeedContainer" |
| "/new-post" | "UploadPostContainer" |
| "/search" | "SearchContainer" |
| "/tag-search" | "TagSearchContainer" |
