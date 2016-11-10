json.extract! post, :id, :caption, :image_url

json.user do
  json.id post.user.id
  json.username post.user.username
  json.followers post.user.followers
  json.followees post.user.followees
end

json.like_count post.like_count
json.user_likes post.user_likes.map(&:id)

json.likes do
  post.likes.each do |like|
    json.set! like.id do
      json.extract! like, :id, :post_id, :user_id
    end
  end
end

json.age post.age

json.comments do
  post.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :user_id
      json.extract! comment.user, :username
    end
  end
end
