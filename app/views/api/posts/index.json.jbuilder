json.array! @posts do |post|
  json.extract! post, :id, :user_id, :image_url
  json.age post, time_ago_in_words(post.created_at)
  json.user post.user, :id, :username
  json.likes post.likes, :id, :post_id, :user_id

  # json.comments do |comment|
  #   json.array! post.comments do |comment|
  #     json.id comment.id
  #     json.body comment.body
  #     json.user comment.user
  #   end
  # end
end
