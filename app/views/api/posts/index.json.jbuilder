# json.array! @posts do |post|
#   json.extract! post, :id, :user_id, :image_url, :caption
#   json.age post.age
#   json.user post.user, :id, :username
#   # json.likes post.likes, :id, :post_id, :user_id
#
#   json.comments do |comment|
#     json.array! post.comments do |comment|
#       json.id comment.id
#       json.body comment.body
#       json.user comment.user
#     end
#   end
# end

# @posts.each do |post|
#   json.set! post.id do
#     json.extract! post, :id, :user_id, :image_url, :caption
#
#     json.user do
#       json.username post.user.username
#       json.user_id post.user.id
#     end
#
#     json.age post.age
#
#     json.comments do
#       post.comments.each do |comment|
#         json.set! comment.id do
#           json.extract! comment, :id, :body
#           json.extract! comment.user, :username, :id
#         end
#       end
#     end
#   end
# end

@posts.each do |post|
  json.set! post.id do
    json.partial! 'api/posts/show', post: post
  end
end
