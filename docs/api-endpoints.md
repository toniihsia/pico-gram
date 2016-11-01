# API endpoints

## HTML API

### Root
- `GET /` - loads React web app

## JSON API

### Session
- `POST /api/session`
- `DELETE /api/session`

### Users
- `GET /api/users/:id`
- `POST /api/users`
- `PATCH /api/users/:id`

### Follows
- `POST /api/users/:id/follows`
- `DELETE /api/users/:id/follows`

### Posts
- `GET /api/posts`
- `POST /api/posts`
- `GET /api/posts/:id`
- `PATCH api/posts/:id`
- `DELETE /api/posts/:id`

### Likes
- `POST /api/posts/:id/likes`
- `DELETE /api/posts/:id/likes/:id`

### Comments
- `POST /api/posts/:id/comments`
- `PATCH /api/posts/:id/comments/:id`
- `DELETE api/posts/:id/comments/:id`
