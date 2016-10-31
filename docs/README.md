# PicoGram
[Heroku Link][heroku]

[Trello Link][trello]

[heroku]: https://thisispicogram.herokuapp.com/
[trello]: https://trello.com/b/SSawsreK/picogram

## Minimum Viable Product
PicoGram is a web application inspired by Instagram. It is built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, allow users to do the following:
- [ ] Create new account, login, and guest/demo login.
- [ ] Upload and display photos.
- [ ] Create and delete comments on photos.
- [ ] Follow users.
- [ ] Like/unlike photos.

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline
### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] Create new project.
- [ ] Create `User` model.
- [ ] Implement authentication.
- [ ] Create functioning user sign up/sign in pages.


### Phase 2: Post Model, API, and basicAPIUtil (2 days)
**Objective:** Posts can be created, read, and destroyed via API.

- [ ] Create `Post` model and controller.
- [ ] Seed database.
- [ ] Create jBuilder views for posts.
- [ ] Set up frontend.
- [ ] Test API interaction in console.

### Phase 3: Frontend Profile and Photos (2 days)
**Objective:** Posts can be created with user interface and can display. Index of all photos should display. Upload form should work, with photos added via URL.

### Phase 4: Page Layout (0.5 days)
**Objective:** Ensure current pages are easily navigated and generally aesthetic.

### Phase 5: Proper Upload (1.5 days)
**Objective:** Allow users to upload photos versus entering a URL.
- [ ] Set up Cloudinary

### Phase 6: Comments (2 days)
**Objective:** Allow users to comment on photos. Comments should appear immediately after submission.
- [ ] create `Comment` model.
- [ ] Build out API, flux loop, and components for:
  - [ ] Comment CRUD
  - [ ] Integrate Comment into `CommentBox`
- [ ] Style new views.

### Phase 7: Follows (1 day)
**Objective:** Allow users to follow one another.
- [ ] Create `Follow` model.
- [ ] Build out API, Flux loop, and components.
- Style new views.

### Phase 8: Likes (1 day)
**Objective:** Allow users to like photos.
- [ ] Create `Like` model.
- [ ] Build out API, Flux loop, and components.
- Style new views

### Phase 9: User Search (1 day)
**Objective:** Allow users to upload photos versus entering a URL.
- [ ] Allow users to search for other users.
- [ ] Search results show users in drop-down menu with follow/unfollow buttons.

### Phase 10: Display Correct Posts (1 day)
**Objective:** Allow users to upload photos versus entering a URL.
- [ ] Photo stream only shows photos of current user's followed users.

### Phase 11: Infinite Scroll
**Objective:** Allow users to scroll through stream infinitely.

### Bonus Features
- [ ] Infinite Scrolling
- [ ] Show user profile when clicking usernames from front page.
- [ ] Time stamps.
- [ ] Clicking a photo's timestamp or clicking a photo from a user's profile brings up single photo view.
- [ ] Profile photos.
