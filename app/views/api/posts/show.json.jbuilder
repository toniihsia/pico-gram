json.extract! @post, :id, :user_id, :image_url, :caption, :comments
# json.age time_ago_in_words(@post.created_at)
json.user @post.user, :username, :id
# json.likes @post.likes, :id, :post_id, :user_id
# 
# json.comments do
#   @post.comments.each do |comment|
#     json.set! comment.id do
#       json.extract! comment, :id, :body
#       json.extract! comment.user, :username
#     end
# end
