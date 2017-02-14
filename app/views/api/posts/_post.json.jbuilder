json.extract! post, :id, :user_id, :image_url, :caption
json.age post.age

json.user do
  json.username post.user.username
  json.user_id post.user.id
  json.followers post.user.followers.map(&:id)
end

json.comments do
  post.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body
      json.extract! comment.user, :username, :id
    end
end
