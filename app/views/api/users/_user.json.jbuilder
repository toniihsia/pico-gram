json.extract! user, :username, :id
json.currentUser user, :username, :id
json.liked_posts user.liked_posts.map(&:id)
