json.extract! user, :username, :id
json.currentUser user, :username, :id

json.posts do
  user.posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/show'
    end
end
