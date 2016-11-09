json.extract! post, :id, :caption, :image_url
json.user do
  json.id post.user.id
  json.username post.user.username
end
# json.likes post.likes.count
json.age post.age

json.comments do
  post.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :user_id
      json.extract! comment.user, :username
    end
  end
end
