# json.extract! @post, :id, :user_id, :image_url, :caption, :comments
# # json.age time_ago_in_words(@post.created_at)
# json.user @post.user, :username, :id
# # json.likes @post.likes, :id, :post_id, :user_id
# #

json.set! @post.id do
  json.partial! 'api/posts/show', post: @post
end
