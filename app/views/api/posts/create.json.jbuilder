json.extract! @post, :id, :user_id, :image_url, :caption
# json.age time_ago_in_words(@post.created_at)
json.user @post.user, :id, :username
# json.likes @post.likes, :id, :post_id, :user_id
# json.comments @post.comments, :id, :body
