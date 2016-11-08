json.array! @posts do |post|
  # json.set! post.id do
  #   json.partial! 'post', post: post
  # end
  json.extract! post, :id, :user_id, :image_url, :caption
  json.age post.age
  json.user post.user, :id, :username
  # json.likes post.likes, :id, :post_id, :user_id

  # json.comments do |comment|
  #   json.array! post.comments do |comment|
  #     json.id comment.id
  #     json.body comment.body
  #     json.user comment.user
  #   end
  # end
end
